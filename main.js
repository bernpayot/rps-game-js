let humanScore = 0;
let computerScore = 0;
const maxScore = 5;

function getComputerChoice() {
    computer = Math.floor(Math.random() * 3) + 1;

    if (computer === 3) {
        return computerChoice = "scissors";
    } else if (computer === 2) {
        return computerChoice = "rock";
    } else {
        return computerChoice = "paper";
    }
}

function getHumanChoice() {
    choice = parseInt(prompt("What do you want to pick? Choose the number from below:\n1: Paper\n2: Rock\n3: Scissors"));

    if (choice === 3) {
        return humanChoice = "scissors";
    } else if (choice === 2) {
        return humanChoice = "rock";
    } else if (choice === 1) {
        return humanChoice = "paper";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "You win, Rock beats scissors!";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "You win, Scissors beats paper!";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "You win! Paper beats rock!";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return "You lose! Paper beats rock.";

    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return "You lose! Scissors beats paper.";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        return "You lose! Rock beats scissors.";
    } else if (humanChoice === "rock" && computerChoice === "rock") {
        return "You both picked the same hand!";
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        return "You both picked the same hand!";
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        return "You both picked the same hand!";
    } else {
        return "Wrong number! Try again.";
    }   
}


function playGame() {
    while (humanScore < maxScore || computerScore < maxScore) {
        const humanSelection = getHumanChoice();
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
