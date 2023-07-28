soundBtn = document.querySelector(".sound")
let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const url = "https://api.quotable.io/random";

let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.content;
      author.innerText = item.author;
    });
};

window.addEventListener("load", getQuote);

window.btn.addEventListener("click", getQuote);

soundBtn.addEventListener("click", () => {
     // the speechsynthesis is a web speech api
     let utterance = new SpeechSynthesisUtterance('${quoteText.innerText}');
     speechSynthesis.speak(utterance);
});
