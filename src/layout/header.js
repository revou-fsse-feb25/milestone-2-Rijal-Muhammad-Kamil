import { createLogoComponent } from "/src/components/my-logo.js";
import { createNavComponent } from "/src/components/my-nav.js";
import { createButtonComponent } from "/src/components/my-button.js";

export function renderHeader() {
  const header = document.getElementById("header");

  const logoH1 = {
    text: "Revo",
    className: "font-[Bebas_Neue] text-4xl font-bold tracking-[0.2rem] text-[#ff4757] drop-shadow-[2px_2px_5px_rgba(0,0,0,5)]"
  };
  const logoSpan = {
    text: "Fun",
    className: "text-[#2ed573]"
  };
  const logoComponent = createLogoComponent({ h1: logoH1, span: logoSpan });

  const navLinks = [
    { href: "/index.html#home", label: "HOME" },
    { href: "/src/page/games.html", label: "GAME" },
    { href: "/src/page/about.html", label: "ABOUT" },
  ];
  const mainNavClass = {
    navClass: "hidden sm:flex",
    ulClass: "w-xs flex justify-between items-center",
    liClass: "px-[1rem] py-[0.5rem] rounded-md transition-all duration-300 ease-in-out hover:bg-[#ff4757]",
    aClass: "font-[Source Sans 3] text-xl tracking-[0.1rem] text-[#ffffff]",
  };
  const mainNavComponent = createNavComponent({ links: navLinks, classes: mainNavClass });

  const floatingNavClass = {
    navClass: "w-3xs h-[16rem] sm:hidden absolute top-[3.8rem] right-[2rem] rounded-md bg-[#2ed573] overflow-hidden origin-top-right scale-0 transition-all duration-300 ease-in-out",
    ulClass: "h-full flex flex-col justify-evenly items-center",
    liClass: "px-[1rem] py-[0.5rem] rounded-md transition-all duration-300 ease-in-out hover:bg-[#ff4757]",
    aClass: "font-[Source Sans 3] text-xl tracking-[0.1rem] text-[#ffffff]",
  };
  const floatingNavComponent = createNavComponent({ links: navLinks, classes: floatingNavClass });
  floatingNavComponent.id = "header__FloatingNav";

  const menuButton = {
    label: "",
    iClass: "fa-solid fa-bars text-3xl",
    buttonClass: "sm:hidden absolute right-[1rem]",
  };
  const menuButtonComponent = createButtonComponent(menuButton);
  menuButtonComponent.id = "header__button";

  if (header) {
    header.appendChild(logoComponent);
    header.appendChild(mainNavComponent);
    header.appendChild(menuButtonComponent);
    header.appendChild(floatingNavComponent);
  }
}
