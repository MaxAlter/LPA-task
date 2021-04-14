"use strict";

// analog-clock start
const deg = 6;
const hr = document.querySelector("#hr");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
});
// nalog-clock end

function clockDigital() {
  let clockHours = document.querySelector(".digital__hours");
  let clockMinute = document.querySelector(".digital__minute");

  let date = new Date();

  let hours = date.getHours().toString();
  let minutes = date.getMinutes().toString();

  // clockHours start
  if (hours.length === 1) hours = "0" + hours;

  const clockHours_1 = document.querySelector(".hours-1");
  clockHours_1.insertAdjacentHTML("afterbegin", hours[0]);

  const clockHours_2 = document.querySelector(".hours-2");
  clockHours_2.insertAdjacentHTML("afterbegin", hours[1]);

  clockHours.children[0].innerHTML = hours[0];
  clockHours.children[1].innerHTML = hours[1];
  // clockHours end

  // clockMinute_1 start
  const clockMinute_1 = document.querySelector(".minute-1");
  clockMinute_1.insertAdjacentHTML("afterbegin", hours[0]);

  const clockMinute_2 = document.querySelector(".minute-2");
  clockMinute_2.insertAdjacentHTML("afterbegin", hours[1]);

  if (minutes.length === 1) minutes = "0" + minutes;

  clockMinute.children[0].innerHTML = minutes[0];
  clockMinute.children[1].innerHTML = minutes[1];
  // clockMinute_1 end
}
setInterval(clockDigital, 1000);

clockDigital();
