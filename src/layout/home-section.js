import { createLinkButtonComponent } from "/src/components/my-link-button.js";

export function renderHomeSection() {
  const homeContainer = document.getElementById("home__container");

  const linkButtonContent = {
    href: "/src/page/games.html",
    label: "Play Now",
    iClass: "",
    aClass: "font-[Source Sans 3] text-xl font-semibold tracking-[0.1rem] border-[2px] border-solid border-(--color-primary) rounded-full bg-(--color-primary) px-[2rem] py-[0.8rem] transition-all duration-300 ease-in-out hover:text-(--color-primary) hover:bg-transparent",
  };
  const linkButtonComponent = createLinkButtonComponent(linkButtonContent);

  if (homeContainer) {
    homeContainer.appendChild(linkButtonComponent);
  }
}
