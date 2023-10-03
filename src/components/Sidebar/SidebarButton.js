const SideBarButton = (props) => {
  const { title, className, id, img, count } = props;

  const container = document.createElement("div");

  container.className = "sidebar-button";
  if (className !== undefined) container.classList.add(className);

  if (id !== undefined) container.dataset.id = id;

  if (img !== undefined) {
    container.appendChild(img);
  } else {
    const titleElement = document.createElement("p");
    titleElement.textContent = title;
    container.appendChild(titleElement);
  }

  if (count === undefined) return container;

  const counterContainer = document.createElement("div");
  counterContainer.className = "counter-container";

  const counter = document.createElement("p");
  counter.className = "counter-num";
  counter.textContent = count;

  counterContainer.appendChild(counter);
  container.appendChild(counterContainer);

  return container;
};

export default SideBarButton;
