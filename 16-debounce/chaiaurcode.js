// with each character typed in search box, make an API call to randomuserme api and display a card below it. Use debounce concept to reduce api calls.

// You will automatically learn about this and apply in this. ☕️

const userInput = document.getElementById('user-input');

function debounce(func, time) {
    let timer;
    return function (...args) {
        if (timer) {
            clearTimeout(time)
        }
        timer = setTimeout(() => {
            func.apply(this, args)
        }, time)
    }
}

function fetchData(searchQuery) {
    const url = `https://randomuser.me/api/?results=1&seed=${searchQuery}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayUserCard(data.results[0])
        })
        .catch(err => console.log(err))
}

function displayUserCard(user) {
    console.log(user)
    const userCard = document.querySelector('.user-card');
    userCard.textContent = user;

}

const debounceRandomUser = debounce(fetchData, 500)

userInput.addEventListener('input', (e) => {
    debounceRandomUser(e.target.value)
    console.log(e.target.value)
})  