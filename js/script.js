function getComputerChoice() {
    choices = ["Rock", "Paper", "Scissors"]
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() 
                        + playerSelection.slice(1);
    if (playerSelection == computerSelection) {
        return `It's a Draw! The computer also picked ${playerSelection} `
    } else {
        switch (playerSelection) {
            case "Rock":
                if (computerSelection == "Scissors") {
                    return "You Win! Rock beats Scissors";
                } else {
                    return "You Lose! Paper beats Rock";
                }
            case "Paper":
                if (computerSelection == "Rock") {
                    return "You Win! Paper beats Rock";
                } else {
                    return "You Lose! Scissors beats Paper";
                }
            case "Scissors":
                if (computerSelection == "Paper") {
                    return "You Win! Scissors beats Paper";
                } else {
                    return "You Lose! Rock beats Scissors";
                }
            default:
                throw new Error("Non-valid player selection!");
        }
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    let result;

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, paper, scissors?");
        computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        if (result.startsWith("You Win!")) {
            playerWins += 1;
        } else if (result.startsWith("You Lose!")) {
            computerWins += 1;
        }
        console.log(result);
    }

    if (playerWins > computerWins) {
        console.log(`You win the game! You won ${playerWins} times, while the computer only won ${computerWins} times.`);
    } else if (computerWins > playerWins) {
        console.log(`You lose the game! You won ${playerWins} times, while the computer won ${computerWins} times.`);
    } else {
        console.log(`You drew the game! You and the computer both won ${playerWins} times.`);
    }
}

game()