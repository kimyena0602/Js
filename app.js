//object와 array의 차이점  
//1. object는 중괄호를 사용한다.
//2.array는 데이터타입이 어떠한 특성을 갖고 있는지 알기 어려웠다면 object는 한 눈에 확인 할 수 있다.
const player = { 
    //이 곳엔 property(특성)을 작성한다. (중괄호 안에는 =을 사용하지 않고 :을 사용한다.)
    name : "yena", // 또 다른 특성을 작성하기 위해 작성문 끝에는 ,를 붙인다.
    point : 30, 
    fat : true, //다양한 데이터 타입 사용 가능
}

console.log(player);
player.lastName = "apple"; // lastName을 추가한거 처럼 object에 뭔가를 추가할 수 있음.
console.log(player.name); // = console.log(player["name"]); (name을 불러오는 것)


