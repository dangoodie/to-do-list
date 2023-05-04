import SideBarButton from "./SidebarButton";

const SideBar = () => {
  const container = document.createElement("div");
  container.className = "sidebar";

  container.append(
    SideBarButton("+"),
    SideBarButton("Today"),
    SideBarButton("This Week"),
    SideBarButton("Project A"),
    SideBarButton("Project B"),
    SideBarButton("Project C")
  );

  return container;
};

export default SideBar;
