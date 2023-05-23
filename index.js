getUserChoice();

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

getComputerChoice();

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3);
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