export default class NumberGuessingGame {
  constructor() {
    if (this.isCorrectPage()) {
      this.initializeDOMElements();
      this.initializeGameVariables();
      this.addEventListeners();
      this.startNewGame();
    }
  }

  isCorrectPage() {
    return window.location.pathname === "/src/page/number-guess.html";
  }

  initializeDOMElements() {
    this.statusElement = document.getElementById("number-guess__status");
    this.attemptsElement = document.getElementById("attempt-left__attempts");
    this.inputElement = document.getElementById("guessing_input");
    this.buttonElement = document.getElementById("guessing-button");
    this.messageElement = document.getElementById("number-guess__messsage");
    this.historyContainerElement = document.getElementById("history__container");
  }

  initializeGameVariables() {
    this.secretNumber = 50;
    this.maxAttempts = 5;
    this.attempts = this.maxAttempts;
    this.guessHistory = [];
    this.gameOver = false;
  }

  addEventListeners() {
    this.buttonElement.addEventListener("click", () => this.handleGuess());
    this.inputElement.addEventListener("keydown", (e) => this.handleEnter(e));
  }

  startNewGame() {
    this.secretNumber = this.generateSecretNumber();
    this.attempts = this.maxAttempts;
    this.guessHistory = [];
    this.gameOver = false;
    this.updateAttemptsDisplay();
    this.resetGameUI();
    console.log("Secret number:", this.secretNumber);
  }

  generateSecretNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  resetGameUI() {
    this.statusElement.textContent = "I'm thinking of a number between 1 and 100...";
    this.inputElement.value = "";
    this.inputElement.focus();
    this.inputElement.disabled = false;
    this.buttonElement.textContent = "Guess";
    this.buttonElement.disabled = false;
    this.messageElement.textContent = "";
    this.historyContainerElement.innerHTML = ""; // Reset history
  }

  handleGuess() {
    if (this.gameOver) {
      this.resetGame();
    } else {
      this.processGuess();
    }
  }

  handleEnter(e) {
    if (e.key === "Enter") {
      this.handleGuess();
    }
  }

  processGuess() {
    const playerGuess = this.getPlayerGuess();

    if (this.isValidGuess(playerGuess)) {
      this.guessHistory.push(playerGuess);
      this.attempts--;
      this.updateAttemptsDisplay();
      this.clearInputField();
      this.checkGuess(playerGuess);
    } else {
      this.showMessage("Please enter a valid number between 1 and 100.", "warning");
    }
  }

  getPlayerGuess() {
    return parseInt(this.inputElement.value);
  }

  isValidGuess(guess) {
    return !isNaN(guess) && guess >= 1 && guess <= 100;
  }

  updateAttemptsDisplay() {
    this.attemptsElement.textContent = this.attempts;
    this.animateElement(this.attemptsElement);
  }

  clearInputField() {
    this.inputElement.value = "";
    this.inputElement.focus();
  }

  checkGuess(playerGuess) {
    if (playerGuess === this.secretNumber) {
      this.endGame(true, `Congratulations! You guessed the secret number ${this.secretNumber}!`);
    } else {
      const hint = playerGuess < this.secretNumber ? "Too low" : "Too high";
      this.showMessage(`${hint}! Try again.`, playerGuess < this.secretNumber ? "low" : "high");
      this.updateHistory();

      if (this.attempts <= 0) {
        this.endGame(false, `Game over! You ran out of attempts. The secret number was ${this.secretNumber}!`);
      }
    }
  }

  updateHistory() {
    this.historyContainerElement.innerHTML = "";

    this.guessHistory.forEach((guess, index) => {
      const guessCircle = this.createHistoryItem(guess, index);
      this.historyContainerElement.appendChild(guessCircle);
    });
  }

  createHistoryItem(guess, index) {
    const guessCircle = document.createElement("div");
    guessCircle.className = "w-[3rem] h-[3rem] font-[Source Sans 3] font-semibold tracking-[0.1rem] flex justify-center items-center rounded-full text-[#ffffff] bg-[#2ed573] number-circle transition-all duration-300 ease-in-out hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:scale-110";
    guessCircle.style.animationDelay = `${index * 0.1}s`;
    guessCircle.textContent = guess;
    this.updateGuessCircleColor(guessCircle, guess);
    guessCircle.title = this.getGuessHint(guess);
    return guessCircle;
  }

  updateGuessCircleColor(guessCircle, guess) {
    if (guess < this.secretNumber) {
      guessCircle.classList.replace("bg-[#2ed573]", "bg-[#1e90ff]");
    } else if (guess > this.secretNumber) {
      guessCircle.classList.replace("bg-[#2ed573]", "bg-[#ff6b6b]");
    }
  }

  getGuessHint(guess) {
    if (guess < this.secretNumber) {
      return "Too low";
    } else if (guess > this.secretNumber) {
      return "Too high";
    } else {
      return "Correct!";
    }
  }

  showMessage(text, type = "normal") {
    this.messageElement.textContent = text;
    this.applyMessageStyle(type);
    this.animateElement(this.messageElement);
  }

  applyMessageStyle(type) {
    const messageStyles = {
      warning: ["text-[#ffa502]"],
      success: ["text-[#2ed573]", "pulse"],
      error: ["text-[#ff4757]"],
      low: ["text-[#1e90ff]"],
      high: ["text-[#ff6b6b]"],
      normal: ["text-[#2f3542]"],
    };

    const styles = messageStyles[type] || messageStyles["normal"];
    this.messageElement.classList.add(...styles);
  }

  animateElement(element) {
    element.classList.add("animate-bounce");
    setTimeout(() => {
      element.classList.remove("animate-bounce");
    }, 500);
  }

  endGame(isWin, message) {
    this.gameOver = true;
    this.inputElement.disabled = true;
    this.showMessage(message, isWin ? "success" : "error");
    this.statusElement.textContent = isWin ? "🎉 You won! 🎉" : "😢 Game over! You ran out of attempts.";
    this.buttonElement.textContent = "Play Again";
    this.buttonElement.classList.add("pulse");
  }

  resetGame() {
    this.buttonElement.classList.remove("pulse");
    this.startNewGame();
  }
}
