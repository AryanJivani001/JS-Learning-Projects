const url = 'https://api.chucknorris.io/jokes/random';
const btn = document.querySelector('.btn');
const display_joke = document.querySelector('#display-joke');

btn.addEventListener('click', () => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            display_joke.innerHTML = data.value;
        });
});

