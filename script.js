 let apiQuotes =  [];
 
 //Show New Quote
function newQuote() {
    //Create randome one quote at a time
    const quote = apiQuotes[Math.floor(Math.random()  *  apiQuotes.length)];
    console.log(quote);
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

 //on Load
 getQuotes();