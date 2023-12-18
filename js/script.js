function getComputerChoice() {
    choices = ["Rock", "Paper", "Scissors"]
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function getRoundResult(playerSelection, computerSelection) {
    if (playerSelection == computerSelection)
        return `It's a Draw! The computer also picked ${playerSelection}.`;
    const winningCombinations = new Set([["Rock", "Scissors"].toString(), 
    ["Paper", "Rock"].toString(), ["Scissors", "Paper"].toString()]);
    return (winningCombinations.has([playerSelection, computerSelection].toString())) 
        ? `You Win! ${playerSelection} beats ${computerSelection}.`
        : `You Lose! ${computerSelection} beats ${playerSelection}.`;
}

function playOneRound(playerSelection) {
    computerSelection = getComputerChoice();
    result = getRoundResult(playerSelection, computerSelection);
    if (result.startsWith("You Win!")) {
        playerWins += 1;
    } else if (result.startsWith("You Lose!")) {
        computerWins += 1;
    }
    resultDiv.textContent = result;
    if (playerWins == 5) {
        playerWins = 0;
        computerWins = 0;
        winnerDiv.textContent = "Player";
        resultDiv.textContent += " Player Won!";
    } else if (computerWins == 5) {
        playerWins = 0;
        computerWins = 0;
        winnerDiv.textContent = "Computer";
        resultDiv.textContent += " Computer Won!";
    }
}

function setScores() {
    playerScoreDiv.textContent = playerWins;
    computerScoreDiv.textContent = computerWins;
}

let playerWins = 0;
let computerWins = 0;

const rockButton = document.querySelector('.rockButton');
const paperButton = document.querySelector('.paperButton');
const scissorsButton = document.querySelector('.scissorsButton');
const resultDiv = document.querySelector('.resultDiv');

rockButton.addEventListener('click', (e) => {
    playOneRound('Rock');
    setScores();
});
paperButton.addEventListener('click', (e) => {
    playOneRound('Paper');
    setScores();
});
scissorsButton.addEventListener('click', (e) => {
    playOneRound('Scissors');
    setScores();
});

playerScoreDiv = document.querySelector('#PlayerScore');
computerScoreDiv = document.querySelector('#ComputerScore');
winnerDiv = document.querySelector('#Winner');