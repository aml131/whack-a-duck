function init(){
//all codes go here
const gridElem = document.querySelector(".grid")
function createGrid(){
    //for every cell  create  DIV
    //append this cell to our grid
    for (let i=0; i<100; i++){
        const cell = document.createElement('div')
        cell.textContent= i
        gridElem.appendChild(cell)
    }
}
createGrid()
}
document.addEventListener('DOMContentLoaded',init)