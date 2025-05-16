const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const body = document.body;

// Background colors
const colors = ['#f39c12', '#e74c3c', '#8e44ad', '#3498db', '#2ecc71', '#1abc9c', '#f1c40f'];

let quotes = [];

// Fetch quotes from the API
async function fetchQuotes() {
  try {
    const res = await fetch('https://dummyjson.com/quotes');
    const data = await res.json();
    quotes = data.quotes; // Extract the quotes array from the response
    showRandomQuote();
  } catch (error) {
    quoteText.textContent = "Failed to load quote.";
    authorText.textContent = "";
    console.error("Error fetching quotes:", error);
  }
}

// Show a random quote and change background color
function showRandomQuote() {
  if (!quotes.length) return;

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  quoteText.textContent = quote.quote;
  authorText.textContent = quote.author ? `— ${quote.author}` : "— Unknown";

  // Change background color
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  body.style.backgroundColor = randomColor;
}

// Event listener for the button
newQuoteBtn.addEventListener('click', showRandomQuote);

// Initial load
fetchQuotes();
