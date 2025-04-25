import { createButtonComponent } from "/src/components/my-button.js";
import { createLinkButtonComponent } from "/src/components/my-link-button.js";

export function renderNumberGuess() {
  const guessing = document.getElementById("number-guess__guessing");
  const gameBackButton = document.getElementById("game-back-button");

  const ButtonContent = {
    label: "Guess",
    iClass: "",
    buttonClass: "font-[Source Sans 3] text-xl font-semibold tracking-[0.1rem] text-[#ffffff] rounded-md border-[none] bg-[#ff4757] cursor-pointer px-[1rem] py-[0.5rem] transition-all duration-300 ease-in-out hover:bg-[#e0404e] hover:shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:-translate-y-0.5",
  };
  const buttonComponent = createButtonComponent(ButtonContent);
  buttonComponent.id = "guessing-button";

  const linkButtonContent = {
    href: "/index.html#home",
    label: "Back To Home",
    iClass: "",
    aClass: "font-[Source Sans 3] font-semibold tracking-[0.1rem] text-[#ffffff] bg-[#333333] rounded-md px-[1rem] py-[0.8rem] transition-all duration-300 ease-in-out hover:bg-[#444444]",
  };
  const linkButtonComponent = createLinkButtonComponent(linkButtonContent);

  if (guessing) {
    guessing.appendChild(buttonComponent);
  }
  if (gameBackButton) {
    gameBackButton.appendChild(linkButtonComponent);
  }
}
