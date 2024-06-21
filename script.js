const darkModeToggle = document.querySelector('.dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        document.documentElement.style.setProperty('--background-color', '#1a1a1a');
        document.documentElement.style.setProperty('--text-color', '#f0f8ff');
        document.documentElement.style.setProperty('--secondary-text-color', '#ccc');
        darkModeToggle.textContent = '☀️';
    } else {
        document.documentElement.style.setProperty('--background-color', '#f0f8ff');
        document.documentElement.style.setProperty('--text-color', '#333');
        document.documentElement.style.setProperty('--secondary-text-color', '#666');
        darkModeToggle.textContent = '🌙';
    }
});

// Typing animation for main text
const typingText = document.getElementById('typing-text');
const mainText = "Mr. Bean, portrayed by Rowan Atkinson, is a character who has brought joy and laughter to millions around the world. This portfolio page is dedicated to celebrating Mr. Bean's legacy through a collection of his best moments, character biography, and interactive elements that reflect his unique style of comedy.";
let mainIndex = 0;

function typeMainText() {
    if (mainIndex < mainText.length) {
        typingText.innerHTML += mainText.charAt(mainIndex);
        mainIndex++;
        setTimeout(typeMainText, 3);//1sec
    } else {
        // Main text typing is complete, start the quote cycle
        fetchAndTypeQuote();
    }
}
// Fetch and type random quote
let quoteText = '';
let quoteAuthor = '';
let quoteIndex = 0;

function fetchAndTypeQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            quoteText = data.content;
            quoteAuthor = data.author;
            quoteIndex = 0;
            document.getElementById('quote-text').textContent = '';
            document.getElementById('quote-author').textContent = '';
            document.getElementById('quote-container').style.display = 'block';
            typeQuote();
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
        });
}

function typeQuote() {
    const quoteElement = document.getElementById('quote-text');
    const authorElement = document.getElementById('quote-author');
    
    if (quoteIndex < quoteText.length) {
        quoteElement.textContent += quoteText.charAt(quoteIndex);
        quoteIndex++;
        setTimeout(typeQuote, 30);
    } else if (quoteIndex === quoteText.length) {
        authorElement.textContent = `- ${quoteAuthor}`;
        quoteIndex++;
        setTimeout(typeQuote, 30);
    } else {
        // Quote typing is complete, wait for 6 seconds before fetching a new quote
        setTimeout(fetchAndTypeQuote, 6000);
    }
}

// Start the quote animation after a 2-second delay when the page loads
window.onload = function() {
    setTimeout(fetchAndTypeQuote, 600);//300ms
};