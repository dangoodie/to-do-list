import SideBarButton from "./SidebarButton";

const SideBar = (props) => {
  const container = document.createElement("div");
  container.className = "sidebar";

  container.append(
    SideBarButton("+"),
    SideBarButton("Today"),
    SideBarButton("This Week")
  );

  props.projects.forEach((project) => {
    container.appendChild(SideBarButton(project.title, project.id))
  });

  return container;
};

export default SideBar;
