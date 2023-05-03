const SideBarButton = (text) => {
  const container = document.createElement("div");
  container.className = "sidebar-button"
  container.textContent = text;

  return container;
}

export default SideBarButton;