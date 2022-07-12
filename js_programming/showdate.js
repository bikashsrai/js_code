const today = new Date();
const day = today.getDay();
const daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log(`The day is ${daylist[day]}`);

let hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();
let prepand = hour >= 12 ? "pm" : "am";
hour = hour >= 12 ? hour - 12 : hour;

if (hour === 0 && prepand === "pm") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = "Noon";
  } else {
    hour = 12;
    prepand = "pm ";
  }
}

if (hour === 0 && prepand === "am") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = "Midnight";
  } else {
    hour = 12;
    prepand = "am";
  }
}
console.log(`current time is ${hour}${prepand}:${minute}:${second}`);
