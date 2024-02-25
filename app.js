const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event){
     event.preventDefault(); // preventDefault 함수란 어떤 event의 기본 행동이 발생되지 않도록 막는 함수
     console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);

//submit event가 발생할 때 js는 onloginSubmit 함수를 호출 