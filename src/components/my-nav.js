export function createNavComponent({
  links = [{ href: "", label: "" }],
  classes = {
    navClass: "",
    ulClass: "",
    liClass: "",
    aClass: ""
  },
} = {}) {
  const navElement = document.createElement("nav");
  navElement.className = classes.navClass;

  const ulElement = document.createElement("ul");
  ulElement.className = classes.ulClass;

  links.forEach((element) => {
    const liElement = document.createElement("li");
    liElement.className = classes.liClass;

    const aElement = document.createElement("a");
    aElement.href = element.href;
    aElement.textContent = element.label;
    aElement.className = classes.aClass;

    liElement.appendChild(aElement);
    ulElement.appendChild(liElement);
  });

  navElement.appendChild(ulElement);

  return navElement;
}
