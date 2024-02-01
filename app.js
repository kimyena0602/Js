//function = 반복해서 사용할 수 있는 코드조각
function sayHello() {// fuction은 ()를 사용한다.
    console.log("Hello");
}

sayHello(); 

//function에는 argument를 넣을 수 있다.
//argument = function을 실행하는 동안 어떠한 정보를 function에게 전달하는 방법
function sayHello(nameOfPerson, age){ //argument는 여러개 넣을 수 있다.
    console.log("Hello my name is " + nameOfPerson + ", and i'm "+age);
}
sayHello("yena" , 18);
sayHello("jina" , 16);
sayHello("chaeunwoo" , 20);

//player Object
const player = {
    name: "yena",
    sayHello: function(PersonName){ // PersonName = yen, kim
        console.log("hello! " + PersonName + " nice meet you,");
    },
};

player.sayHello("yen");
player.sayHello("kim");