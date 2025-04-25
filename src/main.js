import "/src/style.css";
import { renderHeader } from "/src/layout/header.js";
import { renderHomeSection } from "/src/layout/home-section.js";
import { renderSectionGames } from "/src/layout/game-section.js";
import { renderFooter } from "/src/layout/footer.js";
import { renderNumberGuess } from "/src/layout/number-guess.js";
import { renderClicker } from "/src/layout/clicker.js";
import { renderRockPaperScissor } from "/src/layout/rock-paper-scissors";
import { menuButtonClick, windowScroll } from "/src/event/header.js";
import NumberGuessingGame from "/src/javascript/number-guess.js";
import ClickerGame from "/src/javascript/clicker";
import RockPaperScissorsGame from "/src/javascript/rock-paper-scissors";

document.addEventListener("DOMContentLoaded", () => {
  new NumberGuessingGame();
});

document.addEventListener("DOMContentLoaded", () => {
  new ClickerGame();
});

document.addEventListener("DOMContentLoaded", () => {
  new RockPaperScissorsGame();
});

renderHeader();
renderHomeSection();
renderSectionGames();
renderFooter();
renderNumberGuess();
renderClicker();
renderRockPaperScissor();
menuButtonClick();
windowScroll();
