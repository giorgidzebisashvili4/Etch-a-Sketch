let container= document.querySelector("body")
let input = document.querySelector('input')
let inputBtn = document.querySelector('button')


let gridSize = 16
grid()

function grid(){

let gridMaker = document.createElement('div')
gridMaker.classList.add("container")
gridMaker.style.cssText = `display: grid; grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize}, 1fr);`

let DivsCount = gridSize**2
 
for(let i=0; i<DivsCount; i++){
let divsMaker = document.createElement('div')
divsMaker.classList.add("test")

gridMaker.appendChild(divsMaker)
}

container.appendChild(gridMaker)
}

inputBtn.addEventListener('click',()=>{
    gridSize=input.value
    console.log(gridSize)
    // container.removeChild(gridMaker)
    grid()
})

let divSelect = document.querySelectorAll(".container>div")

divSelect.forEach((divSelect)=>{
divSelect.addEventListener('mouseover',(e)=>{
    e.target.style.background="blue"
    console.log(e.target)
    })
})



