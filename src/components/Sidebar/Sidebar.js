import SidebarButton from "./SidebarButton";
import muiAdd from "../../assets/mui_add.svg";
import SearchBar from "./SearchBar";
import Logo from "./Logo";

const SideBar = (props) => {
  const container = document.createElement("div");
  container.className = "sidebar";

  const logo = Logo();

  const searchBar = SearchBar();

  const addIcon = new Image();
  addIcon.src = muiAdd;

  const addBtn = { title: "+", className: "add-project", img: addIcon };
  const allBtn = { title: "All", className: "all-projects" };
  const todayBtn = { title: "Today", className: "today-projects" };
  const weekBtn = { title: "This Week", className: "this-week-projects" };

  container.append(
    logo,
    searchBar,
    SidebarButton(addBtn),
    SidebarButton(allBtn),
    SidebarButton(todayBtn),
    SidebarButton(weekBtn)
  );

  props.projects.forEach((project) => {
    const count = project.getListLength();
    const newProject = { ...project, className: "project-btn", count };
    container.appendChild(SidebarButton(newProject));
  });

  return container;
};

export default SideBar;
