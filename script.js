// // console.log("hello world");

// let options = ["rock", "paper", "scissors"];

// function getComputerChoice() {
//   let result = options[Math.floor(Math.random() * options.length)];
//   return result;
// }

// // console.log(getComputerChoice());

// function getHumanChoice() {
//   let choice = prompt("Rock, Paper, or Scissors?").toLowerCase();

//   while (!options.includes(choice)) {
//     choice = prompt(
//       "Invalid choice. Please enter Rock, Paper, or Scissors:"
//     ).toLowerCase();
//   }

//   return choice;
// }

// // console.log(getHumanChoice());

// let humanScore = 0;

// let computerScore = 0;

// function playRound(humanChoice, computerChoice) {
//   humanChoice = humanChoice.toLowerCase();
//   if (
//     (humanChoice == "rock" && computerChoice == "paper") ||
//     (humanChoice == "paper" && computerChoice == "scissors") ||
//     (humanChoice == "scissors" && computerChoice == "rock")
//   ) {
//     computerScore++;
//   } else if (
//     (humanChoice == "paper" && computerChoice == "rock") ||
//     (humanChoice == "scissors" && computerChoice == "paper") ||
//     (humanChoice == "rock" && computerChoice == "scissors")
//   ) {
//     humanScore++;
//   }
// }

// // const humanSelection = getHumanChoice();
// // const computerSelection = getComputerChoice();

// // playRound(humanSelection, computerSelection);

// // if (humanScore > computerScore) {
// //     console.log(`you win! ${humanSelection} beats ${computerSelection}`);
// //   } else if (humanScore < computerScore) {
// //     console.log(`you lose! ${computerSelection} beats ${humanSelection}`);
// //   } else if (humanScore == computerScore) {
// //     console.log("It's a Tie, Play again");
// //     playRound(humanSelection, computerSelection);
// //   }

// for (let round = 1; round <= 5; round++) {
//   console.log(`Round ${round}`);
//   const humanSelection = getHumanChoice();
//   const computerSelection = getComputerChoice();

//   playRound(humanSelection, computerSelection);
//   console.log(`Score: You - ${humanScore}, Computer - ${computerScore}`);
// }

// console.log("Game Over!");

// if (humanScore > computerScore) {
//   console.log("🎉 Congratulations! You won the game!");
// } else if (humanScore < computerScore) {
//   console.log("😞 You lost the game. Better luck next time!");
// } else {
//   console.log("It's a draw! Try again.");
// }

const game = document.getElementById("game-container");

let container = document.createElement("div");
container.className = "container";
game.appendChild(container);

let rock = document.createElement("button");
rock.className = "rock";
rock.textContent = "Rock";
container.appendChild(rock);

let paper = document.createElement("button");
paper.className = "paper";
paper.textContent = "Paper";
container.appendChild(paper);

let scissors = document.createElement("button");
scissors.className = "scissors";
scissors.textContent = "Scissors";
container.appendChild(scissors);

let humanScore = 0;

let computerScore = 0;
let drawScore = 0;

let humanScoreDisplay = document.createElement("div");
humanScoreDisplay.className = "score";
humanScoreDisplay.textContent = `Your Score: ${humanScore}`;
container.appendChild(humanScoreDisplay);

let computerScoreDisplay = document.createElement("div");
computerScoreDisplay.className = "score";
computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
container.appendChild(computerScoreDisplay);

let draw = document.createElement("div");
draw.className = "draw";
draw.textContent = `Draw Score: ${drawScore}`;
container.appendChild(draw);

rock.addEventListener("click", function () {
  playRound("rock", getComputerChoice());
  updateScoreDisplay();
});

paper.addEventListener("click", function () {
  playRound("paper", getComputerChoice());
  updateScoreDisplay();
});

scissors.addEventListener("click", function () {
  playRound("scissors", getComputerChoice());
  updateScoreDisplay();
});

let result = document.createElement("div");
result.className = "result";
container.appendChild(result);

function updateScoreDisplay() {
  humanScoreDisplay.textContent = `Your Score: ${humanScore}`;
  computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
  draw.textContent = `Draw Score: ${drawScore}`;

  if (humanScore >= 5) {
    result.textContent = "🎉 You win the game!";
    disableButtons();
  } else if (computerScore >= 5) {
    result.textContent = "😞 You lose the game!";
    disableButtons();
  }
}

function disableButtons() {
  document.querySelectorAll("button").forEach((button) => {
    button.disabled = true;
  });
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice == computerChoice) {
    drawScore++;
  } else if (
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

let options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let result = options[Math.floor(Math.random() * options.length)];
  return result;
}
