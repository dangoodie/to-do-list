const SideBarButton = (text, id) => {
  const container = document.createElement("div");
  container.className = "sidebar-button";
  if (id !== undefined) container.dataset.id = id;
  container.textContent = text;

  return container;
};

export default SideBarButton;
