function startGame() {

let gridSpaces = [null, null, null, null, null, null, null, null, null] //all empty spaces array
let gameInPlay = true  
let numMoves = 0
let currentPlayer = "X"


    function updatePlayer() {
        currentPlayer = currentPlayer === "X" ? "O" : "X"
    }

    function updateBoard(index) {      //updates empty array of null
        gridSpaces[index] = currentPlayer
    }

    function moveValid(square) {    //only allows one x/o
        if(square.innerHTML === "X" || square.innerHTML === "O") {
        alert("This square has been taken. Try again.")
        return false
        } else {
        return true
        }
    }
    
//isWinner needed below CHECKS FOR END OF GAME WINNER OR TIE------------------------
    /* winning conditions
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]*/

    function isWinner(currentPlayer) {
        numMoves++
        if (gridSpaces[0] === currentPlayer && gridSpaces[1] === currentPlayer && gridSpaces[2] === currentPlayer) {
            alert(`Player ${currentPlayer} won the game!`)
            gameInPlay = false
            startGame() //repeat for each winning condition
        }

        if (gridSpaces[3] === currentPlayer && gridSpaces[4] === currentPlayer && gridSpaces[5] === currentPlayer) {
            alert(`Player ${currentPlayer} won the game!`)
            gameInPlay = false
            startGame() 
        }

        if (gridSpaces[6] === currentPlayer && gridSpaces[7] === currentPlayer && gridSpaces[8] === currentPlayer) {
            alert(`Player ${currentPlayer} won the game!`)
            gameInPlay = false
            startGame() 
        }

        if (gridSpaces[0] === currentPlayer && gridSpaces[3] === currentPlayer && gridSpaces[6] === currentPlayer) {
            alert(`Player ${currentPlayer} won the game!`)
            gameInPlay = false
            startGame() 
        }

        if (gridSpaces[1] === currentPlayer && gridSpaces[4] === currentPlayer && gridSpaces[7] === currentPlayer) {
            alert(`Player ${currentPlayer} won the game!`)
            gameInPlay = false
            startGame() 
        }
    
        if (gridSpaces[2] === currentPlayer && gridSpaces[5] === currentPlayer && gridSpaces[8] === currentPlayer) {
            alert(`Player ${currentPlayer} won the game!`)
            gameInPlay = false
            startGame() 
        }
    
        if (gridSpaces[0] === currentPlayer && gridSpaces[4] === currentPlayer && gridSpaces[8] === currentPlayer) {
            alert(`Player ${currentPlayer} won the game!`)
            gameInPlay = false
            startGame() 
        }
    
        if (gridSpaces[6] === currentPlayer && gridSpaces[4] === currentPlayer && gridSpaces[2] === currentPlayer) {
            alert(`Player ${currentPlayer} won the game!`)
            gameInPlay = false
            startGame() 
        }

        if (numMoves > 8 && gameInPlay == true) {
            alert(`Neither player won the game! Click the reset button to start over.`)
            gameInPlay = false
            startGame()
        }

        else {
            return true  //game continues gameInPlay = true
        }
    }
//END of isWinner function above-----------------------------

const playerMove = (square, index) => {         //updates board squares to x/o (currentPlayer)
    if(moveValid (square) && gameInPlay) {
    square.innerHTML = currentPlayer
    updateBoard(index)
    isWinner(currentPlayer)
    updatePlayer(currentPlayer)
    }
}
let allSquares = Array.from(document.querySelectorAll(".square")) //all squares on board array 

allSquares.forEach( (square, index) => {
    square.addEventListener('click', ()=> playerMove(square, index))
    })
    
//reset -- reset needed below---------------------------------

let resetButton = document.querySelector(".resetButton")    

resetButton.addEventListener("click", (event) =>  {
    gridSpaces === [null, null, null, null, null, null, null, null, null]
    currentPlayer === "X"
    allSquares.forEach(function (square) {
        square.innerHTML = null 
        numMoves === 0
    }) 
    })
}


startGame()
