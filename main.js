function playRound(playerSelection, computerSelection) {
  switch(playerSelection) {
      case computerSelection:
        return 'its a draw';
        break;
      case 'Rock':
        if (computerSelection == 'Paper') return "Computer won! Paper beats Rock.";
        else if (computerSelection == 'Scissors') return "Player won! Rock beats Scissors.";
        break;
      case 'Paper':
        if (computerSelection == 'Scissors') return "Computer won! Scissors beats Paper.";
        else if (computerSelection == 'Rock') return "Player won! Paper beats Rock.";
        break;
      case 'Scissors':
        if (computerSelection == 'Rock') return "Computer won! Rock beats Scissors.";
        else if (computerSelection == 'Paper') return "Player won! Scissors beats Paper.";
        break;
      default:
        return 'Invalid move!'
  }
}

function getComputerChoice() {
  switch (Math.floor(Math.random() * 3)) {
      case 0:
        return 'Rock';
      case 1:
        return 'Paper';
      case 2:
        return 'Scissors';
  }
}

let playerChoice = null;
let computerChoice = null;
let button = document.querySelector("#buttons");
let display = document.querySelector(".container");
let playerScore = 0;
let computerScore = 0;

button.addEventListener('dblclick', event => {
  event.preventDefault();
});

button.addEventListener('click', event => {
  if (event.target.id != "buttons") {
    playerChoice = event.target.id;
    computerChoice = getComputerChoice();
    display.children['computer'].textContent = `Computer chose ${computerChoice}!`;
    res = playRound(playerChoice, computerChoice);
    res.split(" ")[0] == 'Player' ? playerScore++ : res.split(" ")[0] == 'Computer' ? computerScore++ : 0;
    display.children['result'].textContent = res;
    display.children['score'].firstElementChild.textContent = `Human : ${playerScore}`;
    display.children['score'].lastElementChild.textContent = `Computer : ${computerScore}`;
  }
});