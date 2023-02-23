const moves = ["rock", "paper", "scissors"];
function getComputerChoice() {
  let computerChoice = moves[Math.floor(Math.random() * moves.length)];
  return computerChoice;
}

const choices = document.querySelectorAll(".card");
// console.log(choices[0]);

let ps = document.querySelector(".player-points");
console.log(ps.textContent);

let cs = document.querySelector(".cpu-points");
console.log(cs.textContent);

const result = document.querySelector(".result .winner");

const button = document.querySelector("button");

button.addEventListener("click", reset);

function reset() {
  playerScore = 0;
  computerScore = 0;
  ps.textContent = 0;
  cs.textContent = 0;
  result.style.color = "transparent";
}

function checkWinner() {
  if (computerScore === 5) {
    result.textContent = "You Lose...";
    result.style.color = "red";
  } else if (playerScore === 5) {
    result.textContent = "You Win! Congrats";
    result.style.color = "red";
  }
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
    ps.textContent = playerScore;
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    playerScore++;
    ps.textContent = playerScore;
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    playerScore++;
    ps.textContent = playerScore;
  } else if (computerSelection === "ROCK" && playerSelection === "SCISSORS") {
    computerScore++;
    cs.textContent = computerScore;
  } else if (computerSelection === "PAPER" && playerSelection === "ROCK") {
    computerScore++;
    cs.textContent = computerScore;
  } else if (computerSelection === "SCISSORS" && playerSelection === "PAPER") {
    computerScore++;
    cs.textContent = computerScore;
  } else {
    return "Error";
  }
  checkWinner();
}

const rock = choices[0].addEventListener("click", function () {
  console.log(round("ROCK", getComputerChoice()));
});

const paper = choices[1].addEventListener("click", function () {
  console.log(round("PAPER", getComputerChoice()));
});

const scissor = choices[2].addEventListener("click", function () {
  console.log(round("SCISSORS", getComputerChoice()));
});
