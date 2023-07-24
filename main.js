function playRound(playerSelection, computerSelection) {
  switch(playerSelection.toLowerCase()) {
      case computerSelection:
        return 'its a draw';
        break;
      case 'rock':
        if (computerSelection == 'paper') return "computer won! paper beats rock";
        else if (computerSelection == 'scissors') return "player won! rock beats scissors";
        break;
      case 'paper':
        if (computerSelection == 'scissors') return "computer won! scissors beats paper";
        else if (computerSelection == 'rock') return "player won! paper beats rock";
        break;
      case 'scissors':
        if (computerSelection == 'rock') return "computer won! rock beats scissors";
        else if (computerSelection == 'paper') return "player won! scissors beats paper";
        break;
      default:
        return 'invalid move'
  }
}

function getComputerChoice() {
  switch (Math.floor(Math.random() * 3)) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors'
  }
}


