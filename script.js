const quotes = [
    "Be gentle with yourself.",
    "Small steps are still progress.",
    "You’re doing better than you think.",
    "Believe in your own timing.",
    "Every day is a fresh start.",
    "You deserve good things.",
    "Rest is productive too.",
    "Keep going, you’re getting there.",
    "Your future self will thank you.",
    "One day at a time."
];

const quoteText = document.getElementById('quote');
const newQuoteBtn = document.getElementById('newQuoteBtn');

newQuoteBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
});
