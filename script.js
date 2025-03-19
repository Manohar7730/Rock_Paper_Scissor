// console.log("hello world");

let options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let result = options[Math.floor(Math.random() * options.length)];
  return result;
}

// console.log(getComputerChoice());

function getHumanChoice() {
  let choice = prompt("Rock, Paper, or Scissors?").toLowerCase();

  while (!options.includes(choice)) {
    choice = prompt(
      "Invalid choice. Please enter Rock, Paper, or Scissors:"
    ).toLowerCase();
  }

  return choice;
}

// console.log(getHumanChoice());

let humanScore = 0;

let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "rock")
  ) {
    computerScore++;
  } else if (
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper") ||
    (humanChoice == "rock" && computerChoice == "scissors")
  ) {
    humanScore++;
  }
}

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);

// if (humanScore > computerScore) {
//     console.log(`you win! ${humanSelection} beats ${computerSelection}`);
//   } else if (humanScore < computerScore) {
//     console.log(`you lose! ${computerSelection} beats ${humanSelection}`);
//   } else if (humanScore == computerScore) {
//     console.log("It's a Tie, Play again");
//     playRound(humanSelection, computerSelection);
//   }

for (let round = 1; round <= 5; round++) {
  console.log(`Round ${round}`);
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);
  console.log(`Score: You - ${humanScore}, Computer - ${computerScore}`);
}

console.log("Game Over!");

if (humanScore > computerScore) {
  console.log("🎉 Congratulations! You won the game!");
} else if (humanScore < computerScore) {
  console.log("😞 You lost the game. Better luck next time!");
} else {
  console.log("It's a draw! Try again.");
}
