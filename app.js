const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; // 일반적으로 string만 포함된 변수는 대문자로 표기, string을 저장하고 싶을 때 사용

function onLoginSubmit(event){
     event.preventDefault(); // preventDefault 함수란 어떤 event의 기본 행동이 발생되지 않도록 막는 함수
     loginForm.classList.add(HIDDEN_CLASSNAME);
     const username = loginInput.value;
     localStorage.setItem("username", username); 
     greeting.innerText = "Hello " + username 
     greeting.classList.remove(HIDDEN_CLASSNAME)
}

function handleLinkClick () {
    alert("clicked")
}
 
loginForm.addEventListener("submit", onLoginSubmit);
//localStorage: 개발자 도구를 이용해 브라우저에 공짜로 무언가를 저장할 수 있게 하는 기능