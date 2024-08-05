function playGame(playerChoice) {
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
    } else {
        result = `You lose! ${computerChoice} beats ${playerChoice}`;
    }
    
    document.getElementById('result').innerText = result;
}