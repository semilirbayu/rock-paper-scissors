// random choice of rock, paper, or scissor without using array and using Math.random()
function getComputerChoice() {
    const randomNumber = Math.random() * 3;

    if (randomNumber < 1) {
        return 'rock';
    } else if (randomNumber < 2) {
        return 'paper';
    } else {
        return 'scissor';
    }
}

// get human choice from prompt
function getHumanChoice() {
    const humanChoice = prompt('Enter your choice (1 = rock, 2 = paper, 3 = scissor): ');
    if (humanChoice === '1') {
        return 'rock';
    } else if (humanChoice === '2') {
        return 'paper';
    } else if (humanChoice === '3') {
        return 'scissor';
    } else {
        return null;
    }
}

// initialize scores
let humanScore = 0;
let computerScore = 0;

// play the round and update scores
function playRound(humanChoice, computerChoice) {
    // handle tie condition
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}`);
        console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
    }
    // handle human win condition
    else if (
        (humanChoice === 'rock' && computerChoice === 'scissor') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissor' && computerChoice === 'paper')
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
    }
    // handle computer win condition
    else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
    }
}

// play the game for 5 rounds
function playGame() {
    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}`);

        // get valid human choice
        let humanChoice = getHumanChoice();
        while (humanChoice === null) {
            console.log('Invalid choice. Please try again.');
            humanChoice = getHumanChoice();
        }

        // now play the round
        playRound(humanChoice, getComputerChoice());
    }
    // determine the overall winner
    if (humanScore > computerScore) {
        console.log(`You win the game! Final Score: You ${humanScore} - Computer ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lose the game! Final Score: You ${humanScore} - Computer ${computerScore}`);
    } else {
        console.log(`The game is a tie! Final Score: You ${humanScore} - Computer ${computerScore}`);
    }
}
playGame();
