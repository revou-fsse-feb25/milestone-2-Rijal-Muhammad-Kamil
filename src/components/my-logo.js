export function createLogoComponent({
  h1 = {
    text: "",
    className: "",
  },
  span = {
    text: "",
    className: ""
  },
} = {}) {
  const h1Element = document.createElement("h1");
  h1Element.textContent = h1.text;
  h1Element.className = h1.className;

  const spanElement = document.createElement("span");
  spanElement.textContent = span.text;
  spanElement.className = span.className;

  h1Element.appendChild(spanElement);

  return h1Element;
}
