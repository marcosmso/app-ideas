days_counter = document.querySelector("#days-counter");
hours_counter = document.querySelector("#hours-counter");
minutes_counter = document.querySelector("#minutes-counter");
seconds_counter = document.querySelector("#seconds-counter");
button = document.querySelector("#button");
date_input = document.querySelector(".date-input");
time_input = document.querySelector(".time-input");

const SECONDS_IN_MINUTE = 60;
const SECONDS_IN_HOUR = 3600;
const SECONDS_IN_DAY = 86400;

var eventDate; 

button.addEventListener("click", function() {
    getEventDateInput();
    setInterval(updateTimer, 1000)
});

function getEventDateInput(){
    input = date_input.value; // string in format YYYY-MM-DD
    day   = parseInt(input.substring(8, 10));
    month = parseInt(input.substring(5, 7));
    year  = parseInt(input.substring(0, 4));

    input = time_input.value; // string in format HH-MM
    hour = parseInt(input.substring(0, 2));
    minute = parseInt(input.substring(3, 5));

    eventDate = new Date(year, month-1, day, hour, minute, 0); //month must be 0-indexed for Date
}

function updateTimer() {

    var now = new Date().getTime()
    var diff = (eventDate.getTime() - now) / 1000;

    if (now > eventDate.getTime()){
        days_counter.innerHTML = 'D';
        hours_counter.innerHTML = 'O';
        minutes_counter.innerHTML = 'N';
        seconds_counter.innerHTML = 'E';
    }

    var days = Math.floor(diff / SECONDS_IN_DAY );
    var hours = Math.floor( (diff % SECONDS_IN_DAY) / SECONDS_IN_HOUR);
    var minutes = Math.floor( (diff % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE);
    var seconds = Math.floor( (diff % SECONDS_IN_MINUTE) );

    days_counter.innerHTML = days;
    hours_counter.innerHTML = hours;
    minutes_counter.innerHTML = minutes;
    seconds_counter.innerHTML = seconds;

}