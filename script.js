let btn = document.getElementById('btn');

let output = document.getElementById('output');

let quote = [
    "The only way to do great work is to love what you do",
    "Success is not final, failure is not fatal: It is the courage to continue that counts",
    "Believe you can and you're halfway there",
    "Strive not to be a success, but rather to be of value",
    "The only limit to our realization of tomorrow will be our doubts of today",
    "It always seems impossible until it’s done",
    "Your time is limited, don't waste it living someone else's life",
    "Do not wait to strike till the iron is hot, but make it hot by striking",
    "The best way to predict the future is to create it",
    "Success is stumbling from failure to failure with no loss of enthusiasm",
    "It is during our darkest moments that we must focus to see the light",
    "I find that the harder I work, the more luck I seem to have",
    "The only place where success comes before work is in the dictionary",
    "Don’t count the days, make the days count",
    "The future belongs to those who believe in the beauty of their dreams",
    "Change your thoughts and you change your world",
    "The secret of getting ahead is getting started",
    "Don't watch the clock; do what it does. Keep going",
    "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart",
    "It's not whether you get knocked down, it's whether you get up",
    "Opportunities don't happen. You create them",
    "The way to get started is to quit talking and begin doing",
    "If you want to achieve greatness stop asking for permission",
    "Your attitude, not your aptitude, will determine your altitude",
    "I am not a product of my circumstances. I am a product of my decisions",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle",
    "The only person you are destined to become is the person you decide to be",
    "Don’t let yesterday take up too much of today",
    "The only limit to our realization of tomorrow will be our doubts of today",
    "Success is not in what you have, but who you are"

]

btn.addEventListener('click', function() {
    var randomQuote = quote[Math.floor(Math.random() * quote.length)]
    output.innerHTML = randomQuote;
})