let humanScore = 0;
let computerScore = 0;
const maxScore = 5;

function getComputerChoice() {
    computer = Math.floor(Math.random() * 3) + 1;

    if (computer === 3) {
        return "scissors";
    } else if (computer === 2) {
        return "rock";
    } else {
        return "paper";
    }
}

function getHumanChoice() {
    choice = parseInt(prompt("What do you want to pick? Choose the number from below:\n1: Paper\n2: Rock\n3: Scissors"));

    if (choice === 3) {
        return "scissors";
    } else if (choice === 2) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "You both picked the same hand!";
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        return `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`;
    }
}   


function playGame() {
    while (humanScore < maxScore && computerScore < maxScore) {
        const humanSelection = getHumanChoice();
        if (!humanSelection) {
            console.log("Invalid input. Please choose a valid number.");
            continue;
        }

        const computerSelection = getComputerChoice();

        console.log(playRound(humanSelection, computerSelection));
        console.log("The score is: " + humanScore + " : " + computerScore);

        if (humanScore === 5) {
            console.log("You win!");
            break;
        } else if (computerScore === 5) {
            console.log("You lose.");
            break;
        }
    }
}

playGame();
