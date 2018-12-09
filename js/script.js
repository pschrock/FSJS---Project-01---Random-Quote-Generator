/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

//Quotes Array
const quotes = [
  {
    quote: "I am concerned that independent thought and critical thinking is waning in our modern world.",
    source: "Ken Jorgustin",
    citation: "Modern Survival Blog",
    year: "2015",
    tag:"culture"
  },
  {
    quote: "If you tell the truth, you don’t have to remember anything",
    source: "Mark Twain",
    tag: "comedy"
  },
  {
    quote: "Always forgive your enemies; nothing annoys them so much.",
    source: "Oscar Wilde",
    tag: "comedy"
  },
  {
    quote: "Only I can change my life. No one can do it for me.",
    source: "Carol Burnett",
    tag: "culture"
  },
  {
    quote: "Let children feed on the good, the excellent, the great! Don't get in their way with little lectures, facts, and guided tours!",
    source: "Charlotte Mason",
    tag: "education"
  },
  {
    quote: "It's 3:46. I'm up early because I'm willing to do the work required to make it happen",
    source: "Ryan Carson",
    citation: "Twitter",
    year: "2018",
    tag: "motivational"
  }
];


//Random generator for quotes array

function getRandomQuote(q) {
  // randomly choose a phrase from phrases array
  let randomQuote = q[Math.floor(Math.random() * q.length)];
  //return the randomly selected quote
  return randomQuote;
}

//Function to printout randomly generated quote
function printQuote(){
  //Stop the interval process if the "Show another quote" button is selected. Resets Interval
  stopChangeQuote();
  //Generate quote
  const quoteData = getRandomQuote(quotes);
  const quoteBox = document.getElementById('quote-box');
  const body = document.getElementsByTagName('body')[0];

  let newQuote = '';

  //Optional properties evaluated
  function optional(object) {
    let options = '';

    //adds citation if available
    if(object.citation) {
      options += '<span class="citation">';
      options += object.citation + '</span>';
    }


    //adds year if available
    if(object.year) {
      options += '<span class="year">';
      options += object.year + '</span>';
    }


    //adds tag if available
    if(object.tag) {
      options += ', <span>';
      options += object.tag + '</span>';
    }

    return options;
  }

  newQuote = '<p class="quote">' + quoteData.quote + '</p>';
  newQuote += '<p class="source">' + quoteData.source + optional(quoteData) + '</p>';

  quoteBox.innerHTML = newQuote;
  body.style.backgroundColor = randomBGColor();
  //Trigger the interval process so that if the "Show another quote" button is not selected, quote will change after 20 seconds.
  changeQuote();
}

//randomly select a color for the background
function randomBGColor(){
  let white = [255, 255, 255];
  let rgb = white.map(color => Math.floor(Math.random() * color));
  let randomRGBColor = "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
  return randomRGBColor;
}

//Change interval of quotes every 20 seconds
let quoteIntervalId;
function changeQuote(){
  quoteIntervalId = window.setInterval(printQuote, 20000);
}

function stopChangeQuote(){
  clearInterval(quoteIntervalId);
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
