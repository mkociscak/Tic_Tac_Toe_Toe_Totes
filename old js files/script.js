
function startGame() {
const gameTitleLogo = document.querySelector(".gameTitle")  //gameTitle
const gridBoard = document.getElementsByClassName("gridBoard")//empty array spaces
const resetButton = document.querySelector(".resetButton")    //reset
const tokenX = "X"
const tokenO = "O"
let gameStatus  
let moves = 0
let currentToken = true   //xUp

allSquares = Array.from(document.querySelectorAll('.square')) //all squares array (9)console.log(allSquares)
let square = document.getElementsByClassName('square')  //all squares as HTML collection (9)console.log(square)

let gridSpaces = [null, null, null, null, null, null, null, null, null]  //all empty spaces array
    console.log(gridSpaces)

//needs to switch back/forth after square clicked
let spaceMarked() {   //array[ ] =spaceMarked
    if(xUp) {
       xUp = !xUp
       return(tokenX)
    } else {
       xUp = !xUp
       return(tokenO) //puts o in square
    } } 
function updateGame(index) {
        gridSpaces[index] = xUp
    }
const playerClick = (square, index) => {
    if(spaceMarked(square) && gameStart) {
        square.innerHTML = xUp;
        updateGame(index);
        isWinner(xUp);
        spaceMarked(xUp);
        }
}
    
function squaresTaken(event) {      
    console.log(event.target.innerText) //LOGS ID FROM SQUARE CLASS HTML in console
    event.target.innerText = spaceMarked() //MARKS SPACES ON PAGE/SCREEN
    
    }
allSquares.forEach(square => {
    square.addEventListener('click', squaresTaken, {once: true})
})
//resetBoard
resetButton.addEventListener('click', resetBoard)   //resetBoard = gameStart

function resetBoard() {
    gameStatus = true
    allSquares.forEach(square => {
        square.innerText = ''
        square.innerText = ''
        square.removeEventListener('click', spaceMarked)
        square.addEventListener('click', spaceMarked, {once: true})
    }) 
}
//----------TO CHECK GAME OUTCOME

    
//const chosenBox =  gridBoard.innerText   //ERROR HERE : UNCAUGHT TYPE ERROR CANNOT READ PROPERTIES OF INNERTEXT.target
//const chosenBox = square['']    //index
gridSpaces.splice([], 1, "X")
//gridSpaces.push(xUp)
console.log(gridSpaces)
let currentPlayer = "X"

function isWinner(currentPlayer) {
    for (let moves = 0; moves > square.length; moves++) {
    //console.log(moves)
        if (square[0].innerText === currentPlayer && square[1] === currentPlayer && square[2] === currentPlayer) {
        //return("isWinner")
        console.log("isWinner")
    }}
    //console.log(square[0].innerText)
}
isWinner(currentPlayer)

/*
1. const playerClick = (square, index) => {
    if (spaceMarked(square)&& gameStatus) {
        square.innerText = gridSpaces
        currentPlayer
        (index);
        isWinner(currentPlayer)
        spaceMarked(currentPlayer)
        console.log(gridSpaces)
    }






//function isDraw()square[0].innerText !== null && //chosenBox, 1, "X"
/*if (square[3].innerText === currentPlayer && square[4] &&
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
  }}
  */

/*function showWinner() {
    console.log("winner")
    gameStatus = "Game Over";
  }
isWinner()


/*function reset(){
   for(i = 1; i < 9; i++){
      document.getElementById(i.toString()).value = "";
   }
}





/*------------------------------------------------------------------END
















//const playerX = document.querySelector(".playerX")      //playerX
//const playerO = document.querySelector(".playerO")      //playerO



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
//gridSpaces
//function chosenSpaceIndex(event) {
    //console.log(event.target.innerText)  //should ==> gridSpaces
    //parseInt(squaresTaken.target.innerText)
    //innerText attached to variable


*/