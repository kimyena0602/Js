//if 조건문
if(money > 5000){
    rideTaxi(); //조건이 만족 됐을 때 실행되는 것
} 
else if (money > 2000) {
    rideBus(); //조건이 만족되지 않았을 때 다른 조건이 실행되도록.
}
else {
    walk(); //두 개의 조건이 모두 만족 되지 않았을 때 실행되는 것.
}