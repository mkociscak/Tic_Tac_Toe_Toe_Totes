const gameTitle = document.querySelector(".gameTitle")  //gameTitle
const playerX = document.querySelector(".playerX")      //playerX
const playerO = document.querySelector(".playerO")      //playerO
const resetButton = document.querySelector(".resetButton")    //reset
const gridBoard = document.getElementsByClassName(".gridBoard")  //gridBoard
const tokenX = "X"
const tokenO = "O"

allSquares = Array.from(document.getElementsByClassName('square')) //all squares array
    //console.log(allSquares)
let square = document.getElementsByClassName('.square')  //all squares list
    //console.log(square)
   
const gridSpaces = ['', '', '', '', '', '', '', '', '']  //all empty spaces array
    //console.log(gridSpaces)

let xUp = true    //needs to switch back/forth 

function spaceMarked() {
if(xUp) {
   xUp = !xUp
   return 'X'
} else {
   xUp = !xUp
   return 'O'
} } 

function squaresTaken(event) {      //console.log("taken")
    console.log(event.target.innerText)
    event.target.innerText = spaceMarked()
    }

allSquares.forEach(square => {
    square.addEventListener('click', squaresTaken, { once: true})
})

/*--
whoseTurn()
function whoseTurn() {
    if playerUp = tokenX {       
    } else {
        playerOGo()
    }
}
----------------------GAME PLAY-----------------------------*/




/*-----------------------------------------------------*/
function resetBoard() {
    let 
}

resetButton.addEventListener('click', resetBoard)



let gameActive = true
let winner = null



