const time = document.querySelector(".time");
const date = document.querySelector(".date");
const greeting = document.querySelector(".greeting");
const inputName = document.querySelector(".name")
let newTimeUpdate = 0;

let daysOfWeekArray = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let monthesArray = [
    "January",	
    "February",
    "March",	
    "April",	
    "May",	
    "June",
    "July",	
    "August",	
    "September"
];

let periodOfDays = [
    "morning",
    "afternoon",
    "evening",
    "night"
]

function showTime() {
  let newTime = new Date();
  newTimeUpdate = newTime.toLocaleTimeString();
  time.innerHTML = newTimeUpdate;
  function showDate() {
    let dayOfWeek = newTime.getDay();
    let dayOfMonth = newTime.getDate();
    let month = newTime.getMonth();
    for (let i = 0; i < daysOfWeekArray.length; i++) {
      if (dayOfWeek === i) {
        dayOfWeek = daysOfWeekArray[i];
      }  
    };
    for (let i = 0; i <monthesArray.length; i++) {
        if (month === i) {
          month = monthesArray[i];
        }  
      };
    date.innerHTML = `${dayOfWeek}, ${month} ${dayOfMonth}`;
  }
  function showGreeting() {
      let peridOfDay = newTime.getHours();
      if (peridOfDay >= 0 && peridOfDay < 12 ) {
          greeting.innerHTML = `Good ${periodOfDays[0]},`;
      } else if (peridOfDay >= 12 && peridOfDay < 17 ) {
        greeting.innerHTML = `Good ${periodOfDays[1]},`
      } else if (peridOfDay >= 17 && peridOfDay < 20 ) {
        greeting.innerHTML = `Good ${periodOfDays[2]},`
      } else {
        greeting.innerHTML = `Good ${periodOfDays[3]},`
    }
  }
  showGreeting();
  showDate();
  setTimeout(showTime, 1000);
}
showTime();


inputName.setAttribute("placeholder", "[Enter name]");


function setLocalStorage() {
    localStorage.setItem('name', inputName.value);
  }
  window.addEventListener('beforeunload', setLocalStorage);

  function getLocalStorage() {
    if(localStorage.getItem('name')) {
      inputName.value = localStorage.getItem('name');
    }
  }
  window.addEventListener('load', getLocalStorage)