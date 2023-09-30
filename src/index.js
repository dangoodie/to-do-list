import "./style.css";
import DisplayController from "./modules/DisplayController";
import { getProjects } from "./modules/localStorageHandler";
import Project from "./classes/Project";

const localStorageProjects = getProjects();
const projects = [];

localStorageProjects.forEach((project) => {
  projects.push(new Project(project));
});

const Index = () => {
  const container = document.createElement("div");
  container.classList.add("flex");
  container.id = "content";

  return container;
};

document.body.appendChild(Index());

DisplayController({ projects });
