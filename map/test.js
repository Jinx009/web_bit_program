const $ = require('jquery');
const md5 = require('md5');
const loginName = 'test002';
const loginPsd = '123456';
const fetch = require('node-fetch');
const io = require('socket.io-client');
const schedule = require('node-schedule');
let guardians = {};
const uuid = require('node-uuid');
const urlbase = 'http://api.yymedic.com/gateway/';

login({loginName, loginPsd});
async function loginAccount({ loginName, loginPsd }) {
    const fetchResponse = fetch(urlbase + 'sessions', {
        method: 'POST',
        body: JSON.stringify({ name: loginName, password: md5(loginPsd).toString() }),
    })
    return fetchResponse;
}

async function getDevices(guardian) {
    const fetchResponse = fetch(urlbase + "guardians/" + guardian.guardianId + "/devices", {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + guardian.token },
    })
    return fetchResponse;
}
async function login({loginName, loginPsd}) {
    const result = await loginAccount({ loginName, loginPsd });
    guardians = await result.json();
    const devices = await getDevices(guardians);
    const deviceResult = await devices.json();
    await subscribeDevicesMsg(guardians, deviceResult);
}

function onAlarm(message) {
    // console.log('alarm', message);
}

//var _status = true;
//var rule = new schedule.RecurrenceRule();
//rule.second = 10;

//var j = schedule.scheduleJob(rule, function(){
//	if(_status){
//		 _status = false;
//	}else{
//		 _status = true;
//	}
//});
var _num = 0;
function onRealtimeState(message) {
    console.log(message);

    if(_num==30||_num==31){
        const response = _sendMsg('http://127.0.0.1:9001/gtw/rest/bed/push',message);
        if(response!=null){
            console.log('result====================================\n'+JSON.stringify(response)+'\n=============================================');
        }
    }
    if(_num==32){
        _num = 0;
    }
    _num++;
}

async function _sendMsg(url, data) {
    const formatedBody = data ? JSON.stringify(data) : undefined;
    const fetchResponse = fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formatedBody,
    })
    return fetchResponse;
}

function onConfigChange(message) {
    // console.log('configChange', message);
}

function onMessage(message) {
    // const msgType = JSON.parse(message).type;
    const msgType = message.type;
    switch (msgType) {
        case 'alarm':
            onAlarm(message);
            break;

        case 'state':
            onRealtimeState(message);
            break;

        case 'config':
            onConfigChange(message);
            break;

        default:
            break;
    }
}

function webSocketDisconnect() {
    console.log('websocket disconnect!');
}

function webSocketConnect() {
    console.log('websocket connect!');
}

function subscribeDevices(socket, devices) {
    const devicesArr = devices.devices;
    try {
        const deviceSubArray = devicesArr.map((item) => ({
                sn: item.sn, userId: item.userId
            }));
        socket.emit('subscribe', { devices: deviceSubArray });
    } catch (e) {
        console.log('subscribeDevices exception:', e);
    }
}

let webSocket = {};
const onConnectCallbacks = new Set();
// let webSocketConnecting = false;

async function requestApi(method, url, data, guardian) {
    const formatedBody = data ? JSON.stringify(data) : undefined;
    const fetchResponse = fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${guardian.token}`
        },
        body: formatedBody,
    })
    return fetchResponse;
}

async function delayTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve('ok');
    }, 2000);
})
}

async function connectMsgGateway(guardian, onConnectCallback) {
    try {
        if (webSocket && webSocket.connected) {
            onConnectCallback(webSocket);
            return;
        }
        if (webSocket) {
            console.log(webSocket.connected);
        }
        onConnectCallbacks.add(onConnectCallback);
        if (webSocket && webSocket.webSocketConnecting) {
            return;
        }
        webSocket = {};
        webSocket.webSocketConnecting = true;
        const ticket = uuid.v4();
        const response = await requestApi('POST', `http://api.yymedic.com/gateway/guardians/${guardian.guardianId}/tickets`, {ticket}, guardian);
        if (response.ok) {
            webSocket = await io('http://msg.yymedic.com', {
                query: { guardianId: guardian.guardianId, ticket, ver: 1 },
                reconnect: true,
                transports: ['websocket'],
            });
            if (webSocket.connected) {
                for (const func of onConnectCallbacks.keys()) {
                    func(webSocket);
                }
            } else {
                webSocket.on('connect', function () {
                    // Toast.hide();
                    webSocketConnect();
                    for (const func of onConnectCallbacks.keys()) {
                        func(webSocket);
                    }
                });
                webSocket.on('disconnect', function () {
                    webSocketDisconnect();
                    // Toast.fail('连接断开', 0);
                    console.log('>>> webSocket disconnect time:' + new Date());
                });
                webSocket.on('reconnect', function () {
                    console.log('>>> webSocket reconnect time:' + new Date());
                    // Toast.hide();
                    for (const func of onConnectCallbacks.keys()) {
                        func(webSocket);
                    }
                });
                webSocket.on('message', onMessage);
            }
        } else {
            const result = await response.json();
            webSocket.webSocketConnecting = false;
            console.log(result);
        }
    } catch (e) {
        console.log('connectMsgGateway exception:', e);
    }
}

async function subscribeDevicesMsg(guardian, devices) {
    try {
        const socket = await connectMsgGateway(guardian, function (socket) {
            subscribeDevices(socket, devices);
        });
    } catch (e) {
        console.log('subscribeDevicesMsg exception:', e);
    }
}

async function unsubscribeMsg(guardian) {
    try {
        await connectMsgGateway(guardian, function (socket) {
            socket.emit('subscribe', { devices: [] });
            socket.emit('subscribe', { users: [] });
        });
    } catch (e) {
        console.log('unsubscribeMsg exception:', e);
    }
}

