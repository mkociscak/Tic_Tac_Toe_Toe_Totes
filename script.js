const gameTitle = document.querySelector(".gameTitle")  //gameTitle
const playerX = document.querySelector(".playerX")      //playerX
const playerO = document.querySelector(".playerO")      //playerO
const resetButton = document.querySelector(".resetButton")    //reset
const gridBoard = document.querySelector(".gridBoard")  //gridBoard

const allSquares = Array.from(document.getElementsByClassName('square'))
console.log(allSquares)
let gridSquares = ['', '', '', '', '', '', '', '', '']
let playerUp = ''
let gameActive = true

resetButton.addEventListener('click', resetBoard)

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