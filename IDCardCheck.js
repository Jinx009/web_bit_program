/**
 * Created by jinx on 9/28/16.
 */
var powers = new Array("7","9","10","5","8","4","2","1","6","3","7","9","10","5","8","4","2");
var parityBit = new Array("1","0","X","9","8","7","6","5","4","3","2");
var id_error_msg = '';
//校验身份证号码的主调用   
function validId(obj){
   var _id=obj.value;
   if(_id=="")return;
   var _valid=false;
   if(_id.length==15){
        _valid=validId15(_id);
   }else if(_id.length==18){
        _valid=validId18(_id);
   }
   if(!_valid){
        console.log('身份证号码有误,请检查!');
        obj.focus();
        return;
   }else{
       console.log('身份证号码校验成功!');
   }
}
//校验18位的身份证号码   
function validId18(_id){
    _id=_id+"";
    var _num=_id.substr(0,17);
    var _parityBit=_id.substr(17);
    var _power=0;
    for(var i=0;i< 17;i++){
        //校验每一位的合法性   
        if(_num.charAt(i)<'0'||_num.charAt(i)>'9'){
            return false;
            break;
        }else{
            //加权   
            _power+=parseInt(_num.charAt(i))*parseInt(powers[i]);
        }
    }
    //取模   
    var mod=parseInt(_power)%11;
    if(parityBit[mod]==_parityBit){
        return true;
    }
    return false;
}
//校验15位的身份证号码   
function validId15(_id){
    _id=_id+"";
    for(var i=0;i<_id.length;i++){
        //校验每一位的合法性   
        if(_id.charAt(i)<'0'||_id.charAt(i)>'9'){
            return false;
            break;
        }
    }
    var year=_id.substr(6,2);
    var month=_id.substr(8,2);
    var day=_id.substr(10,2);
    var sexBit=_id.substr(14);
    //校验年份位   
    if(year<'01'||year >'90')return false;
    //校验月份   
    if(month<'01'||month >'12')return false;
    //校验日   
    if(day<'01'||day >'31')return false;
    return true;
}   
