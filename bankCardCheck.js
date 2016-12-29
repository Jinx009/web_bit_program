/**
 * Created by jinx on 9/28/16.
 */
function checkCard(bankCardNum){
    bankCardNum = $('#card_no').val();
    var sum = 0;
    var digit = 0;
    var addend = 0;
    if(bankCardNum==null||''==(bankCardNum))
        return "银行卡号不能为空!";

    var length = bankCardNum.length;
    var timesTwo = false;
    for (var i = length-1; i >=0; i--) {
        digit = parseInt(bankCardNum.substring(i,i+1));
        if(timesTwo){
            addend = digit*2;
            if(addend>9){
                addend -= 9;
            }
        }else{
            addend = digit;
        }
        sum += addend;
        timesTwo = !timesTwo;
    }
    var modulus = sum%10;
    console.log(modulus);
    if (modulus == 0){
        return "success";
    } else{
        return "银行卡号不合法!";
    }
}