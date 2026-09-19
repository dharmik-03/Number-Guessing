const Max_No = 100;
const Min_No = 1;

let targetNumber =
    Math.floor(Math.random() * (Max_No - Min_No + 1)) + Min_No;

let userGuess = [];
let attemp = 0
let gameOver = false

let Score = 20

const guessInput = document.getElementById("userNum");
const SubmitBTN = document.getElementById("userBTN");
const feedback = document.getElementById("feedBack");
const CorrectNumber = document.getElementById("correctNumber");
const Reset = document.getElementById("reset");
const attemps = document.getElementById("attemp")

const ScoreID = document.getElementById("score")



SubmitBTN.addEventListener("click", handleGuess);

guessInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        handleGuess();
    }
});

function feedbackFunction(message) {
    feedback.textContent = message;
}

function handleGuess() {


    if (gameOver) {
        feedbackFunction("Game Over,Please reset the game.");
        return;
    }

    const inputGues = guessInput.value.trim();
    const guess = Number(inputGues);



    if (inputGues === "") {
        feedbackFunction("Please enter a number");
        return;
    }

    if (!Number.isFinite(guess)) {
        feedbackFunction("Please enter a valid number");
        return;
    }

    if (guess < Min_No || guess > Max_No) {
        feedbackFunction(
            `Please enter a number between ${Min_No} and ${Max_No}.`
        );
        return;
    }
    if (attemp >= 20) {
        gameOver = true;

        feedbackFunction(
            `Maximum attempts reached,The correct number was ${targetNumber}.`
        );

        CorrectNumber.textContent = targetNumber;
        ScoreID.textContent = `Score: ${Score}`;

        return;
    }

    userGuess.push(guess);
    attemp++
    Score--

    attemps.textContent = attemp;


    if (guess === targetNumber) {
        feedbackFunction(`You guessed the correct number: ${targetNumber} , Score is ${Score}`);

        CorrectNumber.textContent = targetNumber;


    } else if (guess < targetNumber) {
        feedbackFunction("Incorrect Try a higher number.");
    } else if (guess > targetNumber) {
        feedbackFunction("Incorrect Try a lower number.");
    } else {
        feedbackFunction("")
    }

    guessInput.value = "";
}

Reset.addEventListener("click", resetGame);

function resetGame() {
    gameOver = false

    attemp = 0

    targetNumber =
        Math.floor(Math.random() * (Max_No - Min_No + 1)) + Min_No;



    userGuess = [];

    feedback.textContent = "";
    CorrectNumber.textContent = "";

    guessInput.value = "";



    guessInput.focus();
}



