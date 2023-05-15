function getUserChoice(input) {
    let userChoice = prompt("Enter Your Choice: (Rock,Paper or Scissors)");
    userChoice = userChoice.toLowerCase();
    if(userChoice === 'rock'){
        return 'Rock';
    }
    else if(userChoice == 'paper'){
        return 'Paper';
    }
    else if(userChoice == 'Scissors'){
        return 'Scissors';
    }
    else{
        return 'Invalid choice';
    }
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3);
    // console.log(computerChoice);
    if(computerChoice === 0)
    {
        return 'Rock';
    }
    else if(computerChoice === 1)
    {
        return 'Paper';
    }
    else
    {
        return 'Scissors';
    }
}

function compareChoices(userChoice,computerChoice) {
    if(userChoice == computerChoice){
        return "Tie";
    }
    else if(userChoice == 'Rock' && computerChoice == 'Paper'){
        return 'Computer Win';
    }
    else if(userChoice == 'Paper' && computerChoice == 'Scissors'){
        return 'Computer Win';
    }
    else if(userChoice == 'Scissors' && computerChoice == 'Rock'){
        return 'Computer Win';
    }
    else{
        return 'User Wins';
    }
}
getUserChoice();
getComputerChoice();
compareChoices();