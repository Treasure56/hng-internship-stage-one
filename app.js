const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

document.addEventListener("DOMContentLoaded", function () {
    let currentDateElement = document.getElementById("currentDate");
  
    let currentDate = new Date();
    let day = currentDate.getDate();
  
    currentDateElement.textContent = "Today is " + days[day];
  });
  
document.addEventListener("DOMContentLoaded", function () {
  var currentTimeElement = document.getElementById("currentTime");

  function updateTime() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    let timeString = hours + ":" + minutes + ":" + seconds;

    currentTimeElement.textContent = "Current time is " + timeString  + " GMT";
  }

  updateTime();
  setInterval(updateTime, 1000);
});
