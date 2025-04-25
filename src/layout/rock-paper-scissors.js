import { createButtonComponent } from "/src/components/my-button";

export function renderRockPaperScissor() {
  const rock = document.getElementById("rps-option__rock");
  const paper = document.getElementById("rps-option__paper");
  const scissors = document.getElementById("rps-option__scissors");
  const yourChoice = document.getElementById("choise-display__your-choise");
  const computerChoise = document.getElementById("choise-display__computer-choise");

  const ButtonRockContent = {
    label: "",
    iClass: "fa-solid fa-hand-back-fist text-3xl",
    buttonClass: "w-[80px] h-[80px] fex justify-center items-center rounded-full bg-[#121212] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#1e1e1e] hover:shadow-[0_0px_5px_rgba(0,0,0,0.5)] hover:scale-110",
  };
  const buttonRockComponent = createButtonComponent(ButtonRockContent);
  buttonRockComponent.id = "rock__button";

  const ButtonPaperContent = {
    label: "",
    iClass: "fa-solid fa-hand text-3xl",
    buttonClass: "w-[80px] h-[80px] fex justify-center items-center rounded-full bg-[#121212] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#1e1e1e] hover:shadow-[0_0px_5px_rgba(0,0,0,0.5)] hover:scale-110",
  };
  const buttonPaperComponent = createButtonComponent(ButtonPaperContent);
  buttonPaperComponent.id = "paper__button";

  const ButtonScissorsContent = {
    label: "",
    iClass: "fa-solid fa-hand-scissors text-3xl",
    buttonClass: "w-[80px] h-[80px] fex justify-center items-center rounded-full bg-[#121212] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#1e1e1e] hover:shadow-[0_0px_5px_rgba(0,0,0,0.5)] hover:scale-110",
  };
  const buttonScissorsComponent = createButtonComponent(ButtonScissorsContent);
  buttonScissorsComponent.id = "scissors__button";

  const buttonYourChoisecontent = {
    label: "",
    iClass: "fa-solid fa-question text-5xl",
    buttonClass: "w-[100px] h-[100px] fex justify-center items-center rounded-full bg-[#121212] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#1e1e1e] hover:shadow-[0_0px_5px_rgba(0,0,0,0.5)] hover:scale-110",
  };

  const buttonYourChoiseComponent = createButtonComponent(buttonYourChoisecontent);
  buttonYourChoiseComponent.id = "your-choise__button";

  const buttonComputerChoisecontent = {
    label: "",
    iClass: "fa-solid fa-question text-5xl",
    buttonClass: "w-[100px] h-[100px] fex justify-center items-center rounded-full bg-[#121212] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#1e1e1e] hover:shadow-[0_0px_5px_rgba(0,0,0,0.5)] hover:scale-110",
  };

  const buttonComputerChoiseComponent = createButtonComponent(buttonComputerChoisecontent);
  buttonComputerChoiseComponent.id = "computer-choise__button";

  if (rock) {
    rock.appendChild(buttonRockComponent);
  }
  if (paper) {
    paper.appendChild(buttonPaperComponent);
  }
  if (scissors) {
    scissors.appendChild(buttonScissorsComponent);
  }
  if (yourChoice) {
    yourChoice.appendChild(buttonYourChoiseComponent);
  }
  if (computerChoise) {
    computerChoise.appendChild(buttonComputerChoiseComponent);
  }
}
