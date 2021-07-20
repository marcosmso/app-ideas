onBtn = document.getElementById("on-btn");
offBtn = document.getElementById("off-btn");
lights = document.querySelectorAll(".light");

function turnOn(){
    for (var i = 0; i < lights.length; i++) {
        lights[i].removeAttribute("style");
        lights[i].style.animationPlayState = "running";
        lights[i].style.WebkitAnimationPlayState = "running";
    }
}

function turnOff(){
    for (var i = 0; i < lights.length; i++) {
        lights[i].style.animation = "none";
        lights[i].style.WebkitAnimationPlayState = "paused";
        lights[i].style.background = "#563260"
    }
}

onBtn.addEventListener("click", turnOn);
offBtn.addEventListener("click", turnOff);