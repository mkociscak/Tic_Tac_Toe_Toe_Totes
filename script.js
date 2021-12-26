const gameTitle = document.querySelector(".gameTitle")  //gameTitle
const playerX = document.querySelector(".playerX")      //playerX
const playerO = document.querySelector(".playerO")      //playerO
const gridBoard = document.querySelector(".gridBoard")  //gridBoard

whoseTurn()
function whoseTurn() {
    let playerX = document.getElementByClassName("playerX")

    if (playerX == true) {
        playerXGo()
    } else {
        playerOGo()
    }
}