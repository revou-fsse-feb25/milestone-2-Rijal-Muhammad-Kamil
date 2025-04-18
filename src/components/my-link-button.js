export function createLinkButtonComponent({
  href = "",
  label = "",
  iClass = "",
  aClass = ""
} = {}) {
  const aElement = document.createElement("a");
  aElement.href = href;
  aElement.className = aClass;

  if (iClass) {
    const iElement = document.createElement("i");
    iElement.className = iClass;
    aElement.appendChild(iElement);
  }

  if (label) {
    aElement.append(label);
  }

  return aElement;
}
