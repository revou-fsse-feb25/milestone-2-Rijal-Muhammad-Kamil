import { createButton } from "/src/components/my-button.js";
import { createLinkButtonComponent } from "/src/components/my-link-button.js";

export function rendergameAreaNumberGuess() {
  const guessing = document.getElementById("number-guess__guessing");
  const gameBackButton = document.getElementById("game-back-button");

  const linkButtonContent1 = {
    label: "Guess",
    iClass: "",
    buttonClass: "font-[Source Sans 3] tracking-[0.1rem] text-xl text-[#ffffff] rounded-md border-[none] bg-[#ff4757] cursor-pointer px-[1rem] py-[0.5rem] transition-all duration-300 ease-in-out hover:bg-[#e0404e]",
  };
  const linkButtonComponent = createButton(linkButtonContent1);
  linkButtonComponent.id = "number-guess__guessing-button";

  const linkButtonContent2 = {
    href: "/index.html#home",
    label: "Back To Home",
    iClass: "",
    aClass: "inline-block font-semibold text-[#ffffff] bg-[#333333] rounded-md px-[1rem] py-[0.8rem] transition-all duration-300 ease-in-out hover:bg-[#444444]",
  };
  const linkButtonComponent1= createLinkButtonComponent(linkButtonContent2);

  if (guessing) {
    guessing.appendChild(linkButtonComponent1);
  }

  if (gameBackButton) {
    gameBackButton.appendChild(linkButtonContent2);
  }
}
