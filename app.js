const age = parseInt(prompt("How old are you?"));

if(isNaN(age) || age<0){
    console.log("Write a number.");
}
else if(age<18){
    console.log("You can't drink.");
}
else if (age>=18 && age<=50){ //&&(AND연산자) = 두 가지 조건이 충족될 때 true값을 가져옴.
    console.log("You can drink.");
}
else if(age>=18 || age>50){ // ||(OR연산자) = 두 가지 조건 중 하나라도 충족될 때 true 값을 가져옴.
    console.log("You can drink.");
}
else {
    console.log("You can't drink.")
}