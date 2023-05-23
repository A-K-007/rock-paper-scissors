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