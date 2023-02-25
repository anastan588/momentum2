const leftArrow = document.querySelector(".slide-prev");
const rightArrow = document.querySelector(".slide-next");
const body = document.querySelector("body");


let greetingText = greeting.innerHTML;
let greetingTextArray = greetingText.split(" ");
let periodOfdayAllString = greetingTextArray[1];
let periodOfday = periodOfdayAllString.slice(0, [length - 1]);
let randomNumber = Math.round(Math.random() * 20);
if (randomNumber === 0 ) {
    randomNumber = 1;
}

function setBg() {
  const img = new Image();
  let randomNumberString = 0;
  if (randomNumber >= 1 && randomNumber < 10) {
    randomNumberString = `0${randomNumber}`;
  } else {
    randomNumberString = randomNumber;
  }
  img.src = `https://raw.githubusercontent.com/anastan588/momentum-images/main/images/${periodOfday}/${randomNumberString}.webp`;
  img.onload = () => {      
    body.style.backgroundImage = `url("${img.src}")`;
  }; 

}

function getSlideNext() {
  const img = new Image();
  if (randomNumber < 20) {
    randomNumber++;
  } else {
    randomNumber = 1;
  }
  let randomNumberString = 0;
  if (randomNumber >= 1 && randomNumber < 10) {
    randomNumberString = `0${randomNumber}`;
  } else {
    randomNumberString = randomNumber;
  }
  img.src = `https://raw.githubusercontent.com/anastan588/momentum-images/main/images/${periodOfday}/${randomNumberString}.webp`;
  img.onload = () => {      
    body.style.backgroundImage = `url("${img.src}")`;
  }; 
  return randomNumber;
}

function getSlidePrev() {
  const img = new Image();
  if (randomNumber > 1) {
    randomNumber--;
  } else {
    randomNumber = 20;
  }
  let randomNumberString = 0;
  if (randomNumber >=1 && randomNumber < 10) {
    randomNumberString = `0${randomNumber}`;
  } else {
    randomNumberString = randomNumber;
  }
  img.src = `https://raw.githubusercontent.com/anastan588/momentum-images/main/images/${periodOfday}/${randomNumberString}.webp`;
  img.onload = () => {      
    body.style.backgroundImage = `url("${img.src}")`;
  }; 
  return randomNumber;
}

setBg();
leftArrow.addEventListener("click", getSlidePrev);
rightArrow.addEventListener("click", getSlideNext);


