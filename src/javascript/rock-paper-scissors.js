export default class RockPaperScissorsGame {
  // Constructor - inisialisasi awal saat class dibuat
  constructor() {
    if (this.isCorrectPage()) {
      this.initializeDOMElements(); // Mengambil elemen-elemen DOM yang dibutuhkan
      this.initializeGameVariables(); // Menyiapkan variabel game
      this.addEventListeners(); // Menambahkan event listener ke tombol
      this.updateStatusDisplay(); // Menampilkan status awal game
    }
  }

  // Mengecek apakah user berada di halaman yang benar
  isCorrectPage() {
    return window.location.pathname === "/src/page/rock-paper-scissors.html";
  }

  // Mengambil dan menyimpan elemen-elemen HTML penting ke dalam properti class
  initializeDOMElements() {
    this.statusElement = document.getElementById("rock-paper-scissors__status");
    this.movesLeftElement = document.getElementById("move-left__moves");
    this.messageElement = document.getElementById("rock-paper-scissors__message");
    this.playerScoreElement = document.getElementById("score-item__player-score");
    this.computerScoreElement = document.getElementById("score-item__computer-score");
    this.playerChoiceDisplay = document.getElementById("your-choise__button").querySelector("i");
    this.computerChoiceDisplay = document.getElementById("computer-choise__button").querySelector("i");
    this.rockButton = document.getElementById("rock__button");
    this.paperButton = document.getElementById("paper__button");
    this.scissorsButton = document.getElementById("scissors__button");
  }

  // Inisialisasi nilai-nilai awal permainan
  initializeGameVariables() {
    this.maxMoves = 5; // Jumlah game dalam satu ronde
    this.movesLeft = this.maxMoves;
    this.playerScore = 0;
    this.computerScore = 0;
    this.choices = ["rock", "paper", "scissors"];
    this.icons = {
      rock: "fa-solid fa-hand-back-fist text-5xl",
      paper: "fa-solid fa-hand text-5xl",
      scissors: "fa-solid fa-hand-scissors text-5xl",
      question: "fa-solid fa-question text-5xl",
    };
    this.gameOver = false;
  }

  // Menambahkan event listener untuk tombol-tombol
  addEventListeners() {
    this.rockButton.addEventListener("click", () => this.handlePlayerChoice("rock"));
    this.paperButton.addEventListener("click", () => this.handlePlayerChoice("paper"));
    this.scissorsButton.addEventListener("click", () => this.handlePlayerChoice("scissors"));
  }

  // Menangani pilihan player
  handlePlayerChoice(playerChoice) {
    if (this.gameOver) {
      this.resetGame();
      return;
    }

    // Generate computer choice
    const computerChoice = this.generateComputerChoice();

    // Tampilkan pilihan player dan computer
    this.updateChoiceDisplays(playerChoice, computerChoice);

    // Tentukan pemenang
    const result = this.determineWinner(playerChoice, computerChoice);

    // Update score berdasarkan hasil
    this.updateScore(result);

    // Kurangi moves left
    this.movesLeft--;
    this.updateMovesLeftDisplay();

    // Tampilkan pesan hasil
    this.showResultMessage(result, playerChoice, computerChoice);

    // Cek apakah game berakhir
    if (this.movesLeft <= 0 || this.playerScore >= 3 || this.computerScore >= 3) {
      this.endGame();
    }
  }

  // Menghasilkan pilihan komputer secara acak
  generateComputerChoice() {
    const randomIndex = Math.floor(Math.random() * this.choices.length);
    return this.choices[randomIndex];
  }

  // Update tampilan pilihan player dan computer
  updateChoiceDisplays(playerChoice, computerChoice) {
    // Update ikon player
    this.playerChoiceDisplay.className = this.icons[playerChoice];

    // Update ikon computer
    this.computerChoiceDisplay.className = this.icons[computerChoice];

    // Tambahkan animasi
    this.animateElement(this.playerChoiceDisplay.parentElement);
    this.animateElement(this.computerChoiceDisplay.parentElement);
  }

  // Menentukan pemenang berdasarkan pilihan
  determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "tie";
    }

    if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
      return "player";
    }

    return "computer";
  }

  // Update score berdasarkan hasil
  updateScore(result) {
    if (result === "player") {
      this.playerScore++;
      this.playerScoreElement.textContent = this.playerScore;
      this.animateElement(this.playerScoreElement);
    } else if (result === "computer") {
      this.computerScore++;
      this.computerScoreElement.textContent = this.computerScore;
      this.animateElement(this.computerScoreElement);
    }
  }

  // Menampilkan pesan hasil
  showResultMessage(result, playerChoice, computerChoice) {
    let message = "";
    let type = "normal";

    if (result === "tie") {
      message = "It's a tie!";
      type = "warning";
    } else if (result === "player") {
      message = `You win! ${this.capitalizeFirstLetter(playerChoice)} beats ${this.capitalizeFirstLetter(computerChoice)}`;
      type = "success";
    } else {
      message = `Computer wins! ${this.capitalizeFirstLetter(computerChoice)} beats ${this.capitalizeFirstLetter(playerChoice)}`;
      type = "error";
    }

    this.messageElement.textContent = message;
    this.applyMessageStyle(type);
    this.animateElement(this.messageElement);
  }

  // Kapitalisasi huruf pertama
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Mengakhiri permainan
  endGame() {
    this.gameOver = true;
    let finalMessage = "";
    let messageType = "";

    if (this.playerScore > this.computerScore) {
      finalMessage = `Game over! You won ${this.playerScore}-${this.computerScore}!`;
      messageType = "success";
      this.statusElement.textContent = "🎉 You won the match! 🎉";
    } else if (this.computerScore > this.playerScore) {
      finalMessage = `Game over! Computer won ${this.computerScore}-${this.playerScore}!`;
      messageType = "error";
      this.statusElement.textContent = "😢 Computer won the match!";
    } else {
      finalMessage = `Game over! It's a tie ${this.playerScore}-${this.computerScore}!`;
      messageType = "warning";
      this.statusElement.textContent = "🤝 It's a tie!";
    }

    this.messageElement.textContent = finalMessage;
    this.applyMessageStyle(messageType);
    this.animateElement(this.messageElement);

    // Ubah tombol-tombol menjadi restartable
    this.rockButton.querySelector("i").className = "fa-solid fa-rotate-right text-3xl";
    this.paperButton.querySelector("i").className = "fa-solid fa-rotate-right text-3xl";
    this.scissorsButton.querySelector("i").className = "fa-solid fa-rotate-right text-3xl";
  }

  // Reset game ke kondisi awal
  resetGame() {
    this.movesLeft = this.maxMoves;
    this.playerScore = 0;
    this.computerScore = 0;
    this.gameOver = false;

    // Reset tampilan score
    this.playerScoreElement.textContent = "0";
    this.computerScoreElement.textContent = "0";

    // Reset tampilan pilihan
    this.playerChoiceDisplay.className = this.icons.question;
    this.computerChoiceDisplay.className = this.icons.question;

    // Reset tombol-tombol
    this.rockButton.querySelector("i").className = "fa-solid fa-hand-back-fist text-3xl";
    this.paperButton.querySelector("i").className = "fa-solid fa-hand text-3xl";
    this.scissorsButton.querySelector("i").className = "fa-solid fa-hand-scissors text-3xl";

    // Reset pesan
    this.messageElement.textContent = "";
    this.clearMessageStyles();

    // Update moves left dan status
    this.updateMovesLeftDisplay();
    this.updateStatusDisplay();
  }

  // Update tampilan moves left
  updateMovesLeftDisplay() {
    this.movesLeftElement.textContent = this.movesLeft;
    this.animateElement(this.movesLeftElement);
  }

  // Update tampilan status
  updateStatusDisplay() {
    this.statusElement.textContent = "Choose Rock, Paper, or Scissors!";
  }

  // Tambahkan animasi ke elemen
  animateElement(element) {
    element.classList.add("animate-bounce");
    setTimeout(() => {
      element.classList.remove("animate-bounce");
    }, 500);
  }

  // Terapkan style ke pesan hasil
  applyMessageStyle(type) {
    const messageStyles = {
      warning: ["text-[#ffa502]"],
      success: ["text-[#2ed573]", "pulse"],
      error: ["text-[#ff4757]"],
      normal: ["text-[#2f3542]"],
    };

    this.clearMessageStyles();
    const styles = messageStyles[type] || messageStyles["normal"];
    this.messageElement.classList.add(...styles);
  }

  // Clear message styles
  clearMessageStyles() {
    const allStyles = ["text-[#ffa502]", "text-[#2ed573]", "pulse", "text-[#ff4757]", "text-[#2f3542]"];
    allStyles.forEach((cls) => this.messageElement.classList.remove(cls));
  }
}
