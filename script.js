


let  daysEl = document.getElementById("days");
let  hoursEl = document.getElementById("hours");
let  minsEl = document.getElementById("mins");
let secondsEl = document.getElementById("seconds");

const form = document.getElementById("myForm");

var inputDate   ;

form.addEventListener("submit", function(event) {
        event.preventDefault();
        var bdate = document.getElementById("bdate").value;
        //inputDate=new Date(bdate);
        inputDate=bdate;
});
function countdown() {
    const ramadanDate = new Date(inputDate);
    const currentDate = new Date();

    if (currentDate >= ramadanDate) {
        clearInterval(interval); 
        daysEl.innerHTML = "0";
        hoursEl.innerHTML = "00";
        minsEl.innerHTML = "00";
        secondsEl.innerHTML = "00";
        return;
    }

    const totalSeconds = (ramadanDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();
let interval = setInterval(countdown, 1000);  

