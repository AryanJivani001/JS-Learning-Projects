const guessField=document.querySelector('#guessField')
const subt=document.querySelector('#subt')
const guesses=document.querySelector('.guesses')
const lastResult=document.querySelector('.lastResult')
const Result=document.querySelector('.result')
const lowOrHi=document.querySelector('.lowOrHi')
let count=10
let playgame=true
let randomNumber


if(playgame){
    Startgame()
}

function Startgame(){
    guessField.value=''
    guessField.innerHTML=''
    lowOrHi.innerHTML=''
    Result.innerHTML=''
    lastResult.innerHTML=''
    guesses.innerHTML=''
    guessField.removeAttribute('disabled')
    subt.style.display=''
    playgame=true
    count=10
    randomNumber=Math.floor(Math.random()*100)+1
    subt.addEventListener('click',checkGuess)
}



function checkGuess(e){
    e.preventDefault()
    if(count === 0){
        playgame=false
        GameOver()
    }else if(guessField.value > 100){
        guessField.value=''
        guessField.innerHTML=''
        msg(`Please enter a number with 0 to 100`)
    }else if(guessField.value < 0){
        guessField.value=''
        guessField.innerHTML=''
        msg(`Please enter a number with 0 to 100`)
    }else if(guessField.value==''){
        guessField.value=''
        guessField.innerHTML=''
        msg(`Please enter a number`)
    }else if(isNaN(guessField.value)){
        guessField.value=''
        guessField.innerHTML=''
        msg(`Please enter a valid number`)
    }else if(guessField.value > randomNumber){
        display(guessField.value)
        guessField.value=''
        guessField.innerHTML=''
        msg(`Your guess is too high`)
        count--
        lastResult.innerHTML=`Wrong! You have ${count} guesses left`
    }else if(guessField.value < randomNumber){
        display(guessField.value)
        guessField.value=''
        guessField.innerHTML=''
        msg(`Your guess is too low`)
        count--
        lastResult.innerHTML=`Wrong! You have ${count} guesses left`
    }else{
        Endgame()
    }
}

function display(guess){
    guesses.innerHTML+=`${guess}, `
}
function msg(msg){
    lowOrHi.innerHTML=msg
}

function GameOver(){
    guessField.value=''
    guessField.innerHTML=''
    Result.innerHTML=`Game Over. The number was ${randomNumber}`
    subt.style.display='none'
    guessField.setAttribute('disabled','')
    lowOrHi.innerHTML = `tap to Start new Game`;
    playgame=false  
    lowOrHi.addEventListener('click',Startgame)
}

function Endgame(){
    guessField.value=''
    guessField.innerHTML=''
    lastResult.innerHTML= count
    Result.innerHTML=`Yahh, You Win The Game and The number was ${randomNumber}`
    subt.style.display='none'
    guessField.setAttribute('disabled','')
    lowOrHi.innerHTML = `tap to Start new Game`;
    playgame=false  
    lowOrHi.addEventListener('click',Startgame)
}