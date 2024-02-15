const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event){
     event.preventDefault(); // preventDefault 함수란 어떤 event의 기본 행동이 발생되지 않도록 막는 함수
     console.log(loginInput.value);
}

function handleLinkClick () {
    alert("clicked")
}
 
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
