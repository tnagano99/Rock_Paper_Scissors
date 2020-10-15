// randomly select move for computer
function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// compare selections and determine the winner
// displays the result of the round on the webpage
function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    let scoreboard = document.querySelector('#result');
    let message;
    let score;

    // create elements if necessary
    if (scoreboard.firstElementChild === null) {
        // initialize paragraph to display round result
        message = document.createElement('p');
        scoreboard.appendChild(message);
        // initialize paragraph to store score
        score = document.createElement('p');
        score.textContent = `You: ${pScore} Computer: ${cScore}`;
        scoreboard.appendChild(score);
    } else {
        message = scoreboard.firstElementChild;
        score = message.nextElementSibling;
    }

    // determines the winner and updates the round result
    if (playerSelection === computerSelection) {
        message.textContent = `Tie. Both players selected ${playerSelection}.`;
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            pScore += 1;
            message.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
        } else {
            cScore += 1;
            message.textContent = `You Lose. ${computerSelection} beats ${playerSelection}.`;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            pScore += 1;
            message.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
        } else {
            cScore += 1;
            message.textContent = `You Lose. ${computerSelection} beats ${playerSelection}.`;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            pScore += 1;
            message.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
        } else {
            cScore += 1;
            message.textContent = `You Lose. ${computerSelection} beats ${playerSelection}.`;
        }
    } else {
            message.textContent = `Not sure how this happened?`;
    }

    // to update the scoreboard
    score.textContent = `You: ${pScore} Computer: ${cScore}`;

    // to display the winner
    if (pScore == 5 || cScore == 5) {
        message.textContent = (pScore == 5) ? "Congratulations! You win!" : "Computer wins. Better luck next time.";
    }
}

// create event listener for all buttons to play Rock, Paper, Scissors
const btns = Array.from(document.querySelectorAll('.move'));
console.log(btns);
btns.forEach(btn => btn.addEventListener("click", function(e) {
    console.log(e); 
    console.log(btn.getAttribute('id'));
    playRound(btn.getAttribute('id'), computerPlay());
}));

// initialize global variables to use in keeping score
let pScore = 0;
let cScore = 0;