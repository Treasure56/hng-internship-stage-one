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
    let time = currentTime.toUTCString().split(' ').slice(4);

    currentTimeElement.textContent = "Current time is " + time.join(' ');
  }

  updateTime();
  setInterval(updateTime, 1000);
});
