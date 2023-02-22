const moves = ["rock", "paper", "scissors"];
function getComputerChoice() {
  let computerChoice = moves[Math.floor(Math.random() * moves.length)];
  return computerChoice;
}

let playerScore = 0;
let computerScore = 0;
function round(playerSelection, computerSelection) {
  playerSelection = playerSelection.toUpperCase();
  computerSelection = computerSelection.toUpperCase();

  if (
    (playerSelection === "ROCK" && computerSelection === "ROCK") ||
    (playerSelection === "PAPER" && computerSelection === "PAPER") ||
    (playerSelection === "SCISSORS" && computerSelection === "SCISSORS")
  ) {
    return "It's a tie!";
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    playerScore++;
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    playerScore++;
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    playerScore++;
    return "You Win! Scissors beats Paper";
  } else if (computerSelection === "ROCK" && playerSelection === "SCISSORS") {
    computerScore++;
    return "You Lose! Rock beats Scissors";
  } else if (computerSelection === "PAPER" && playerSelection === "ROCK") {
    computerScore++;
    return "You Lose! Paper beats Rock";
  } else if (computerSelection === "SCISSORS" && playerSelection === "PAPER") {
    computerScore++;
    return "You Lose! Scissors beats Paper";
  } else {
    return "Error";
  }
}
