import { createLogoComponent } from "/src/components/my-logo.js";
import { createNavComponent } from "/src/components/my-nav.js";
import { createSocialLinksComponent } from "/src/components/my-social-media-link.js";

export function renderFooter() {
  const footerLogo = document.getElementById("footer__logo");
  const footerNav = document.getElementById("footer__nav");
  const footerSocialMedia = document.getElementById("footer__social-media");

  const logoH1 = {
    text: "Revo",
    className: "font-[Bebas_Neue] text-3xl tracking-[0.1rem] text-[#ff4757] drop-shadow-[2px_2px_5px_rgba(0,0,0,5)]",
  };
  const logoSpan = {
    text: "Fun",
    className: "text-[#2ed573]",
  };
  const logoComponent = createLogoComponent({ h1: logoH1, span: logoSpan });

  const navlinks = [
    { href: "/index.html#home", label: "Home" },
    { href: "/src/page/games.html", label: "Game" },
    { href: "/src/page/about.html", label: "About" },
  ];
  const navClass = {
    navClass: "inline-block",
    ulClass: "",
    liClass: "mb-[0.5rem]",
    aClass: "font-[Source Sans 3] tracking-[0.1rem] text-[#cccccc] transition-all duration-300 ease-in-out hover:text-[#ff4757]",
  };
  const navComponent = createNavComponent({ links: navlinks, classes: navClass });

  const socialLinks = [
    { href: "#", iClass: "fa-brands fa-facebook text-2xl" },
    { href: "#", iClass: "fa-brands fa-x-twitter text-2xl" },
    { href: "#", iClass: "fa-brands fa-instagram text-2xl" },
  ];

  const socialClass = {
    ulClass: "flex justify-evenly items-center",
    liClass: "w-[2.5rem] h-[2.5rem] flex justify-center items-center rounded-full bg-[#1a1a1a] transition-all duration-300 ease-in-out hover:bg-[#ff4757] hover:translate-y-[-5px]",
    aClass: "flex justify-center items-center text-[#cccccc]",
  };
  const socialLinkComponent = createSocialLinksComponent({ links: socialLinks, classes: socialClass });

  if (footerLogo) {
    footerLogo.appendChild(logoComponent);
  }
  if (footerNav) {
    footerNav.appendChild(navComponent);
  }
  if (footerSocialMedia) {
    footerSocialMedia.appendChild(socialLinkComponent);
  }
}
