let player1Choice = '';
let player2Choice = '';
let player1Score = 0;
let player2Score = 0;

function makeChoice(choice, player) {
    if (player === 1) {
        player1Choice = choice;
    } else if (player === 2) {
        player2Choice = choice;
    }

    if (player1Choice && player2Choice) {
        determineWinner();
    }
}

function determineWinner() {
    if (player1Choice === player2Choice) {
        displayResult("It's a draw!");
    } else if (
        (player1Choice === 'rock' && player2Choice === 'scissors') ||
        (player1Choice === 'paper' && player2Choice === 'rock') ||
        (player1Choice === 'scissors' && player2Choice === 'paper')
    ) {
        player1Score++;
        displayResult('Player 1 wins!');
    } else {
        player2Score++;
        displayResult('Player 2 wins!');
    }
    document.getElementById('player1-score').textContent = player1Score;
    document.getElementById('player2-score').textContent = player2Score;
}

function displayResult(message) {
    document.getElementById('result-text').textContent = message;
}