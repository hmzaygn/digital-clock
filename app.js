// console.log(year);

setInterval(() => {
  let seconds = new Date().getSeconds();
  let minutes = new Date().getMinutes();
  let hours = new Date().getHours();
  let date = new Date().getDate();
  let month = new Date().getMonth() + 1;
  let year = new Date().getFullYear();
  let day = new Date().toLocaleString("en-tr", { weekday: "long" });
  let session = "AM";
  //   console.log(day);
  const clock = document.getElementById("clock");
  const calendar = document.getElementById("calendar");
  const currentDay = document.getElementById("current-day");

  if (hours > 12) {
    hours = hours - 12;
    session = "PM";
  }
  if (String(hours).length == 1) {
    hours = "0" + hours;
  }
  if (String(minutes).length == 1) {
    minutes = "0" + minutes;
  }
  if (String(seconds).length == 1) {
    seconds = "0" + seconds;
  }
  if (String(date).length == 1) {
    date = "0" + date;
  }
  if (String(month).length == 1) {
    month = "0" + month;
  }

  clock.innerText = hours + ":" + minutes + ":" + seconds + " " + session;
  calendar.innerText = date + "/" + month + "/" + year;
  currentDay.innerText = day;
}, 1000);
