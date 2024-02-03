const age = 96; //96은 5번줄 age로 이동 -> 2번 줄 ageOfForeigner로 이동 -> 3번 줄에서 return 하여 98이라는 값이 나온다.
function calculaterKrAge(ageOfForeigner) { //함수는 어떤 일을 수행하고 그 결과를 알려주는 것
   return ageOfForeigner + 2; //return은 ageOfForeigner을 calculateKrage의 결과로 대체하는 역할
}
const krAge= calculaterKrAge(age);
console.log(krAge);