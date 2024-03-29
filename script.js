const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');

async function getQuote() {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    quoteElement.textContent = data.content;
    authorElement.textContent = data.author || 'Unknown';
}

newQuoteBtn.addEventListener('click', getQuote);

getQuote();
