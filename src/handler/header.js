const toggleMenuButton = () => {
  const headerButton = document.getElementById("header__button");
  const iElement = headerButton.querySelector("i");
  iElement.classList.toggle("fa-xmark");
};

const toggleFloatingNav = () => {
  const header__FloatingNav = document.getElementById("header__FloatingNav");
  header__FloatingNav.classList.toggle("scale-100");
};

let lastSrcollTop = 0;
const toggleHeader = () => {
  const header = document.getElementById("header");
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastSrcollTop && scrollTop > 100) {
    header.classList.add("translate-y-[-100%]");
  } else {
    header.classList.remove("translate-y-[-100%]");
  }
  lastSrcollTop = scrollTop;
};

export { toggleMenuButton, toggleFloatingNav, toggleHeader };
