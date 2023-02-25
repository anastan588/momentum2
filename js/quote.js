const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const changeQuote = document.querySelector(".change-quote")

async function getQuotes() {
  const quotes = './js/quotesEng.json';
  const res = await fetch(quotes);
  const data = await res.json();
 
  let quoteNumber =Math.floor(Math.random()*data.length);
  
  quote.textContent = data[quoteNumber].text;
  author.textContent = data[quoteNumber].author;
}
getQuotes();

changeQuote.addEventListener("click", getQuotes);