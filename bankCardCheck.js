/**
 * Created by jinx on 9/28/16.
 */
function checkCard(bankCardNum){
    bankCardNum = $('#card_no').val();
    var sumOdd = 0,sumEven = 0;
    if(bankCardNum==null||''==bankCardNum)
        return "银行卡号不能为空!";

    var length = bankCardNum.length, lastNum = bankCardNum.substr(length-1,1),temp = 0;
    bankCardNum = bankCardNum.substr(0,length-1);
    for (var i = length-1; i >=1; i--) {
        temp = parseInt(bankCardNum.substr(i-1,1));// 从末位一位开始提取，每一位上的数值
        if(length%2==1){
            if(i%2==0){
                temp = 2*temp;
                if(temp>10)
                    temp = temp - 9;
                sumEven += temp;
            } else{
                sumOdd += temp;
            }
        }else{
            if(i%2==1){
                temp = 2*temp;
                if(temp>10)
                    temp = temp - 9;
                sumEven += temp;
            } else{
                sumOdd += temp;
            }
        }
    }
    console.log(sumOdd + sumEven+parseInt(lastNum));
    if ((sumOdd + sumEven+parseInt(lastNum)) % 10 == 0){
        console.log('r')
        return "success";
    }
    else{
        console.log('w')
        return "银行卡号不合法!";
    }
}