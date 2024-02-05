const btn = document.querySelectorAll(".button")

btn.forEach((btn) => {
    btn.addEventListener('click',  (e)=> {
        if(e.target.id =='grey'){
            document.querySelector('body').style.backgroundColor = 'grey'
        }
        if(e.target.id == 'white'){
            document.querySelector('body').style.backgroundColor = 'white'
        }
        if(e.target.id == 'blue'){
            document.querySelector('body').style.backgroundColor = 'blue'
        }
        if(e.target.id == 'yellow'){
            document.querySelector('body').style.backgroundColor = 'yellow'
        }
    })
})