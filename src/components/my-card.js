export function createCardComponent({
  text = {
    title: "",
    description: "",
  },
  link = { href: "#", label: "Play" },
  classes = {
    divClass: "",
    iClass: "",
    h4Class: "",
    pClass: "",
    aClass: ""
  },
} = {}) {
  const divElement = document.createElement("div");
  divElement.className = classes.divClass;

  const iElement = document.createElement("i");
  iElement.className = classes.iClass;
  divElement.appendChild(iElement);

  const h4Element = document.createElement("h4");
  h4Element.textContent = text.title;
  h4Element.className = classes.h4Class;

  const pElement = document.createElement("p");
  pElement.textContent = text.description;
  pElement.className = classes.pClass;

  divElement.appendChild(h4Element);
  divElement.appendChild(pElement);

  const aElement = document.createElement("a");
  aElement.href = link.href;
  aElement.textContent = link.label;
  aElement.className = classes.aClass;
  divElement.appendChild(aElement);

  return divElement;
}
