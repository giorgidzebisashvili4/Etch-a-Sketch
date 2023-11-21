let container= document.querySelector("body")
let input = document.querySelector('input')
let inputBtn = document.querySelector('button')


let gridSize = 3

let gridMaker = document.createElement('div')
gridMaker.classList.add("container")
grid()
function grid(){

gridMaker.style.cssText = `display: grid; grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize}, 1fr);`

let DivsCount = gridSize**2
 
for(let i=0; i<DivsCount; i++){
let divsMaker = document.createElement('div')
divsMaker.classList.add("test")

gridMaker.appendChild(divsMaker)
}

container.appendChild(gridMaker)
// change color to white after ne numbers

let divSelect = document.querySelectorAll(".container>div")

divSelect.forEach((divSelect)=>{
    divSelect.style.background="white"
divSelect.addEventListener('mouseover',(e)=>{
    e.target.style.background="grey"
    console.log(e.target)
    })
})

}

inputBtn.addEventListener('click',()=>{
    if(input.value<=100){
        gridSize=input.value
    }else{alert("max is 100!")}
    grid()
})




