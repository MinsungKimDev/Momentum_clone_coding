const quotes = [
    {
        quote: "Who contrils the past controls the future. Who controls the present controls the past.",
        author: "George Orwell",
    },
    {
        quote: "Work banishes those three great evils- boredom, vice and poverty.",
        author: "Goethe",
    },
    {
        quote: "One man who has a mind and knows it can always beat ten men who haven't and don't.",
        author: "George Bernard Shaw",
    },
    {
        quote: "Only the person who has faith in himself is able to be faithful to others.",
        author: "Erich Fromm",
    },
    {
        quote: "A friend in power is a friend lost.",
        author: "Henry Adams",
    },
    {
        quote: "Time is a great teacher, but unfortunately it kills all its pupils.",
        author: "Hector Berlioz",
    },
    {
        quote: "Although the world is full of suffering, it is full also of the overcoming of it.",
        author: "Helen Keller",
    },
    {
        quote: "Liberty without learning is always in peril and learning without liberty is always in vain.",
        author: "John F. Kennedy",
    },
    {
        quote: "Nothing is more despicable than respect based on fear.",
        author: "Albert Camus",
    },
    {
        quote: "Anything you'er good at contributes to happiness.",
        author: "Bertrand Russell",
    },

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;