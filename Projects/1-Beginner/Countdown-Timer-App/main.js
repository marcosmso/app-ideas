seconds_counter = document.querySelector("#seconds-counter");
button = document.querySelector("#button");

var eventDate = new Date(2021, 6, 21); 
var startDate;
var diffInSeconds;

// myVar = setInterval(()=>{console.log("hello")}, 1000);

function updateRemainingTime() {
    seconds_counter.innerHTML = diffInSeconds;
    diffInSeconds = diffInSeconds - 1;
}

button.addEventListener("click", function() {
    startDate = new Date();
    diffInSeconds = Math.floor((eventDate.getTime() - startDate.getTime()) / 1000);
    setInterval(updateRemainingTime, 1000)
});



