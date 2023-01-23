//document.write("<h1>hi, welcom my world!</h1>"); // C:/html_source/ex_1.html

var name = prompt('당신의 이름을 입력하십시오 :', "");
var height = prompt('당신의 키를 입력하십시오 :', "0");
var weight = prompt('당신의 몸무게를 입력하십시오:', "0");

var nomal_w = (height - 100) * 0.9
//var exceed = weight - nomal_w

var result = weight >= nomal_w - 5 &&  weight <= nomal_w + 5 ; //오차 범위 +-5
result = result ? "적정 체중입니다." : "적정 체중이 아닙니다." ; 
document.write(name + "님은" +result);






/*
if(exceed > 0)
    document.write("적정 체중은" + nomal_w + "kg이며, 현재 체중에서"  + exceed + "kg을 초과한 것을 알 수 있습니다."); 
else if(exceed == 0)
    document.write("적정 체중은" + nomal_w + "kg이며, 현재 체중은 적정체중임을 알 수 있습니다."); 
else
    document.write("적정 체중은" + nomal_w + "kg이며, 현재 체중에서"  + exceed + "kg 미만인 것을 알 수 있습니다."); 

*/