// DIGITAL OCLOCK

// Container of the oclock
const clock = document.querySelector(".clock-container");

// The date object
let date = new Date();

// The time object
const time = {
    hours: date.getHours() < 10 ? "0"+date.getHours() : date.getHours(),
    minutes: date.getMinutes() < 10 ? "0"+date.getMinutes() : date.getMinutes(),
    seconds: date.getSeconds() < 10 ? "0"+date.getSeconds() : date.getSeconds(),
    type: date.getHours() > 12 ? "PM" : "AM"
}

// Function that will update the times
function updateTime(newTime){
    time.hours = newTime.getHours() < 10 ? "0"+newTime.getHours() : newTime.getHours();
    time.minutes = newTime.getMinutes() < 10 ? "0"+newTime.getMinutes() : newTime.getMinutes();
    time.seconds = newTime.getSeconds() < 10 ? "0"+newTime.getSeconds() : newTime.getSeconds();
    time.type = newTime.getHours() > 12 ? "PM" : "AM";
}

// Function that will be called every second
function render(){
    date = new Date(); // update the date object
    
    updateTime(date);
    clock.textContent = `${time.hours}:${time.minutes}:${time.seconds} ${time.type}`;
}

// Call "render()" function every second
setInterval(render, 1000);



