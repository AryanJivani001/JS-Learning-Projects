const height=document.querySelector('#height')
const weight=document.querySelector('#weight')
const btn=document.querySelector('button')

btn.addEventListener('click',check)

function check (e){
    e.preventDefault()
    if(height.value === '' || weight.value === ''){
        alert('Please enter height and weight')
    }else if(isNaN(height.value) || isNaN(weight.value)){
        alert('Please enter valid height and weight')
    }else{
        calculateBMI()
    }
}

const calculateBMI= ()=>{
    const bmi= (weight.value/(height.value*height.value))*10000
    document.querySelector('#results').innerHTML=bmi
}
