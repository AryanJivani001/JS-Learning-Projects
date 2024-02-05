const baseURL = 'https://source.unsplash.com/all/300x300';
const content = document.querySelector('.content');

fetch(baseURL)
    .then((response) => response.blob())
    .then((blob) => {
        const objectURL = URL.createObjectURL(blob);
        content.innerHTML = `<img src="${objectURL}" />`;
    });
