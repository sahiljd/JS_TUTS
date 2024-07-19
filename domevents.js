const greet = ()=>{
    alert("Hello Thanks for clicking OK!!!")
}

document.getElementById('okbtn').addEventListener("click",greet)




const change = ()=>
{
    ele.innerHTML="Hovering"
}

const backr=()=>
{
    ele.style.backgroundColor="red"
}

const backg=()=>
{
    ele.style.backgroundColor="green"
}

const bye=()=>
{
    ele.innerHTML='Bye'
}
let ele = document.getElementById("submit");
ele.addEventListener('mouseover',change)
ele.addEventListener('mouseout',bye)
ele.addEventListener('mousedown', backr)
ele.addEventListener('mouseup',backg)


function Welcome()
{
    alert("Hello Welcome")
}

