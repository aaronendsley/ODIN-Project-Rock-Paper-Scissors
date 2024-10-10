const BUTTONS = Array.from(document.getElementsByTagName("button"));
let humanScore = 0;
let computerScore = 0;

// run through every button on the page and assign the correct Logic to each.
for (let i = 0; i <= BUTTONS.length - 1; i++) {
  if (BUTTONS[i].id !== "reset-button") {
    BUTTONS[i].addEventListener("click", function () {
      choice(BUTTONS[i]);
    });
  } else {
    BUTTONS[i].addEventListener("click", function () {
      reset();
    });
  }
}

function reset() {
  const SCOREBOARD = document.getElementById("score-box");
  SCOREBOARD.children[0].children[0].textContent = "";
  SCOREBOARD.children[1].children[0].textContent = "";
  humanScore = 0;
  computerScore = 0;
  document.getElementById(
    "outcome-feedback"
  ).children[0].firstChild.textContent = "Match Not Started";
}
//pull the choice from the button id and execute games flow based on the choice
function choice(button) {
  const HUMANCHOICE = button.id;
  const COMPUTERCHOICE = getComputerChoice();
  playRound(HUMANCHOICE, COMPUTERCHOICE);
  updateScoreBoard();
}

//update the scoreboard
function updateScoreBoard() {
  const SCOREBOARD = document.getElementById("score-box");
  const HUMANSCORE = SCOREBOARD.children[0].children[0];
  const COMPUTERSCORE = SCOREBOARD.children[1].children[0];
  HUMANSCORE.textContent = humanScore;
  COMPUTERSCORE.textContent = computerScore;
}

//function getComputerChoice

function getComputerChoice() {
  // Get a random number 1 and 3
  let compChoice = Math.floor(Math.random() * 3) + 1;
  // If the computer chooses 1 return "rock"
  if (compChoice === 1) {
    return "rock";
  } else if (compChoice === 2) {
    // if the computer chooses 2 return "paper"
    return "paper";
  } else if (compChoice === 3) {
    return "scissors";
    // if the computer chooses 3 return "scissors"
  }
}

function outcome(compChoice, humanChoice, message, status, player) {
  const OUTCOMEFEEDBACK = document.getElementById("outcome-feedback");
  // capitilize the computer and human choices
  function capitilize(choice) {
    let capitilizedChoice = choice.split("");
    capitilizedChoice[0] = capitilizedChoice[0].toUpperCase();
    capitilizedChoice = capitilizedChoice.join("");
    return capitilizedChoice;
  }
  let human = capitilize(humanChoice);
  let computer = capitilize(compChoice);

  if (message !== "its a tie!" && status !== "tied") {
    if (player) {
      humanScore += 1;
    } else {
      computerScore += 1;
    }
  }
  OUTCOMEFEEDBACK.children[0].firstChild.textContent = `You choose ${human}, the Computer choose ${computer}! 
  ${message} You ${status}!`;
}

function playRound(human, computer) {
  //if computer choice is rock
  if (computer === "rock") {
    if (human === computer) {
      // if user choice is rock
      // its a tie no score added
      outcome(computer, human, "its a tie!", "tied");
    } else if (human === "paper") {
      // if user choice is paper
      // paper beats rock
      outcome(computer, human, "Paper beats Rock!", "Won", true);
    } else if (human === "scissors") {
      //if user choice is scissors
      // rock beats scissors
      outcome(computer, human, "Rock beats Scissors!", "Lost");
    }
    // if computer choice is paper
  } else if (computer === "paper") {
    if (human === computer) {
      // if user choice is paper
      // its a tie no score added
      outcome(computer, human, "its a tie!", "tied");
    } else if (human === "rock") {
      // if user choice is rock
      // paper beats rock
      outcome(computer, human, "Paper beats rock!", "Lost");
    } else if (human === "scissors") {
      //if user choice is scissors
      // scissors beats paper
      outcome(computer, human, "Scissors beats Paper!", "Won", true);
    }
    // if computer choice is scissors
  } else if (computer === "scissors") {
    if (human === computer) {
      //if user choice is scissors
      // its a tie no score add
      outcome(computer, human, "its a tie!", "tied");
    } else if (human === "rock") {
      // if user choice is rock
      // rock beats scissors
      outcome(computer, human, "Rock beats scissors!", "Won", true);
    } else if (human === "paper") {
      // if user choice is paper
      // scissors beats paper
      outcome(computer, human, "Scissors beats paper!", "Lost");
    }
  }
}
