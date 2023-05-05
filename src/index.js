import "./style.css";
import Project from "./classes/Project";
import DisplayController from "./DisplayController";

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

projects.push(projectA);

const Index = () => {
  const container = document.createElement("div");
  container.classList.add("flex");
  container.id = "content";

  return container;
};

document.body.appendChild(Index());

DisplayController({ projects });