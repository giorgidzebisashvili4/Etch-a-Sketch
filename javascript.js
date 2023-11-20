let container= document.querySelector("body")

let gridSize = 5

let gridMaker = document.createElement('div')
gridMaker.classList.add("container")
gridMaker.style.cssText = `display: grid; grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize}, 1fr);`


let n = gridSize**2
 
for(let i=0; i<n; i++){
let divsMaker = document.createElement('div')
divsMaker.classList.add("test")

gridMaker.appendChild(divsMaker)
}

container.appendChild(gridMaker)