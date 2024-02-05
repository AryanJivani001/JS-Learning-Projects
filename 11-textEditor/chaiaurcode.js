let inputField = document.querySelector('#input-field')
let btnUppercase = document.querySelector('.uppercase')
let btnLowercase = document.querySelector('.lowercase')
let btnCapitalize = document.querySelector('.capitalize')
let btnBold = document.querySelector('.bold')
let btnItalic = document.querySelector('.italic')
let btnUnderline = document.querySelector('.underline')
let outputField = document.querySelector('#output-field')


let change;



btnUppercase.addEventListener('click', function () {
    if (inputField.value == "") {
        alert("Please write something")
    } else {
        change = "uppercase"
        inputField.value = inputField.value.toUpperCase()
    }
})

btnLowercase.addEventListener('click', function () {
    if (inputField.value == "") {
        alert("Please write something")
    } else {
        change = "lowercase"
        inputField.value = inputField.value.toLowerCase()
    }
})
// first capital other lower case
btnCapitalize.addEventListener('click', function () {
    if (inputField.value == "") {
        alert("Please write something")
    } else {
        change = "capitalize"
        inputField.value = inputField.value[0].toUpperCase() + inputField.value.slice(1).toLowerCase()
    }
})

btnBold.addEventListener('click', function () {
    if (inputField.value == "") {
        alert("Please write something")
    } else {
        change = "bold"
        inputField.style.fontWeight = 'bold'
    }
})

btnItalic.addEventListener('click', function () {
    if (inputField.value == "") {
        alert("Please write something")
    } else {
        change = "italic"
        inputField.style.fontStyle = 'italic'
    }
})

btnUnderline.addEventListener('click', function (e) {
    if (inputField.value == "") {
        alert("Please write something")
    } else {
        change = "underline"
        inputField.style.textDecoration = 'underline'
    }
})