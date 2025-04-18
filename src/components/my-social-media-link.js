export function createSocialLinksComponent({
  links = [
    { href: "", iClass: "" },
    { href: "", iClass: "" },
    { href: "", iClass: "" },
  ],
  classes = {
    ulClass: "",
    liClass: "",
    aClass: ""
  },
} = {}) {
  const ulElement = document.createElement("ul");
  ulElement.className = classes.ulClass;

  links.forEach((link) => {
    const liElement = document.createElement("li");
    liElement.className = classes.liClass;

    const aElement = document.createElement("a");
    aElement.href = link.href;
    aElement.className = classes.aClass;

    const iElement = document.createElement("i");
    iElement.className = link.iClass;

    aElement.appendChild(iElement);
    liElement.appendChild(aElement);
    ulElement.appendChild(liElement);
  });

  return ulElement;
}
