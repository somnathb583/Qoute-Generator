async function getNewQuotes() {
    const result = await getRandomQuotes();
    showQuotes(result);
}

document.querySelector('.new-quote').addEventListener('click', async function () {
    await getNewQuotes();
})

async function getRandomQuotes() {
    const result = await fetch('https://api.quotable.io/random');
    return result.json();
}

function showQuotes(result) {
    const quote = document.querySelector('.quote');
    const author = document.querySelector('.author');
    if (result) {
        quote.innerText = result.content;
        author.innerText = result.author;
    }
}

getNewQuotes();