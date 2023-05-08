const SideBarButton = (props) => {
  const { title, className, id, img } = props;

  const container = document.createElement("div");
  
  container.className = "sidebar-button";
  if (className !== undefined) container.classList.add(className);

  if (id !== undefined) container.dataset.id = id;

  if (img !== undefined) {
    container.appendChild(img);
  } else {
    container.textContent = title;
  }

  return container;
};

export default SideBarButton;
