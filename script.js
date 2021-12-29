const gameTitle = document.querySelector(".gameTitle")  //gameTitle
const playerX = document.querySelector(".playerX")      //playerX
const playerO = document.querySelector(".playerO")      //playerO
const resetButton = document.querySelector(".resetButton")    //reset
const gridBoard = document.getElementsByClassName("gridBoard")  //empty array of spaces
const tokenX = "X"
const tokenO = "O"
let gameStatus = "Active"
let moves = 0

allSquares = Array.from(document.querySelectorAll('.square')) //all squares array (9)
    console.log(allSquares)
let square = document.getElementsByClassName('square')  //all squares as HTML collection (9)
    console.log(square)

let xUp = true    //needs to switch back/forth after square clicked
function spaceMarked() {    
if(xUp) {
   xUp = !xUp
   return 'X'
} else {
   xUp = !xUp
   return 'O'
} } 
 
function squaresTaken(event) {      //console.log("taken")
    console.log(event.target.innerText) //LOGS ID FROM SQUARE CLASS HTML in console
    event.target.innerText = spaceMarked() //MARKS SPACES ON SCREEN/page
    }

allSquares.forEach(square => {
    square.addEventListener('click', squaresTaken, { once: true})
})

let gridSpaces = [null, null, null, null, null, null, null, null, null]  //all empty spaces array
    console.log(gridSpaces[0])

//function chosenSpaceIndex(event) {
    //console.log(event.target.innerText)  //should ==> gridSpaces
    //parseInt(squaresTaken.target.innerText)
    //innerText attached to variable
    
//const chosenBox =  gridBoard.target.innerText   ERROR HERE : UNCAUGHT TYPE ERROR CANNOT READ PROPERTIES OF INNERTEXT
const chosenBox = 0    
gridSpaces.splice(chosenBox, 1, "X")
console.log(gridSpaces)


let currentPlayer = "X"

function isWinner(currentPlayer) {
    for (let moves = 0; moves > square.length; moves++) {
    //console.log(moves)
    } if (square[0] === currentPlayer && square[1] === currentPlayer && square[2] === currentPlayer) {
    //console.log("winner")
}}
isWinner(currentPlayer)
console.log(gridSpaces)

/*if (square[3] == square[4] &&
    square[4] == square[5] &&
    square[3] != "") 
    {showWinner(3, 4, 5)}
if (
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
}
function showWinner() {
    console.log("winner")
    gameStatus = "Game Over";
  }
isWinner()
function resetBoard() {
    let 
}

resetButton.addEventListener('click', resetBoard)
------------------------------------------------------------------END




















/*
function checkWinner() {

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

    //  //datatype
//console.log(chosenSpaceIndex[0])
//gridSpaces.splice(innerText, 1, "X")
//console.log(gridSpaces)

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



*/