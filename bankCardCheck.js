/**
 * Created by jinx on 9/28/16.
 */
function checkCard(bankCardNum){
    bankCardNum = $('#card_no').val();
    var sumOdd = 0;
    var sumEven = 0;
    if(bankCardNum==null||''==bankCardNum)
        return "银行卡号不能为空!";

    var length = bankCardNum.length;
    var  wei = new Array(length);
    for (var i = 0; i < length; i++) {
        wei[i] = parseInt(bankCardNum.substring(length - i - 1, length- i));// 从最末一位开始提取，每一位上的数值
    }
    for (var i = 0; i < length / 2; i++) {
        sumOdd += wei[2 * i];
        if ((wei[2 * i + 1] * 2) > 9)
            wei[2 * i + 1] = wei[2 * i + 1] * 2 - 9;
        else
            wei[2 * i + 1] *= 2;

        sumEven += wei[2 * i + 1];
    }
    if ((sumOdd + sumEven) % 10 == 0){
        console.log('r')
        return "success";
    }
    else{
        console.log('w')
        return "银行卡号不合法!";
    }
}
