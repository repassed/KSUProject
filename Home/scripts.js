document.addEventListener('DOMContentLoaded', function () { init() })
function init() {
    let thisbutton = document.getElementById("btnToggle1");
    let pageBG = document.getElementById("pageBody");
    thisbutton.addEventListener("click", invert);
    function invert() { 
    pageBG.style.backgroundColor ='black';
}
    let thisbutton2 = document.getElementById("btnToggle2");
    thisbutton2.addEventListener("click", invert2);
    function invert2() { 
    pageBG.style.backgroundColor ='#a9a9a9';
}
    let clock = document.getElementById("btnClock");
    clock.addEventListener("click",tellTime);
    function tellTime(){
        alert("Date - " + Date());
        
    }

}
