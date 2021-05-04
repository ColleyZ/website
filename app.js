const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway = document.querySelector(".give-away");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureData = new Date(2022, 0, 12, 0, 00, 0);

const year = futureData.getFullYear();
const hours = futureData.getHours();
let minutes = futureData.getMinutes();
minutes = minutes.toString();
console.log(minutes.length);
if (minutes.length < 2) {
  minutes = minutes.padStart(2, "0");
}
// console.log(minutes);
// minutes = parseInt(minutes);

let month = futureData.getMonth();
month = months[month];
let day = futureData.getDay();
day = weekdays[day];
let date = futureData.getDate();

giveaway.textContent = `生日快乐🎆🎇🎇🎇🎇${day}, ${date} ${month} ${year} ${hours}:${minutes} am`;

//  ! future time in ms

const futureTime = futureData.getTime();
// console.log(futureTime);

function getRemainingTime() {
  const today = new Date().getTime();
  // console.log(today);
  const t = futureTime - today;
  // console.log(t);
  // ! 1s=1000ms
  // ! 1min = 60sec
  // ! 1h = 60mins
  // ! 1 day = 24 hours

  // ! value in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  let days = parseInt(t / oneDay);
  let hours = parseInt((t % oneDay) / oneHour);
  let minutes = parseInt((t % oneHour) / oneMinute);
  let seconds = parseInt((t % oneMinute) / 1000);

  //   seting values array
  const values = [days, hours, minutes, seconds];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }
  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
  }
}
// count down
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
