const container = document.querySelector('#container');


const content = document.createElement('div');
content.classList.add('content');
content.textContent = "this is text"
container.appendChild(content);


const btns = document.querySelector("#btn")
btns.addEventListener('click',()=>{
    alert("hello world")
})

