import "./style.css";
import MainContainer from "./components/Main/MainContainer";
import SideBar from "./components/Sidebar/Sidebar";
import Project from "./classes/Project";

const projects = [];
const projectA = new Project(
  "Project A",
  "A description of some sort",
  "yellow"
);

projectA.addListItem(
  "Todo title",
  "a short todo description",
  "Tomorrow",
  "High",
  "Some notes go here",
  "Checklist"
);

projectA.addListItem(
  "Todo title",
  "a short todo description",
  "Tomorrow",
  "High",
  "Some notes go here",
  "Checklist"
);

const Index = () => {
  const container = document.createElement("div");
  container.classList.add("flex");
  container.id = "content";

  container.appendChild(SideBar({ projects }));
  container.appendChild(MainContainer({ projects }));

  return container;
};

document.body.appendChild(Index());

const newProject = document.querySelector('[data-id="add-project"]');

function handleAddProject(e) {
  projects.push(projectA);

  const container = document.querySelector("#content");
  container.innerHTML = "";
  container.appendChild(SideBar({ projects }));
  container.appendChild(MainContainer({ projects }));

  const newProject = document.querySelector('[data-id="add-project"]');
  newProject.addEventListener("click", handleAddProject);
}

newProject.addEventListener("click", handleAddProject);
