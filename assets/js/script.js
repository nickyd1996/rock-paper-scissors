let tries = 0;
let playerWins = 0;
let computerWins = 0;

function startGame() {
    document.getElementById('startPage').style.display = 'none';
    document.getElementById('gamePage').style.display = 'flex';
    resetGame();
}

function resetGame() {
    tries = 0;
    playerWins = 0;
    computerWins = 0;
    document.getElementById('score').innerText = `Tries: 0 | Player Wins: 0 | Computer Wins: 0`;
    document.getElementById('finalResult').innerText = '';
    document.getElementById('result').innerText = '';
}

function playGame(playerChoice) {
    if (tries >= 5) {
        return;
    }

    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const computerChoice = choices[Math.floor(Math.random() * 5)];

    let result = '';

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
        (playerChoice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
        (playerChoice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
        (playerChoice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper')) ||
        (playerChoice === 'spock' && (computerChoice === 'scissors' || computerChoice === 'rock'))
    ) {
        result = `You win! ${playerChoice} beats ${computerChoice}`;
        playerWins++;
    } else {
        result = `You lose! ${computerChoice} beats ${playerChoice}`;
        computerWins++;
    }

    tries++;
    document.getElementById('result').innerText = result;
    document.getElementById('score').innerText = `Tries: ${tries} | Player Wins: ${playerWins} | Computer Wins: ${computerWins}`;

    if (tries >= 5) {
            if (playerWins > computerWins) {
                document.getElementById('finalMessage').innerText = "Congratulations! You won the game!";
            } else if (computerWins > playerWins) {
                document.getElementById('finalMessage').innerText = "Sorry, you lost the game!";
            } else {
                document.getElementById('finalMessage').innerText = "It's a draw!";
            }
            document.getElementById('gamePage').style.display = 'none';
            document.getElementById('restartPage').style.display = 'flex';
        }
    
}
function restartGame() {
    document.getElementById('restartPage').style.display = 'none';
    document.getElementById('startPage').style.display = 'flex';
}