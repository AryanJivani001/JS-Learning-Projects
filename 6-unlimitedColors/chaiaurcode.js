const body= document.querySelector("body");
const start= document.querySelector("#start");
const stop= document.querySelector("#stop");

const str="0123456789ABCDEF";
let myinterval;

start.addEventListener("click", (e)=>{
    e.preventDefault()
        myinterval = setInterval(()=>{
        let color='#';
        for(let i=0;i<6;i++){
            color+=str[Math.floor(Math.random()*16)];
        }
        body.style.backgroundColor = color;
    },500)
})

stop.addEventListener("click", (e)=>{
    e.preventDefault()
    clearInterval(myinterval)
})
