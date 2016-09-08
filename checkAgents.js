var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
var flag = true;

/**
 * 初始化加载程序
 */
window.onload = function(){
    console.log(isMobile());
    console.log(isWechat());
    console.log(getOsVersion());
}

/**
 * 判断是不是移动端
 * @returns {boolean}
 */
function isMobile() {
    var userAgentInfo = navigator.userAgent;

    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

/**
 * 判断是不是微信浏览器
 * @returns {boolean}
 */
function isWechat() {
    var ua = navigator.userAgent.toLowerCase();

    if(ua.match(/MicroMessenger/i)=="micromessenger")
        return true;
    else
        return false;
}

/**
 * 判断浏览器所在机器操作系统版本
 */
function getOsVersion(){
    var u = navigator.userAgent,version = '';
    if (u.indexOf('Mac OS X') > -1) {
        //ios
        var regStr_saf = /OS [\d._]*/gi;
        var verinfo = u.match(regStr_saf);
        version = (verinfo + "").replace(/[^0-9|_.]/ig,'').replace(/_/ig,'.');
    } else if (u.indexOf('Android') > -1
        || u.indexOf('Linux') > -1) {
        //android
        version = u.substr(u.indexOf('Android') + 8, u.indexOf(";", u.indexOf("Android")) - u.indexOf('Android') - 8);
    } else if (u.indexOf('BB10') > -1) {
        //黑莓bb10系统
        version = u.substr(u.indexOf('BB10') + 5, u.indexOf(";", u.indexOf("BB10")) - u.indexOf('BB10') - 5);
    } else if (u.indexOf('IEMobile')) {
        //windows phone
        version = u.substr(u.indexOf('IEMobile') + 9, u.indexOf(";", u.indexOf("IEMobile")) - u.indexOf('IEMobile') - 9);
    }
    return version;
}