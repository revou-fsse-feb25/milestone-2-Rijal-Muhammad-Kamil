import { toggleHeader, toggleMenuButton, toggleFloatingNav } from "/src/handler/header";

function menuButtonClick() {
  const headerButton = document.getElementById("header__button");

  headerButton.addEventListener("click", () => {
    toggleMenuButton();
    toggleFloatingNav();
  });
}

function windowScroll() {
  window.addEventListener("scroll", () => {
    toggleHeader();
  });
}
export { menuButtonClick, windowScroll };
