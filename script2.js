function startGame() {
    const gameTitleLogo = document.querySelector(".gameTitle")  //gameTitle
    const gridBoard = document.getElementsByClassName("gridBoard")//empty array spaces
    const resetButton = document.querySelector(".resetButton")    //reset
    const tokenX = "X"
    const tokenO = "O"
    let gameStatus  
    let moves = 0
    //let currentToken = true   //xUp
    
allSquares = Array.from(document.querySelectorAll('.square')) //all squares array (9)console.log(allSquares)
    let square = document.getElementsByClassName('square')  //all squares as HTML collection (9)console.log(square)
    
    //all empty spaces array
let gridSpaces = [null, null, null, null, null, null, null, null, null]
        
    //updates board array with current plays
function updateBoard(index) {
    gridSpaces[index] = currentToken
}

//let currentTurn = "X"
let currentToken = "X"

function switchPlayer() {
    currentToken = currentToken == "X" ? "O" : "X"
    return(currentToken)
}
const playerClick = (square, index) => {
    square.innerHTML = currentToken;
        updateBoard(index);
        isWinner(currentToken);
        currentTurn(currentToken);
        }

allSquares.forEach(square => {
        square.addEventListener('click', updateBoard, {once: true})
        })
function updateBoard(event) {      
        console.log(event.target.innerText) //LOGS ID FROM SQUARE CLASS HTML in console
        event.target.innerText = switchPlayer() //MARKS SPACES ON PAGE/SCREEN
        console.log(gridSpaces)
        }
//---------------------ABOVE MARKS BOARD AND SWITCHES PLAYER CORRECTLY

function isWinner(currentToken) {
    //for (let moves = 0; moves > square.length; ) {
        moves++
    //console.log(moves)
        if (square[0].innerText === currentToken && square[1] === currentToken && square[2] === currentToken) {
        //return("isWinner")
        console.log("isWinner")
    }
    //console.log(square[0].innerText)
}
isWinner(currentToken)

if (moves == 9 && gameStart == true) {
    isTie()
function isTie(){
    alert("Tie Game!")}

//---------------------BELOW RESETS BOARD AND SWITCHES PLAYER CORRECTLY
resetButton.addEventListener("click", (event) =>  {
    gridSpaces = [null, null, null, null, null, null, null, null, null]
    currentTurn = "X"
    allSquares.forEach(function(square) {square.innerText = ''
    moves = 0
    })    
})


}}
startGame()