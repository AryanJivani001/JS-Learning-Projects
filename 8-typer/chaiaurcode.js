const typedTextSpan = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

const words = ['Love', 'Jhakaas', 'mast', 'dhinchak', 'Weird'];
let wordCount = 0;
let charCount = 0;
let isTypedWord = true;

function type() {
    if (charCount < words[wordCount].length) {
        typedTextSpan.textContent += words[wordCount].charAt(charCount)
        charCount++;
        setTimeout(type, 300); // ek char erase thava no time
    }
    else{
        isTypedWord = false
        setTimeout(erase, 1000);  // erase start thay te pela no time 
    }
}

function erase() {
    if(charCount > 0)
    {
        typedTextSpan.textContent = words[wordCount].substring(0, charCount - 1);
        charCount--;
        setTimeout(erase, 250);
    }
    else{
        isTypedWord = true
        wordCount = (wordCount + 1) % words.length;   //for loop over words
        setTimeout(type, 300);
    }
}

document.addEventListener('DOMContentLoaded',()=>{
    type()
})