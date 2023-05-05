import SideBarButton from "./SidebarButton";

const SideBar = (props) => {
  const container = document.createElement("div");
  container.className = "sidebar";

  container.append(
    SideBarButton("+", "add-project"),
    SideBarButton("Today", "today"),
    SideBarButton("This Week", "this-week")
  );

  props.projects.forEach((project) => {
    container.appendChild(SideBarButton(project.title, project.id))
  });

  return container;
};

export default SideBar;
