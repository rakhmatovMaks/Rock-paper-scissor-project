function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber === 0) {
       return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let value = window.prompt("Please choose the value: Rock, Paper or Scissors").toLowerCase();
    if(value === "rock") {
        return `rock`;
    } else if (value === "paper") {
        return `paper`;
    } else if (value === "scissors") {
        return `scissors`;
    } else {
        return "Invalid value. Please enter the correct one!";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        return "It's a tie!";
    } else if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        computerScore++;
        return "Computer wins!";
    } else {
        humanScore++;
        return "You win!";
    }
}

for (let i = 0; i < 5; i++) {
    let computerSelection = getComputerChoice();
    let humanSelection = getHumanChoice();

    console.log(playRound(computerSelection, humanSelection));
}

console.log(`Human Score:${humanScore}`);
console.log(`Computer Score:${computerScore}`);
