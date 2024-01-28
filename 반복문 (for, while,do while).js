//for문
//for (초기값; 조건문; 실행문){
// 반복할 코드
//}

for (let i = 0; i < 0; i++){
    console.log(i);
}

//while문
//초기값;
//while (조건문){ 
    //실행문
//}

let a = 0;
while (i<10){
    a++
}

//do while문 (적어도 한 번은 실행함 while문과의 차이점)

let b = 0;
do {
    i++
} while (i < 10)

//break : 멈추고 빠져나옴
//continue : 멈추고 다음 반복으로 진행

while (true){
    let answer = comfirm ('keepgoing?');
    if(!answer){
        break; // break를 만날 때 까지 무한 반복
    }
}

