import { createCardComponent } from "/src/components/my-card.js";

export function renderSectionGames() {
  const gamesContainer = document.getElementById("games__container");

  const card1Text = {
    title: "Number Guessing",
    description: "Test your intuition by guessing the secret number!",
  };
  const card1Link = {
    href: "/src/page/number-guess.html",
    label: "Play",
  };
  const card1Class = {
    divClass: "flex flex-col justify-center items-center gap-[1.5rem] rounded-lg bg-[#1a1a1a] p-[2rem] shadow-[0_5px_15px_rgba(0,0,0,0.2)] transition-transform duration-300 ease-in-out hover:-translate-y-2.5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)]",
    iClass: "fa-solid fa-circle-question text-5xl text-[#ff4757]",
    h4Class: "font-[Bebas_Neue] text-2xl font-bold text-center tracking-[0.2rem]",
    pClass: "font-[Source Sans 3] text-center tracking-[0.1rem] text-[#cccccc]",
    aClass: "font-[Source Sans 3] font-semibold tracking-[0.1rem] text-[#ffffff] rounded-full bg-[#2ed573] px-[1.5rem] py-[0.5rem] transition-all duration-300 ease-in-out hover:bg-[#26ae60] hover:scale-105",
  };
  const card1Component = createCardComponent({ text: card1Text, link: card1Link, classes: card1Class });

  const card2Text = {
    title: "Rock Paper Scissors",
    description: "The classic game of chance and strategy!",
  };
  const card2Link = {
    href: "#",
    label: "Play",
  };
  const card2Class = {
    divClass: "flex flex-col justify-center items-center gap-[1.5rem] rounded-lg bg-[#1a1a1a] p-[2rem] shadow-[0_5px_15px_rgba(0,0,0,0.2)] transition-transform duration-300 ease-in-out hover:-translate-y-2.5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)]",
    iClass: "fa-solid fa-hand-back-fist text-5xl text-[#ff4757]",
    h4Class: "font-[Bebas_Neue] text-2xl font-bold text-center tracking-[0.2rem]",
    pClass: "font-[Source Sans 3] text-center tracking-[0.1rem] text-[#cccccc]",
    aClass: "font-[Source Sans 3] font-semibold tracking-[0.1rem] text-[#ffffff] rounded-full bg-[#2ed573] px-[1.5rem] py-[0.5rem] transition-all duration-300 ease-in-out hover:bg-[#26ae60] hover:scale-105",
  };
  const card2Component = createCardComponent({ text: card2Text, link: card2Link, classes: card2Class });

  const card3Text = {
    title: "Clicker Game",
    description: "How fast can you click? Test your speed!",
  };
  const card3Link = {
    href: "/src/page/clicker.html",
    label: "Play",
  };
  const card3Class = {
    divClass: "flex flex-col justify-center items-center gap-[1.5rem] rounded-lg bg-[#1a1a1a] p-[2rem] shadow-[0_5px_15px_rgba(0,0,0,0.2)] transition-transform duration-300 ease-in-out hover:-translate-y-2.5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)]",
    iClass: "fa-solid fa-arrow-pointer text-5xl text-[#ff4757]",
    h4Class: "font-[Bebas_Neue] text-2xl font-bold text-center tracking-[0.2rem]",
    pClass: "font-[Source Sans 3] text-center tracking-[0.1rem] text-[#cccccc]",
    aClass: "font-[Source Sans 3] font-semibold tracking-[0.1rem] text-[#ffffff] rounded-full bg-[#2ed573] px-[1.5rem] py-[0.5rem] transition-all duration-300 ease-in-out hover:bg-[#26ae60] hover:scale-105",
  };
  const card3Component = createCardComponent({ text: card3Text, link: card3Link, classes: card3Class });

  if (gamesContainer) {
    gamesContainer.appendChild(card1Component);
    gamesContainer.appendChild(card2Component);
    gamesContainer.appendChild(card3Component);
  }
}
