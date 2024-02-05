const url = 'https://api.thecatapi.com/v1/images/search';
const container= document.querySelector('.container');
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const img = document.createElement('img');
        img.src = data[0].url;
        container.appendChild(img);
    });
})