function component() {
  const element = document.createElement("div");


  element.textContent = "Hello world!"

  return element;
}

document.body.appendChild(component())
