export default class NumberGuessingGame {
  // Constructor - inisialisasi awal saat class dibuat
  constructor() {
    if (this.isCorrectPage()) {
      this.initializeDOMElements(); // Mengambil elemen-elemen DOM yang dibutuhkan
      this.initializeGameVariables(); // Menyiapkan variabel game seperti secretNumber dan attempts
      this.addEventListeners(); // Menambahkan event listener ke tombol dan input
      this.startNewGame(); // Memulai game baru dengan angka acak
    }
  }

  // Mengecek apakah user berada di halaman yang benar
  isCorrectPage() {
    return window.location.pathname === "/src/page/number-guess.html";
  }

  // Mengambil dan menyimpan elemen-elemen HTML penting ke dalam properti class
  initializeDOMElements() {
    this.statusElement = document.getElementById("number-guess__status");
    this.attemptsElement = document.getElementById("attempt-left__attempts");
    this.inputElement = document.getElementById("guessing_input");
    this.buttonElement = document.getElementById("guessing-button");
    this.messageElement = document.getElementById("number-guess__message");
    this.historyContainerElement = document.getElementById("history__container");
  }

  // Inisialisasi nilai-nilai awal permainan
  initializeGameVariables() {
    this.secretNumber = 50;
    this.maxAttempts = 5;
    this.attempts = this.maxAttempts;
    this.guessHistory = [];
    this.gameOver = false;
  }

  // Menambahkan event listener untuk klik tombol dan tekan Enter
  addEventListeners() {
    this.buttonElement.addEventListener("click", () => this.handleGuess());
    this.inputElement.addEventListener("keydown", (e) => this.handleEnter(e));
  }

  // Memulai game baru dengan reset variabel dan UI
  startNewGame() {
    this.secretNumber = this.generateSecretNumber(); // Buat angka acak baru
    this.attempts = this.maxAttempts;
    this.guessHistory = [];
    this.gameOver = false;
    this.updateAttemptsDisplay(); // Tampilkan jumlah percobaan yang tersedia
    this.resetGameUI(); // Reset tampilan UI ke awal
    console.log("Secret number:", this.secretNumber); // Debug
  }

  // Menghasilkan angka acak antara 1 sampai 100
  generateSecretNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  // Reset tampilan UI ke kondisi awal game
  resetGameUI() {
    this.statusElement.textContent = "I'm thinking of a number between 1 and 100...";
    this.inputElement.value = "";
    this.inputElement.focus();
    this.inputElement.disabled = false;
    this.buttonElement.textContent = "Guess";
    this.buttonElement.disabled = false;
    this.messageElement.textContent = "";
    this.historyContainerElement.innerHTML = "";
    this.clearMessageStyles(); // Hapus warna pesan sebelumnya
  }

  // Fungsi utama yang menangani logika saat tombol ditekan
  handleGuess() {
    if (this.gameOver) {
      this.resetGame(); // Jika game sudah selesai, mulai baru
    } else {
      this.processGuess(); // Jika masih jalan, proses tebakan
    }
  }

  // Tangani tombol Enter agar fungsinya sama dengan klik
  handleEnter(e) {
    if (e.key === "Enter") {
      this.handleGuess(); // Panggil handleGuess() saat tombol Enter ditekan
    }
  }

  // Proses input pengguna: validasi, cek jawaban, update UI
  processGuess() {
    const playerGuess = this.getPlayerGuess(); // Ambil nilai input pengguna

    if (this.isValidGuess(playerGuess)) {
      this.guessHistory.push(playerGuess);
      this.attempts--; // Jumlah attemps di kurangi
      this.updateAttemptsDisplay(); // Perbarui jumlah percobaan di UI
      this.clearInputField(); // Bersihkan input setelah digunakan
      this.checkGuess(playerGuess); // Cek apakah tebakan benar atau salah
    } else {
      this.showMessage("Please enter a valid number between 1 and 100.", "warning"); // Tampilkan peringatan
    }
  }

  // Mengambil angka dari input dan konversi ke integer
  getPlayerGuess() {
    return parseInt(this.inputElement.value);
  }

  // Mengecek apakah input valid (antara 1 dan 100)
  isValidGuess(guess) {
    return !isNaN(guess) && guess >= 1 && guess <= 100;
  }

  // Menampilkan sisa percobaan ke UI
  updateAttemptsDisplay() {
    this.attemptsElement.textContent = this.attempts;
    this.animateElement(this.attemptsElement); // Tambahkan animasi
  }

  // Kosongkan dan fokuskan kembali input setelah ditebak
  clearInputField() {
    this.inputElement.value = "";
    this.inputElement.focus();
  }

  // Mengecek apakah tebakan benar, terlalu kecil, atau terlalu besar
  checkGuess(playerGuess) {
    if (playerGuess === this.secretNumber) {
      this.endGame(true, `Congratulations! You guessed the secret number ${this.secretNumber}!`); // Menang
    } else {
      const hint = playerGuess < this.secretNumber ? "Too low" : "Too high";
      const type = playerGuess < this.secretNumber ? "low" : "high";
      this.showMessage(`${hint}! Try again.`, type); // Tampilkan pesan & warna
      this.updateHistory(); // Update riwayat tebakan

      if (this.attempts <= 0) {
        this.endGame(false, `Game over! You ran out of attempts. The secret number was ${this.secretNumber}!`); // Kalah
      }
    }
  }

  // Menampilkan semua tebakan sebelumnya sebagai lingkaran warna-warni
  updateHistory() {
    this.historyContainerElement.innerHTML = "";

    this.guessHistory.forEach((guess, index) => {
      const guessCircle = this.createHistoryItem(guess, index); // Buat item tebakan
      this.historyContainerElement.appendChild(guessCircle); // Tambahkan ke UI
    });
  }

  // Buat elemen tebakan sebagai lingkaran dan beri warna/hint
  createHistoryItem(guess, index) {
    const guessCircle = document.createElement("div");
    guessCircle.className = "w-[3rem] h-[3rem] font-[Source Sans 3] font-semibold tracking-[0.1rem] text-[#ffffff] flex justify-center items-center rounded-full bg-[#2ed573] number-circle transition-all duration-300 ease-in-out hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:scale-110";
    guessCircle.style.animationDelay = `${index * 0.1}s`;
    guessCircle.textContent = guess;
    this.updateGuessCircleColor(guessCircle, guess); // Ubah warna berdasarkan hasil tebakan
    guessCircle.title = this.getGuessHint(guess); // Tooltip petunjuk
    return guessCircle;
  }

  // Ubah warna lingkaran sesuai hasil tebakan (rendah/tinggi)
  updateGuessCircleColor(guessCircle, guess) {
    if (guess < this.secretNumber) {
      guessCircle.classList.replace("bg-[#2ed573]", "bg-[#1e90ff]");
    } else if (guess > this.secretNumber) {
      guessCircle.classList.replace("bg-[#2ed573]", "bg-[#ff6b6b]");
    }
  }

  // Mendapatkan hint text dari angka tebakan
  getGuessHint(guess) {
    if (guess < this.secretNumber) return "Too low";
    if (guess > this.secretNumber) return "Too high";
    return "Correct!";
  }

  // Menampilkan pesan hasil tebakan dan menerapkan style
  showMessage(text, type = "normal") {
    this.messageElement.textContent = text;
    this.applyMessageStyle(type); // Terapkan style berdasarkan jenis pesan
    this.animateElement(this.messageElement); // Tambahkan animasi
  }

  // Terapkan class style ke pesan berdasarkan tipenya (success, error, dst)
  applyMessageStyle(type) {
    const messageStyles = {
      warning: ["text-[#ffa502]"],
      success: ["text-[#2ed573]", "pulse"],
      error: ["text-[#ff4757]"],
      low: ["text-[#1e90ff]"],
      high: ["text-[#ff6b6b]"],
      normal: ["text-[#2f3542]"],
    };

    this.clearMessageStyles(); // Hapus class sebelumnya
    const styles = messageStyles[type] || messageStyles["normal"];
    this.messageElement.classList.add(...styles);
  }

  // Menghapus semua class style pesan sebelumnya
  clearMessageStyles() {
    const allStyles = ["text-[#ffa502]", "text-[#2ed573]", "pulse", "text-[#ff4757]", "text-[#1e90ff]", "text-[#ff6b6b]", "text-[#2f3542]"];
    allStyles.forEach((cls) => this.messageElement.classList.remove(cls));
  }

  // Tambahkan animasi ke elemen untuk efek visual (bounce)
  animateElement(element) {
    element.classList.add("animate-bounce");
    setTimeout(() => {
      element.classList.remove("animate-bounce");
    }, 500);
  }

  // Mengakhiri permainan, tampilkan hasil dan ubah UI
  endGame(isWin, message) {
    this.gameOver = true;
    this.inputElement.disabled = true;
    this.showMessage(message, isWin ? "success" : "error"); // Tampilkan hasil akhir
    this.statusElement.textContent = isWin ? "🎉 You won! 🎉" : "😢 Game over! You ran out of attempts.";
    this.buttonElement.textContent = "Play Again";
    this.buttonElement.classList.add("pulse");
  }

  // Reset seluruh game ke kondisi awal
  resetGame() {
    this.buttonElement.classList.remove("pulse");
    this.startNewGame(); // Mulai game baru
  }
}
