//prompt player to choose 'rock', 'paper', or 'scissors'
let play = prompt("Play 'rock', 'paper', or 'scissors'.")
if (play.toLowerCase() == "rock") {
    let rock = 0;
}
else if (play.toLowerCase() == "paper") {
    let paper = 1;
}
else if (play.toLowerCase() == "scissors") {
    let scissors = 2;
}

//define constants for game play function
const playerSelection = play;
const computerSelection = computerPlay();

//make computer give random output between 0 and 2
function computerPlay(maximum) {
    const number = (Math.random()*3)
    const integer = (Math.floor(number))
    return integer;
}

//assign 0-2 to "rock", "paper", and "scissors"
if ((computerPlay()) === 0) {
    console.log("Computer's play: rock");
} else if ((computerPlay()) === 1) {
    console.log("Computer's play: paper");
} else {
    console.log("Computer's play: scissors");
}


//program the winning and losing combinations
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 0 && computerSelection === 0) {
        console.log("It's a tie!");
    } else if (playerSelection === 0 && computerSelection === 1) {
        console.log("You lose! Paper beats rock.");
    } else if (playerSelection === 0 && computerSelection === 2) {
        console.log("You win! Rock beats scissors.");
    } else if (playerSelection === 1 && computerSelection === 0) {
        console.log("You win! Paper beats rock.");
    } else if (playerSelection === 1 && computerSelection === 1) {
        console.log("It's a tie!");
    } else if (playerSelection === 1 && computerSelection === 2) {
        console.log("You lose! Scissors beats paper.")
    } else if (playerSelection === 2 && computerSelection === 0) {
        console.log("You lose! Rock beats scissors.");
    } else if (playerSelection === 2 && computerSelection === 1) {
        console.log("You win! Paper beats rock.");
    } else if (playerSelection === 2 && computerSelection === 2) {
        console.log("It's a tie!")
    }
}

//function for a single round of rock, paper, scissors
console.log(playRound(playerSelection, computerSelection));

