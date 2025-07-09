function init() {
  const gridElem = document.querySelector(".grid")
  const scoreElem = document.querySelector('#score-display')
  const cells  = []
  const gridWidth = 10
  const numberOfCells = gridWidth * gridWidth

  let duckPosition= 43
  let score=0

function addDuck(){
    cells[duckPosition].classList.add('duck')
}
function removeDuck(){
    cells[duckPosition].classList.remove('duck')
}
function play(){
    setInterval(()=>{
        removeDuck()
        duckPosition= Math.floor(Math.random()* numberOfCells)
        addDuck()
    },3000)
}
function handleClick(event){
    console.log('Handle click has run')
    if (event.target.classList.contains('duck')){
        score +=10
        scoreElem.textContent = `Your score is ${score}`
        console.log(score)
    }
}
play()

  function createGrid() {
    // for every cell, create a div
    // then append the cell to the grid
    for (let i = 0; i < numberOfCells; i++) {
      const cell = document.createElement("div")
      //cell.classList.add('duck')
      cell.textContent = i
      cell.addEventListener('click', handleClick)
      cells.push(cell)
      gridElem.appendChild(cell)
    }
    console.log(cells)
  }
  createGrid()
addDuck() 
removeDuck()
}
document.addEventListener("DOMContentLoaded", init)