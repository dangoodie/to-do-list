const SideBarButton = (props) => {
  const {title, id, img} = props;

  const container = document.createElement("div");
  container.className = "sidebar-button";
  if (id !== undefined) container.dataset.id = id;

  if (img !== undefined) {
      container.appendChild(img);
  } else {
      container.textContent = title;
  }
  
  return container;
};

export default SideBarButton;
