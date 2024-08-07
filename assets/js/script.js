//Variables to track the game
let tries = 0;
let playerWins = 0;
let computerWins = 0;
let ties = 0;

//transitions from start page to game page
function startGame() {
    document.getElementById('startPage').style.display = 'none';
    document.getElementById('gamePage').style.display = 'flex';
    resetGame();
}

//to reset the game
function resetGame() {
    tries = 0;
    playerWins = 0;
    computerWins = 0;
    ties = 0;
    document.getElementById('score').innerText = `Tries: 0 | Player Wins: 0 | Computer Wins: 0`;
    document.getElementById('finalResult').innerText = '';
    document.getElementById('result').innerText = '';
    
}
//funstion to play the game
function playGame(playerChoice) {
    if (tries >= 5) {
        return;
    }

    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const computerChoice = choices[Math.floor(Math.random() * 5)];

    let result = '';
//determines the result
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
        ties++;
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
    document.getElementById('computerChoiceText').innerText = computerChoice;
    
    
//checks if the game should end 
    if (tries >= 5) {
        if (playerWins > computerWins) {
            document.getElementById('finalMessage').innerText = "Congratulations! You won the game!";
        } else if (computerWins > playerWins) {
            document.getElementById('finalMessage').innerText = "Sorry, you lost the game!";
        } else {
            document.getElementById('finalMessage').innerText = "It's a draw!";
        }

        document.getElementById('finalPlayerWins').innerText = `Player Wins: ${playerWins}`;
        document.getElementById('finalComputerWins').innerText = `Computer Wins: ${computerWins}`;
        document.getElementById('finalTies').innerText = `Ties: ${ties}`;

        document.getElementById('gamePage').style.display = 'none';
        document.getElementById('restartPage').style.display = 'flex';
    }
}
//takes you back to the start page
function restartGame() {
    document.getElementById('restartPage').style.display = 'none';
    document.getElementById('startPage').style.display = 'flex';
}
//opens rules modal
function openRules() {
    document.getElementById('rulesModal').style.display = 'block';
}
//closes rules
function closeRules() {
    document.getElementById('rulesModal').style.display = 'none';
}
//closes the modal if user clicks on window
window.onclick = function(event) {
    const modal = document.getElementById('rulesModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}