/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

/*Quotes Array*/
const quotes = [
  {
    quote: "I am concerned that independent thought and critical thinking is waning in our modern world.",
    source: "Ken Jorgustin",
    citation: "Modern Survival Blog",
    year: "2015",
    url: "https://modernsurvivalblog.com/modern-survival-ideology/leaders-and-their-blind-followers/"
  },
  {
    quote: "If you tell the truth, you don’t have to remember anything",
    source: "Mark Twain",
    url: "http://factmyth.com/factoids/if-you-tell-the-truth-you-dont-have-to-remember-anything/"
  },
  {
    quote: "Always forgive your enemies; nothing annoys them so much.",
    source: "Oscar Wilde",
    url: "http://www.lookupquotes.com/picture_quotes/always-forgive-your-enemies-nothing-annoys-them-so-much/41256/"
  },
  {
    quote: "Only I can change my life. No one can do it for me.",
    source: "Carol Burnett",
    url: "https://quotefancy.com/quote/757687/Carol-Burnett-Only-I-can-change-my-life-No-one-can-do-it-for-me"
  },
  {
    quote: "Let children feed on the good, the excellent, the great! Don't get in their way with little lectures, facts, and guided tours!",
    source: "Charlotte Mason",
    url: "https://www.azquotes.com/quote/1464469"
  },
  {
    quote: "It's 3:46. I'm up early because I'm willing to do the work required to make it happen",
    source: "Ryan Carson",
    citation: "Twitter",
    year: "2018"
  }
];



/*Random generator for quotes array*/

function getRandomQuote(q) {
  // randomly choose a phrase from phrases array
  let randomQuote = q[Math.floor(Math.random() * q.length)];
  //return the randomly selected quote
  return randomQuote;
}


/*Function to printout randomly generated quote*/

function printQuote() {
  /*Generate quote*/
  const quoteData = getRandomQuote(quotes);

  const quoteBox = document.getElementById('quote-box');
  const quote = quoteBox.getElementsByClassName('quote')[0];
  const source = quoteBox.getElementsByClassName('source')[0];
  const citation = quoteBox.getElementsByClassName('citation')[0];
  const year = quoteBox.getElementsByClassName('year')[0];


  quote.innerText = quoteData.quote;
  /*placing span for citation and year within the "innerHTML" for source*/
  if (!quoteData.citation) {
    if (!quoteData.year) {
      /*if no citation or year is available*/
      source.innerText = quoteData.source;
    }else{
      /*if no citation is available*/
      source.innerHTML = quoteData.source + '<span class="year">' + quoteData.year + '</span>';
    }
  }else{
    if (!quoteData.year) {
      /*if no year is available*/
      source.innerHTML = quoteData.source + '<span class="citation">' + quoteData.citation + '</span>';
    }else{
      /*if both ARE available*/
      source.innerHTML = quoteData.source + '<span class="citation">' + quoteData.citation + '</span>' + '<span class="year">' + quoteData.year + '</span>';
    }
  }
}



/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
