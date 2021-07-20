rgbInputs = document.querySelectorAll(".rgb-input");
increments = document.querySelectorAll(".increment-input");
button = document.querySelector("#button");
square = document.querySelector(".square");

var [r, g, b] = [17, 17, 17];
var [r_i, g_i, b_i] = [3, 4, 5];
var myInterval = null;

function updateColor(){
    r = Math.min(r + r_i, 255);
    g = Math.min(g + g_i, 255);
    b = Math.min(b + b_i, 255);
    square.style.backgroundColor = `rgb(${r},${g},${b})`;
    // console.log(`rgb(${r},${g},${b})`)
}

// function getInputs(){
//     r = hex2Dec(rgbInputs[0].value);
//     g = hex2Dec(rgbInputs[1].value);
//     b = hex2Dec(rgbInputs[2].value);
//     r_i = parseInt(increments[0].value);
//     g_i = parseInt(increments[1].value);
//     b_i = parseInt(increments[2].value);
//     console.log([r,g,b]);
//     console.log([r_i,g_i,b_i]);
// }

button.addEventListener("click", function(){
    if (button.innerText === "Start"){
        // getInputs();
        myInterval = setInterval(updateColor, 250);
        button.innerText = "Stop";
        button.classList.remove("startBttn");
        button.classList.add("stopBttn");
    } else {
        clearInterval(myInterval);
        button.innerText = "Start";
        button.classList.add("startBttn");
        button.classList.remove("stopBttn");
    }
});


// const digits = {
//     "0":0,"1":1,"2":2,"3":3, "4":4,"5":5,"6":6,"7":7,"8":8,
//     "9":9,'A':10,'B':11,'C':12,'D':13,'E':14,'F':15
// }

// function hex2Dec(hex) {
//     if (hex.length != 2){
//         return -1;
//     }
//     value = 0;

//     if (hex[1] in digits){
//         value = digits[hex[1]];
//     } else {
//         return -1
//     }

//     if (hex[0] in digits){
//         value = value + 16 * digits[hex[0]];
//     } else {
//         return -1
//     }

//     if (value > 255){
//         return -1
//     } 

//     return value
// }

