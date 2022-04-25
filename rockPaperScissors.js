//prompt player to choose 'rock', 'paper', or 'scissors'

function humanPlay () {
    let playerChoice = prompt("Play 'rock', 'paper', or 'scissors'.");
    if (playerChoice.toLowerCase() === "rock") {
        play = 0;
        console.log("Your play: rock")
    }
    else if (playerChoice.toLowerCase() === "paper") {
        play = 1;
        console.log("Your play: paper")
    }
    else if (playerChoice.toLowerCase() === "scissors") {
        play = 2;
        console.log("Your play: scissors")
    }
    else {
        alert("Refresh page and choose 'rock', 'paper', or 'scissors'.");
    }
    return play;
}
//humanPlay();

//make computer give random output between 0 and 2
function computerPlay(maximum) {
    const number = (Math.random()*3);
    const integer = (Math.floor(number));

if (integer === 0) {
    console.log("Computer's play: rock");
} else if (integer === 1) {
    console.log("Computer's play: paper");
} else if (integer === 2) {
    console.log("Computer's play: scissors");
}
return integer;
}

//program the winning and losing combinations
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log('Your score: ' + (playerScore));
        console.log('Computer score: ' + (computerScore));
    } else if (playerSelection == 0 && computerSelection == 1) {
        computerScore = computerScore + 1;
        console.log('Computer score: ' + (computerScore));
        console.log('Your score: ' + (playerScore));
    } else if (playerSelection == 0 && computerSelection == 2) {
        playerScore = playerScore + 1;
        console.log('Your score: ' + (playerScore));
        console.log('Computer score: ' + (computerScore));
    } else if (playerSelection == 1 && computerSelection == 0) {
        playerScore = playerScore + 1;
        console.log('Your score: ' + (playerScore));
        console.log('Computer score: ' + (computerScore));
    } else if (playerSelection == 1 && computerSelection == 2) {
        computerScore = computerScore + 1;
        console.log('Computer score: ' + (computerScore));
        console.log('Your score: ' + (playerScore));
    } else if (playerSelection == 2 && computerSelection == 0) {
        computerScore = computerScore + 1;
        console.log('Computer score: ' + (computerScore));
        console.log('Your score: ' + (playerScore));   
    } else if (playerSelection == 2 && computerSelection == 1) {
        playerScore = playerScore + 1;
        console.log('Your score: ' + (playerScore));
        console.log('Computer score: ' + (computerScore));
    }

}

//define constants for game play function
let playerSelection = "";
let computerSelection = "";
let computerScore = 0;
let playerScore = 0;

//console.log(playRound(playerSelection, computerSelection));
//function for a single round of rock, paper, scissors

function game() {
    for (let i=0; i<5; i++) {
        playerSelection = humanPlay ();
        computerSelection = computerPlay ();
        playRound(playerSelection, computerSelection);
    }
};

console.log(game(computerScore, playerScore));

if (computerScore > playerScore) {
    console.log("Boohoo, you lose.")
}else if (playerScore > computerScore) {
    console.log("Congrats! You win!")
}else if (playerScore == computerScore) {
    console.log("It's a tie.")
}
