function show_clock(){
    let h = document.getElementsByClassName('hr')[0];
    let m = document.getElementsByClassName('mn')[0];
    let s = document.getElementsByClassName('ss')[0];

    let date = new Date();

    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    h.style.transform = `rotate(${30 * hours + mins/2}deg)`;
    m.style.transform = `rotate(${6 * mins}deg)`;
    s.style.transform = `rotate(${6 * secs}deg)`;

    let sound = new Audio('sound.mp3');
    sound.play();
}
setInterval(show_clock,1000);

let clock = document.querySelector('#clock');

function digital_time(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}

setInterval(digital_time,1000);


let btn = document.getElementById('btn');
let btnText = document.getElementById('btnText');
let btnIcon = document.getElementById('btnIcon');
btn.onclick = function () {
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        btnIcon.src = "images/sun.png"
        btnText.innerHTML = "light"
    }
    else{
        btnIcon.src = "images/moon.png"
        btnText.innerHTML = "Dark"
    }
}