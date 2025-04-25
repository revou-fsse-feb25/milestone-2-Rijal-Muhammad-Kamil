// Kelas utama untuk ClickerGame
export default class ClickerGame {
  constructor() {
    // Cek apakah halaman saat ini adalah halaman Clicker Game
    if (this.isCorrectPage()) {
      this.initializeDOMElements(); // Inisialisasi elemen DOM yang dibutuhkan
      this.initializeGameVariables(); // Inisialisasi variabel permainan
      this.addEventListeners(); // Menambahkan event listener ke tombol
      this.startNewGame(); // Memulai permainan baru
    }
  }

  // Mengecek apakah pengguna berada di halaman clicker.html
  isCorrectPage() {
    return window.location.pathname === "/src/page/clicker.html";
  }

  // Menghubungkan elemen HTML dengan variabel di JavaScript
  initializeDOMElements() {
    this.statusElement = document.getElementById("clicker__status");
    this.timeElement = document.getElementById("time-left__time");
    this.clickAreaElement = document.getElementById("clicker__clicker-area");
    this.buttonElement = document.getElementById("clicker__button");
    this.messageElement = document.getElementById("clicker__message");
    this.clickerCountElement = document.getElementById("clicker-stat__clicker-count");
    this.clickerPerSecondElement = document.getElementById("clicker-stat__clicker-per-second");
  }

  // Mengatur nilai awal variabel permainan
  initializeGameVariables() {
    this.startTime = 60;
    this.timeLeft = this.startTime;
    this.timer = null;
    this.clickCount = 0;
    this.clicksPerSecond = 0;
    this.lastClickTime = null;
    this.gameOver = false;
    this.timerStarted = false;
  }

  // Menambahkan event listener untuk tombol klik
  addEventListeners() {
    this.buttonElement.addEventListener("click", () => this.handleClick());
  }

  // Memulai permainan baru dengan reset nilai
  startNewGame() {
    this.timeLeft = this.startTime;
    this.clickCount = 0;
    this.clicksPerSecond = 0;
    this.lastClickTime = null;
    this.gameOver = false;
    this.timerStarted = false;
    this.updateGameUI(); // Update tampilan awal game
    this.buttonElement.textContent = "Click Me";
  }

  // Memulai timer saat permainan dimulai
  startTimer() {
    if (!this.timerStarted) {
      this.timerStarted = true;
      this.timer = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
          this.updateTimeLeft(); // Update tampilan waktu setiap detik
        } else {
          clearInterval(this.timer);
          this.endGame(); // Mengakhiri permainan saat waktu habis
        }
      }, 1000);
    }
  }

  // Mengupdate tampilan waktu yang tersisa
  updateTimeLeft() {
    this.timeElement.textContent = this.timeLeft;
    this.animateElement(this.timeElement); // Memberikan animasi bounce
  }

  // Mengupdate teks status di atas permainan
  updateStatusText() {
    this.statusElement.textContent = "☠️Test your might!☠️";
  }

  // Menangani event saat tombol diklik
  handleClick() {
    if (this.gameOver) {
      this.resetGame(); // Reset permainan jika sudah game over
    } else {
      if (!this.timerStarted) {
        this.startTimer(); // Mulai timer saat klik pertama
      }
      this.processClick(); // Proses klik untuk meningkatkan skor
    }
  }

  // Memproses logika saat klik terjadi
  processClick() {
    const currentTime = Date.now();
    if (this.lastClickTime) {
      const timeDiff = (currentTime - this.lastClickTime) / 1000;
      this.clicksPerSecond = (1 / timeDiff).toFixed(1); // Hitung klik per detik
    }
    this.lastClickTime = currentTime;
    this.clickCount++; // Tambah jumlah klik
    this.updateGameUI(); // Update tampilan skor
  }

  // Mengupdate UI (score dan klik per detik)
  updateGameUI() {
    this.clickerCountElement.textContent = this.clickCount;
    this.clickerPerSecondElement.textContent = this.clicksPerSecond;
    this.updateStatusText();
    this.animateElement(this.clickerCountElement); // Animasikan count
    this.animateElement(this.clickerPerSecondElement); // Animasikan cps
  }

  // Mengakhiri permainan saat waktu habis
  endGame() {
    this.gameOver = true;
    this.statusElement.textContent = "☹️ Game Over! Time's up!";
    this.messageElement.textContent = `You clicked ${this.clickCount} times in ${this.startTime} seconds!`;
    this.messageElement.classList.add("text-[#2ed573]"); // Memberi warna sukses
    this.animateElement(this.messageElement);
    this.buttonElement.textContent = "Play Again";
    this.buttonElement.classList.add("pulse"); // Efek pulse pada tombol

    this.buttonElement.disabled = true; // Disable tombol sementara
    setTimeout(() => {
      this.buttonElement.disabled = false; // Enable kembali setelah 3 detik
    }, 3000);
  }

  // Mereset permainan untuk memulai lagi
  resetGame() {
    this.buttonElement.classList.remove("pulse");
    this.buttonElement.textContent = "Click Me";
    this.statusElement.textContent = "Test your might!";
    this.messageElement.textContent = "";
    this.messageElement.classList.remove("text-[#2ed573]");
    this.clickerCountElement.textContent = "0";
    this.clickerPerSecondElement.textContent = "0.0";
    this.timeElement.textContent = this.startTime;

    this.startNewGame(); // Panggil start baru
  }

  // Memberikan animasi bounce pada elemen tertentu
  animateElement(element) {
    element.classList.add("animate-bounce");
    setTimeout(() => {
      element.classList.remove("animate-bounce");
    }, 300);
  }
}

// Saat halaman sudah dimuat, buat instance baru dari ClickerGame
document.addEventListener("DOMContentLoaded", () => {
  new ClickerGame();
});
