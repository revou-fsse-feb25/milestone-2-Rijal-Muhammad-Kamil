export function createButtonComponent({
  label = "",
  iClass = "",
  buttonClass = ""
} = {}) {
  const buttonElement = document.createElement("button");
  buttonElement.className = buttonClass;

  if (iClass) {
    const iElement = document.createElement("i");
    iElement.className = iClass;
    buttonElement.appendChild(iElement);
  }

  if (label) {
    buttonElement.append(label);
  }

  return buttonElement;
}
