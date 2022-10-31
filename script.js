function getComputerChoice() {
    idk = Math.floor(Math.random() * 3);
    if (idk === 0) {
        return "Rock";
    } else if (idk === 1) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

// console.log(getComputerChoice()); <-- First func test, work
let wins = 0;
let losses = 0;           
let draw = 0;

function playGame(playerSelection, computerSelection) {
    cpu = computerSelection;
    player = playerSelection;
    if (cpu === "Rock" && player == "Rock") {
        draw++;
        return "It's a draw! Rock and Rock!"
    } else if (cpu === "Paper" && player == "Paper") {
        draw++;
        return "It's a draw! Paper and Paper!"
    } else if (cpu === "Scissors" && player === "Scissors") {
        draw++;
        return "It's a draw! Scissors and Scissors!"
    } else if (cpu === "Rock" && player === "Paper") {
        wins++;
        return "You Won! Paper Beats Rock!"
    } else if (cpu === "Rock" && player === "Scissors") {
        losses++;
        return "You lost! Rock beats Scissors"
    } else if (cpu === "Paper" && player === "Scissors") {
        wins++;
        return "You Won! Scissors beat Paper!" 
    } else if (cpu === "Scissors" && player === "Paper") {
        losses++;
        return "You Lost! Paper losses to Scissors!"
    } else if (cpu === "Scissors" && player === "Rock") {
        wins++;
        return "You Won! Rock beats Scissors!" 
    } else if (cpu === "Paper" && player === "Rock") {
        losses++;
        return "You lost! Rock losses to Paper!"
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        player = prompt("Rock Paper Scissors?");
        cpu = getComputerChoice();
        console.log(playGame(player,cpu));
    }
    console.log(`Wins:${wins}  Losses:${losses}  Draws:${draw}`);
}
game()