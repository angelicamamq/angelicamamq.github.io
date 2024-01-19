const words = ["pendejo", "tequiero", "menso", "dramatico", "chismoso", "orgulloso"];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let guessedWord = Array(selectedWord.length).fill("_");
let attemptsLeft = 7;
let gameComplete = false;

function updateDisplay() {
    document.getElementById("word-display").textContent = guessedWord.join(" ");
    document.getElementById("attempts").textContent = attemptsLeft;
}

function makeGuess() {
  const guessInput = document.getElementById("guess-input");
  const guess = guessInput.value.toLowerCase();

  if (guess.length !== 1 || !/[a-z]/.test(guess) || gameComplete) {
      return;
  }

  if (selectedWord.includes(guess)) {
      for (let i = 0; i < selectedWord.length; i++) {
          if (selectedWord[i] === guess) {
              guessedWord[i] = guess;
          }
      }
  } else {
      attemptsLeft--;
  }

  guessInput.value = "";
  updateDisplay();

  if (guessedWord.join("") === selectedWord) {
      document.getElementById("message").textContent = "¡Felicidades! Has adivinado la palabra.";
      gameComplete = true;
      document.getElementById("next-button").style.display = "block";
      disableInput();
  } else if (attemptsLeft <= 0) {
      document.getElementById("message").textContent = "¡Se acabaron los intentos! La palabra era: " + selectedWord;
      gameComplete = true;
      disableInput();
      document.getElementById("restart-button").style.display = "block"; 
  } else {
      document.getElementById("next-button").style.display = "none";
      document.getElementById("restart-button").style.display = "none"; 
  }
}

function disableInput() {
    document.getElementById("guess-input").disabled = true;
    document.querySelector("button").disabled = true;
}

function goToNextPage() {
    window.location.href = "segundo.html";
}

function restartGame() {
   
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedWord = Array(selectedWord.length).fill("_");
    attemptsLeft = 7;
    gameComplete = false;

    document.getElementById("message").textContent = "";
    document.getElementById("next-button").style.display = "none";
    document.getElementById("restart-button").style.display = "none";
    document.getElementById("guess-input").disabled = false;
    document.querySelector("button").disabled = false;

    updateDisplay();
}

document.addEventListener("DOMContentLoaded", () => {
    updateDisplay();
});
