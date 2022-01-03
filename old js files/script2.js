function startGame() {
    //const gameTitleLogo = document.querySelector(".gameTitle")  //gameTitle
    //const gridBoard = document.getElementsByClassName("gridBoard")//BOARD ONLY(1)
    let allSquares = Array.from(document.querySelectorAll(".square")) //all squares array (9)console.log(allSquares) not good undef
    //et square = document.getElementsByClassName('.square')  //all squares array 0 TOOOO MANY
    let square = document.querySelectorAll('square')  //all squares array 0 TOOOO MANY
    let gridSpaces = [null, null, null, null, null, null, null, null, null] //all empty spaces array
    const resetButton = document.querySelector(".resetButton")    //reset
    //const tokenX = "X"
    //const tokenO = "O"
    let gameInPlay = true  
    let moves = 0
    let currentPlayer = "X"

//console.log(allSquares)
    //let currentTurn = "X"
    //let currentToken = true   //xUp
    //updates board array with current plays
//function update(index) {
    //gridSpaces[index] = currentToken
//}
function updatePlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X"
    return(currentPlayer)
}

function updateBoard(index) {      
    gridSpaces[index] = currentPlayer
}
const playerClick = (square, index) => {
    square.innerHTML = currentPlayer;
        updateBoard(index);
        isWinner(currentPlayer);
        updatePlayer(currentPlayer);
        }


allSquares.forEach((square, index => {
        square.addEventListener('click', ()=> playerClick(square, index))

        })
    

//---------------------ABOVE MARKS BOARD AND SWITCHES PLAYER CORRECTLY

function isWinner(currentPlayer) {
    //for (let moves = 0; moves > square.length; ) {
        moves++
    //console.log(moves)
        if (allSquares[0].innerText === currentPlayer && allSquares[1] === currentPlayer && allSquares[2] === currentPlayer) {
        //return("isWinner")
        prompt("isWinner")
    }
    //console.log(square[0].innerText)
}
//isWinner(currentPlayer)

/*if (moves == 9 && gameStart == true) {
    isTie()
function isTie(){
    alert("Tie Game!")}
}*/
//---------------------BELOW RESETS BOARD AND SWITCHES PLAYER CORRECTLY
//const resetButton = document.querySelector(".resetButton")

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
}


/*resetButton.addEventListener("click", (event) =>  {
    gridSpaces = [null, null, null, null, null, null, null, null, null]
    currentTurn = "X"
    allSquares.forEach(function(square) {square.innerText = ''})
    moves = 0
})
function updateBoard(event) {      
        console.log(event.target.innerText) //LOGS ID FROM SQUARE CLASS HTML in console
        event.target.innerText = updatePlayer() //MARKS SPACES ON PAGE/SCREEN
        console.log(gridSpaces)
        }

*/
 


startGame()