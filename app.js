const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const clickedClass = "clicked";
    if(h1.classList.contains (clickedClass)){
        h1.classList.remove(clickedClass);
    } else{
        h1.classList.add(clickedClass);
    }
}

function handleWindowResize(){
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

window.addEventListener("resize", handleWindowResize); //resize는 h1은 안됨. 
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);