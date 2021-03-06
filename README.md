README

Tic Tac Toe

• Technologies used:
    Javascript, CSS, HTML
    
• Link to wireframes and user stories:
    Wireframe directory contains JPG files of wireframes
    User stories below
    
• Document your planning and tell a story about your development process and problem-solving strategy:
    Progressive commits show various processes attempted
    
• List unsolved problems which would be fixed in future iterations:
    Add CSS properties and styles to elements and overall page
    Add custom fonts, icons and sounds
    Add score board to log winners through multiple games
    Customize and elaborate winner notification
    
• Describe how you solved for the winner
    I used && operators to check for the winner by comparing user moves to all winning combinations
    
• Describe how some of your favorite functions work
    I like how the arrow functions work with arrays 
        example: allSquares.forEach(square => {
        square.addEventListener('click', squaresTaken, {once: true})})


User Stories
* user can start a new game.
* user can click on a square to add X or O which rotates throughout the game.
* user cannot click on the same square twice.
* user is shown a message if they win or tie.
* user game does not continue once player achieves win or tie.
* user can click the restart button to play again without the page refreshing.
