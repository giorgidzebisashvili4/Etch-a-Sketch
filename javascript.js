let container= document.querySelector("body")
let input = document.querySelector('input')
let inputBtn = document.querySelector('.gridBtn')

let gridSize = 16
let color = "grey"
let RandomColor = "off"


let gridMaker = document.createElement('div')
gridMaker.classList.add("container")

let displayGridSize = document.createElement('h3')

let divForColor = document.createElement("div")

let defoltColorBtn = document.createElement('button')
defoltColorBtn.classList.add("defoltColorBtn")
defoltColorBtn.textContent = "grey"
defoltColorBtn.addEventListener('click',()=>{
    RandomColor= "off"
    color="grey"
})

let randomColorBtn = document.createElement('button')
randomColorBtn.classList.add("randomColorBtn")
randomColorBtn.textContent = "random"
randomColorBtn.addEventListener('click',()=>{
    RandomColor= "on"
})


grid()
function grid(){
displayGridSize.textContent= `Grid size: ${gridSize} x ${gridSize}`
container.appendChild(displayGridSize)

container.appendChild(divForColor)
divForColor.appendChild(defoltColorBtn)
divForColor.appendChild(randomColorBtn)

gridMaker.style.cssText = `display: grid; grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize}, 1fr);`

let DivsCount = gridSize**2
 
for(let i=0; i<DivsCount; i++){
let divsMaker = document.createElement('div')
divsMaker.classList.add("test")

gridMaker.appendChild(divsMaker)
}

container.appendChild(gridMaker)

let divSelect = document.querySelectorAll(".container>div")

divSelect.forEach((divSelect)=>{
    divSelect.style.background="white"
divSelect.addEventListener('mouseover',(e)=>{

    if(RandomColor == "on"){
    color = randomRgbaString(1)
function randomRgbaString (alpha) {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    let a = alpha
    return `rgba(${r},${g},${b},${a})`
  }
}
    e.target.style.background=`${color}`
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




