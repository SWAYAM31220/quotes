const quoteButton = document.getElementById('generate-button');
const quoteText = document.getElementById('quote');
const authorName = document.getElementById('author-name');

const baseUrl = 'https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes';
const apiKey = 'e25a485053msh8bcfd469f10ffd3p1459e2jsn48e6af5a613d'; // Replace with your actual API key

function generateQuote() {
  fetch(`${baseUrl}?count=1`, { // Fetch a single random quote
    headers: {
      'x-rapidapi-key': e25a485053msh8bcfd469f10ffd3p1459e2jsn48e6af5a613d,
      'x-rapidapi-host': 'quotes-by-api-ninjas.p.rapidapi.com' // Replace if API host is different
    }
  })
    .then(response => response.json())
    .then(data => {
      const quote = data[0]; // Access the first quote from the response
      quoteText.textContent = quote.quote;
      authorName.textContent = quote.author;
    })
    .catch(error => console.error(error));
}

quoteButton.addEventListener('click', generateQuote);
