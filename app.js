const h1     = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    console.log ("title was clicked!");
    h1.style.color = "black"
}

function handleMouseEnter (){
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone!"
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("No WIFI");
}

function handleWindowOnline(){
    alert("Nice~!");
}

h1.onclick = handleTitleClick;
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize); //resize는 h1은 안됨. 
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);