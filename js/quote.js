
import { currentLanguage, getCurrentLanguage,languageForm} from "./translate.js";
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const changeQuote = document.querySelector(".change-quote");
//console.log(currentLanguage);


async function getQuotes() {
  getCurrentLanguage();
 // console.log(currentLanguage);
  var quotes;
  if(currentLanguage === "en") {
    quotes = './js/quotesEng.json';
  } else if(currentLanguage === "ru") {
    quotes ="./js/quotesRu.json";
  }
  const res = await fetch(quotes);
  const data = await res.json();
 
  let quoteNumber =Math.floor(Math.random()*data.length);
  
  quote.textContent = data[quoteNumber].text;
  author.textContent = data[quoteNumber].author;
  
}
getQuotes();

changeQuote.addEventListener("click", getQuotes);
languageForm.addEventListener("change", getQuotes);
