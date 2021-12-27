const gameTitle = document.querySelector(".gameTitle")  //gameTitle
const playerX = document.querySelector(".playerX")      //playerX
const playerO = document.querySelector(".playerO")      //playerO
const resetButton = document.querySelector(".resetButton")    //reset
const gridBoard = document.querySelector(".gridBoard")  //gridBoard
let playerUp = ''
let gameActive = true

const tokenX = "X"
const tokenO = "O"
let currentPlayer = tokenX
const allSquares = Array.from(document.getElementsByClassName('square'))
//console.log(allSquares)
let gridSpaces = ['', '', '', '', '', '', '', '', '']

let square = document.querySelectorAll('.square')
const squareClicked = (event) => {
    alert("clicked")
}
square.addEventListener('click', squareClicked)


/*--
whoseTurn()
function whoseTurn() {
    let playerX = document.getElementByClassName("playerX")

    if (playerX == true) {
        playerXGo()
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