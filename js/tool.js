import {
  getCurrentLanguage,
  currentLanguage,
  toolTranslateObjectEn,
  toolTranslateObjectRu,
  languageForm,
} from "./translate.js";
console.log(toolTranslateObjectEn, toolTranslateObjectRu);

/*alert(
  `Уважаемые проверяющие, очень прошу проверить в последний день проверки работу, т.к. она еще немного недоделана. Буду очень благодарна! Всем хорощих оценок)`
);*/

const toolMenu = document.querySelector(".tool_container");
const toolButton = document.querySelector(".tool");
const elementName = document.querySelectorAll(".show_item");
const languageName = document.querySelector(".language");
const photoSourseName = document.querySelector(".photo_source");
const photoThemeName = document.querySelector(".photo_theme");
const showName = document.querySelector(".show_name");
const english = document.querySelector(".english");
const russian = document.querySelector(".russian");
const playerCheck = document.getElementById("player");
const playerBlock = document.querySelector(".player");
const weatherCheck = document.getElementById("weather");
const weatherBlock = document.querySelector(".weather");
const timeCheck = document.getElementById("time");
const timeBlock = document.querySelector(".time");
const dateCheck = document.getElementById("date");
const dateBlock = document.querySelector(".date");
const greetingCheck = document.getElementById("greeting");
const greetingBlock = document.querySelector(".greeting-container");
const quoteCheck = document.getElementById("quote");
const quoteBlock = document.querySelector(".quote-container");

function showToolMenu() {
  toolMenu.classList.toggle("tool_menu");
}

function translateTool() {
  getCurrentLanguage();
  console.log(currentLanguage);
  if (currentLanguage === "ru") {
    languageName.textContent = toolTranslateObjectRu.lang.language;
    photoSourseName.textContent = toolTranslateObjectRu.photo.photosourse;
    photoThemeName.textContent = toolTranslateObjectRu.theme.photoTheme;
    showName.textContent = toolTranslateObjectRu.show.showlements;
    english.textContent = toolTranslateObjectRu.lang.eng;
    russian.textContent = toolTranslateObjectRu.lang.rus;
    for (let i = 0; i < elementName.length; i++) {
      elementName[i].lastElementChild.textContent =
        toolTranslateObjectRu.show.elements[i];
    }
  } else if (currentLanguage === "en") {
    languageName.textContent = toolTranslateObjectEn.lang.language;
    photoSourseName.textContent = toolTranslateObjectEn.photo.photosourse;
    photoThemeName.textContent = toolTranslateObjectEn.theme.photoTheme;
    showName.textContent = toolTranslateObjectEn.show.showlements;
    english.textContent = toolTranslateObjectEn.lang.eng;
    russian.textContent = toolTranslateObjectEn.lang.rus;
    for (let i = 0; i < elementName.length; i++) {
      elementName[i].lastElementChild.textContent =
        toolTranslateObjectEn.show.elements[i];
    }
  }
}

translateTool();
languageForm.addEventListener("change", translateTool);
toolButton.addEventListener("click", showToolMenu);
/*window.addEventListener("click", function() {
  if (toolMenu.classList.contains("tool_menu")) {
    toolMenu.classList.remove("tool_menu");
  }
});*/

function showOrHide() {
  if (!playerCheck.checked) {
    playerBlock.style.opacity = "0";
  } else if (playerCheck.checked) {
    playerBlock.style.opacity = "1";
  }
  if (!weatherCheck.checked) {
    weatherBlock.style.opacity = "0";
  } else if (weatherCheck.checked) {
    weatherBlock.style.opacity = "1";
  }
  if (!timeCheck.checked) {
    timeBlock.style.opacity = "0";
  } else if (timeCheck.checked) {
    timeBlock.style.opacity = "1";
  }
  if (!date.checked) {
    dateBlock.style.opacity = "0";
  } else if (dateCheck.checked) {
    dateBlock.style.opacity = "1";
  }
  if (!greetingCheck.checked) {
    greetingBlock.style.opacity = "0";
  } else if (greetingCheck.checked) {
    greetingBlock.style.opacity = "1";
  }
  if (!quoteCheck.checked) {
    quoteBlock.style.opacity = "0";
  } else if (quoteCheck.checked) {
    quoteBlock.style.opacity = "1";
  }
}

playerCheck.addEventListener("change", showOrHide);
weatherCheck.addEventListener("change", showOrHide);
timeCheck.addEventListener("change", showOrHide);
dateCheck.addEventListener("change", showOrHide);
greetingCheck.addEventListener("change", showOrHide);
quoteCheck.addEventListener("change", showOrHide);
