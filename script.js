const gameTitle = document.querySelector(".gameTitle")  //gameTitle
const playerX = document.querySelector(".playerX")      //playerX
const playerO = document.querySelector(".playerO")      //playerO
const resetButton = document.querySelector(".resetButton")    //reset
const gridBoard = document.querySelector(".gridBoard")  //gridBoard
let gameActive = true

const tokenX = "X"
const tokenO = "O"
let currentToken = tokenX
let playerUp = currentToken
const allSquares = Array.from(document.getElementsByClassName('square')) //all squares array
//console.log(allSquares)
let square = document.querySelectorAll('.square')  //all squares list
//console.log(square)
let gridSpaces = ['', '', '', '', '', '', '', '', '']  //all empty spaces array
//console.log(gridSpaces)



allSquares.forEach(square => {
    square.addEventListener('click', squaresTaken, { once: true})
})

function squaresTaken(event) {
    console.log("taken")
}



//= gridSpaces.every(square => square.click)

//gridSpaces.forEach.addEventListener('click', squareTaken)










/*--
whoseTurn()
function whoseTurn() {
    if playerUp = tokenX {
        
    } else {
        playerOGo()
    }
}
/*--
----------------------GAME PLAY-----------------------------*/




/*-----------------------------------------------------*/
function resetBoard() {
    let 
}

resetButton.addEventListener('click', resetBoard)