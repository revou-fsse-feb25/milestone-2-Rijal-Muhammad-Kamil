import "/src/style.css";
import { renderHeader } from "/src/layout/header.js";
import { renderHomeSection } from "/src/layout/home-section.js";
import { renderSectionGames } from "/src/layout/game-section.js";
import { renderNumberGuess } from "/src/layout/number-guess.js";
import { renderFooter } from "/src/layout/footer.js";
import { menuButtonClick, windowScroll } from "/src/event/header.js";
import NumberGuessingGame from "/src/javascript/number-guess.js";

document.addEventListener("DOMContentLoaded", () => {
  new NumberGuessingGame();
});

renderHeader();
renderHomeSection();
renderSectionGames();
renderFooter();
renderNumberGuess();
menuButtonClick();
windowScroll();
