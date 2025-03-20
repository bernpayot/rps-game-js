const images = ['./images/rock.jpg', './images/paper.jpg', './images/scissor.jpg'];
let currentImageIndex = 0;

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.querySelectorAll('img').forEach(img => {
        img.src = images[currentImageIndex];
    });
}

function startImageLoop() {
    currentImageIndex = 0;
    changeImage();
    imageLoopInterval = setInterval(changeImage, 300);
}

function stopImageLoop() {
    clearInterval(imageLoopInterval);
}

startImageLoop();

humanChoice = '';
computerChoice = '';

const rock = document.querySelector("#one");
rock.addEventListener("click", () => {
    humanChoice = "Rock";
    stopImageLoop();
    computerChoice = getComputerChoice();
    updateChoiceImage();
    playRound(humanChoice, computerChoice);
});

const paper = document.querySelector("#two");
paper.addEventListener("click", () => {
    humanChoice = "Paper";
    stopImageLoop();
    computerChoice = getComputerChoice();
    updateChoiceImage();
    playRound(humanChoice, computerChoice);
});

const scissors = document.querySelector("#three");
scissors.addEventListener("click", () => {
    humanChoice = "Scissors";
    stopImageLoop();
    computerChoice = getComputerChoice();
    updateChoiceImage();
    playRound(humanChoice, computerChoice);
});

function getComputerChoice() {
    computer = Math.floor(Math.random() * 3) + 1;

    if (computer === 3) {
        computerChoice = "Scissors";
        return computerChoice;
    } else if (computer === 2) {
        computerChoice = "Paper";
        return computerChoice;
    } else {
        computerChoice = "Rock";
        return computerChoice;
    }
}

function updateChoiceImage() {
    const humanChoiceImage = document.querySelector(".left-img img");
    const computerChoiceImage = document.querySelector(".right-img img");
    if (humanChoice === "Rock") {
      humanChoiceImage.src = "./images/rock.jpg";
    } else if (humanChoice === "Paper") {
      humanChoiceImage.src = "./images/paper.jpg";
    } else if (humanChoice === "Scissors") {
      humanChoiceImage.src = "./images/scissor.jpg";
    }

    if (computerChoice === "Rock") {
        computerChoiceImage.src = "./images/rock.jpg";
      } else if (computerChoice === "Paper") {
        computerChoiceImage.src = "./images/paper.jpg";
      } else if (computerChoice === "Scissors") {
        computerChoiceImage.src = "./images/scissor.jpg";
      }
}

const buttons = document.querySelectorAll(".choice-btn");
const messageContainer = document.querySelector("#message");
let originalText = messageContainer.textContent;

function resetText() {
    messageContainer.textContent = originalText;
}

humanScore = 0;
computerScore = 0;
maxScore = 5;

function gameLoop() {
    if (humanScore === maxScore || computerScore === maxScore) {
        const baseMessage = humanScore === maxScore 
            ? "You won against the computer!"
            : "You lost against the computer.";

        buttons.forEach(button => button.disabled = true);

        let secondsLeft = 5;
        
        messageContainer.textContent = `${baseMessage} Resetting in ${secondsLeft} seconds.`;

        const countdownInterval = setInterval(() => {
            secondsLeft--;
            
            if (secondsLeft > 0) {
                messageContainer.textContent = `${baseMessage} Resetting in ${secondsLeft} seconds.`;
            } else {
                clearInterval(countdownInterval);
                resetGameState();
                startImageLoop();
            }
        }, 1000);
    }
}

function resetGameState() {
    humanScore = 0;
    computerScore = 0;

    document.querySelector("#score").textContent = "0-0";
    messageContainer.textContent = originalText;

    buttons.forEach(button => {
        button.disabled = false;
    });
  }

function playRound(humanChoice, computerChoice) {
    const score = document.querySelector("#score");
    if (humanChoice === computerChoice) {
        messageContainer.textContent = "You both picked the same hand!";
        return;
    }

    if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Scissors" && computerChoice === "Paper") ||
        (humanChoice === "Paper" && computerChoice === "Rock")
    ) {
        humanScore++;
        messageContainer.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++
        messageContainer.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    score.textContent = `${humanScore}-${computerScore}`;
    gameLoop();
}


