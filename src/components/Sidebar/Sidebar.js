import SidebarButton from "./SidebarButton";
import muiAdd from "../../assets/mui_add.svg";

const SideBar = (props) => {
  const container = document.createElement("div");
  container.className = "sidebar";

  const addIcon = new Image();
  addIcon.src = muiAdd;

  const addBtn = { title: "+", className: "add-project", img: addIcon };
  const todayBtn = { title: "Today", className: "today" };
  const weekBtn = { title: "This Week", className: "this-week" };

  container.append(
    SidebarButton(addBtn),
    SidebarButton(todayBtn),
    SidebarButton(weekBtn)
  );

  props.projects.forEach((project) => {
    container.appendChild(SidebarButton(project));
  });

  return container;
};

export default SideBar;
