import { createButtonComponent } from "/src/components/my-button";
import { createLinkButtonComponent } from "/src/components/my-link-button";

export function renderClicker() {
  const clickerArea = document.getElementById("clicker__clicker-area");
  const gameBackButton = document.getElementById("game-back-button");

  const ButtonContent = {
    label: "CLICK ME!",
    iClass: "",
    buttonClass: "w-[200px] h-[200px] font-[Source Sans 3] text-4xl font-semibold tracking-[0.1rem] text-[#ffffff] flex justify-center items-center rounded-full bg-gradient-to-br from-[#ff4757] to-[#ff6b81] shadow-[0_10px_20px_rgba(0,0,0,0.3)] cursor-pointer transition-all duration-100 ease-in-out select-none active:shadow-[0_5px_10px_rgba(0,0,0,0.3)] active:scale-95",
  };
  const buttonComponent = createButtonComponent(ButtonContent);
  buttonComponent.id = "clicker__button";

  if (clickerArea) {
    clickerArea.appendChild(buttonComponent);
  }
}
