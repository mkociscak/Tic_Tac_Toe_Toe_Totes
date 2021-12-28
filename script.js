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
let currentPlayer = spaceMarked()
   
function squaresTaken(event) {      //console.log("taken")
    console.log(event.target.innerText)
    event.target.innerText = spaceMarked()
    }

allSquares.forEach(square => {
    square.addEventListener('click', squaresTaken, { once: true})
})

const winConditionsO = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]

let gameStatus = "Active"
function showWinner() {
    console.log("winner")
    gameStatus = "Game Over";
  }

if (
    square[0] == square[1] &&
    square[1] == square[2] &&
    square[0] == currentPlayer
  ) {
    showWinner(0, 1, 2);
  } else if (
    square[3] == square[4] &&
    square[4] == square[5] &&
    square[3] != ""
  ) {
    showWinner(3, 4, 5);
  } else if (
    square[6] == square[7] &&
    square[7] == square[8] &&
    square[6] != ""
  ) {
    showWinner(6, 7, 8);
  } else if (
    square[0] == square[3] &&
    square[3] == square[6] &&
    square[0] != ""
  ) {
    showWinner(0, 3, 6);
  } else if (
    square[1] == square[4] &&
    square[4] == square[7] &&
    square[1] != ""
  ) {
    showWinner(1, 4, 7);
  } else if (
    square[2] == square[5] &&
    square[5] == square[8] &&
    square[2] != ""
  ) {
    showWinner(2, 5, 8);
  } else if (
    square[0] == square[4] &&
    square[4] == square[8] &&
    square[0] != ""
  ) {
    showWinner(0, 4, 8);
  } else if (
    square[2] == square[4] &&
    square[4] == square[6] &&
    square[2] != ""
  ) {
    showWinner(2, 4, 6);
  }





/*
function checkWinner() {

let playerXSpaces = new Array();
let playerOSpaces = new Array();

//let size = 3;

function makeArrays(){
    if (xUp) { 
        xUp = !xUp
        this.innerText = "X";
        playerXSpaces.push(parseInt(this.square));
        //playerXSpaces.sort(function(a, b) { return a - b });
    } else {
        this.innerText = "O";
        playerOSpaces.push(parseInt(this.id));
        //playerOSpaces.sort(function(a, b) { return a - b });
    }

    if (checkWinner()) {
        if(xUp) { 
            xUp = !xUp
            prompt("Xxxxxxx")
        }else{
            prompt("Oooooo")
    }}

checkWinner()
console.log(playerXSpaces)

whoseTurn()
function whoseTurn() {
    if playerUp = tokenX {       
    } else {
        playerOGo()
    }
}
function playerWins() {
        winConditions.forEach(i => console.log(i))
    }    
----------------------GAME PLAY-------------------
let playerWins = prompt("Whaaaat")
const winConditionsX = [
    [0, 1, 2] === [innerText="X",innerText="X",innerText="X"]
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]
const winConditionsO = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]
function playerWon() {
    if(winConditionsX) {
        (winConditionsX) = true
        console.log("xWon")
    }
    } if (playerWins) { 
        playerWins = winConditionsO[0,1,2,3,4,5,6,7,8]
        
    }

playerWon()
/*
function playerWon() {
    if (playerWins) {
        playerWins = !playerWins && winConditionsX[[0],[1],[2],[3],[4],[5],[6],[7],[8]]
    
        console.log("xWon")
    } if (playerWins) { 
        playerWins = winConditionsO[0,1,2,3,4,5,6,7,8]
        return 'O' 
    }
}
------
playerPositions = xUp  

function playStatus(xUp)
if gridSpaces.indexOf = true {

for (let i = 0; i < winConditions.length; i++) {
    for (let j = 0; j < winConditions[i].length; j++) {
    document.getElementById(winConditions[i][j]) = spaceMarked()
    }
}
------------

function resetBoard() {
    let 
}

resetButton.addEventListener('click', resetBoard)

*/