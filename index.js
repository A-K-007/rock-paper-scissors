let userChoice = getUserChoice();

function getUserChoice() {
  let userChoice = prompt("Enter Your Choice: (Rock,Paper or Scissors)");
  userChoice = userChoice.toLowerCase();
  if (userChoice === "rock") {
    return "Rock";
  } else if (userChoice == "paper") {
    return "Paper";
  } else if (userChoice == "scissors") {
    return "Scissors";
  } else {
    alert("Invalid choice");
    getUserChoice();
  }
}

let computerChoice = getComputerChoice();

function getComputerChoice() {
  let Choice = Math.floor(Math.random() * 3);
  let list = ["Rock", "Paper", "Scissors"];
  return list[Choice];
}

let result = compareChoices(userChoice, computerChoice);

function compareChoices(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "Tie";
  } else if (userChoice == "Rock" && computerChoice == "Paper") {
    return "Computer Win";
  } else if (userChoice == "Paper" && computerChoice == "Scissors") {
    return "Computer Win";
  } else if (userChoice == "Scissors" && computerChoice == "Rock") {
    return "Computer Win";
  } else {
    return "User Wins";
  }
}
alert("User choice: " + userChoice);
alert("Computer choice: " + computerChoice);
alert("Result: " + result);