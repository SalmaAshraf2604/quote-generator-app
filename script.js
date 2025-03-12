 const quoteContainer = document.getElementById('quote-container');
 const quoteText = document.getElementById('quote');
 const authorText = document.getElementById('author');
 const facebookBtn = document.getElementById('facebook-button');
 const newQuoteBtn = document.getElementById('new-quote');
 var loadingScreen = document.querySelector(".loader");

 let apiQuotes =  [];
 
 //Show New Quote
function newQuote() {
    //Create randome one quote at a time
    const quote = apiQuotes[Math.floor(Math.random()  *  apiQuotes.length)];

    //Check if Author field is blank and replace it with 'Unknown'
    if(!quote.author){
        authorText.textContent = 'Unknown';
    } else{
        authorText.textContent = quote.author;
    }
    //Check the quote length to determine styling
    if (quote.text.length >50){
        quoteText.classList.add('long-quote');
    } else{
        quoteText.classList.remove('long-quote');
    }

        quoteText.textContent = quote.text;
}


 //Get Quotes from API
 async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch(error) {
        alert(error)
        //Catch Error Here
    }
 }


 //Share Quote
 function shareQuote() {
    const facebookUrl = 'https://www.facebook.com/sharer/sharer.php?u=&quote=${encodeURIComponent(quoteText)}';
    window.open(facebookUrl, '_blank');
 }

 //Event Listener

 newQuoteBtn.addEventListener('click', newQuote);
 facebookBtn.addEventListener('click', shareQuote);

 //Loader Event Listener
 window.addEventListener('load', function() {
    loadingScreen.style.display = 'none';
  })

 //on Load
 getQuotes();
