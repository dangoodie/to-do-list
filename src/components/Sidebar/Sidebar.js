import SideBarButton from "./SidebarButton";
import muiAdd from "../../assets/mui_add.svg";

const SideBar = (props) => {
  const container = document.createElement("div");
  container.className = "sidebar";

  const addIcon = new Image();
  addIcon.src = muiAdd;

  const addBtn = { title: "+", id: "add-project", img: addIcon };
  const todayBtn = { title: "Today", id: "today" };
  const weekBtn = { title: "This Week", id: "this-week" };

  container.append(
    SideBarButton(addBtn),
    SideBarButton(todayBtn),
    SideBarButton(weekBtn)
  );

  props.projects.forEach((project) => {
    container.appendChild(SideBarButton(project));
  });

  return container;
};

export default SideBar;
