function computerPlay() {
    // Create a random number between 0 and 8 (9 numbers total)
    let randomValue = Math.floor(Math.random() * 8);
    // If that number is 6 or more, return rock
    if (randomValue >= 6) {
        return 'rock';
    } 
    // If that number is 3 or more, return paper
    else if (randomValue >= 3) {
        return 'paper';
    } 
    // Otherwise, return scissors
    else {return 'scissors'}
}


// Make a function which takes the parameters computerSelection and playerSelection
function playRound(computerSelection, playerSelection) {
    //First thing the function does is check if the two answers (cselection and pselection) are the same, if they are,
    // it declares its a tie before anything else goes on. This allows to rule out the possibility of a tie beforehand

    if (computerSelection === playerSelection) {
        return 'It\'s a tie!';
    } 
    
    //Next, it checks the winning condition of each answer. For example, if the player input was rock, it checks if 
    // the computer chose scissors, if it did, you won, if it didn't, you lost. It repeats this process for each possible answer.

    else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            return `${playerSelection} beats ${computerSelection}, you win!`
        } else {return `${computerSelection} beats ${playerSelection}, you lose!`}
    } 
    
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return `${playerSelection} beats ${computerSelection}, you win!`;
        } else {return `${computerSelection} beats ${playerSelection}, you lose!`}
    } 
    
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            return `${playerSelection} beats ${computerSelection}, you win!`
        } else {return `${computerSelection} beats ${playerSelection}, you lose!`}
    }
    else return 'um... no.'
}

function game() {
    let playerCount = 0;
    let computerCount = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt('Make your choice (rock, paper, or scissors)').toLowerCase();
        console.log(playRound(computerPlay(), playerChoice));
    }

}

game();
