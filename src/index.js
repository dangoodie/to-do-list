import "./style.css";
import DisplayController from "./DisplayController";
import { getProjects, saveProjects } from "./localStorageHandler";

const projects = getProjects();
saveProjects(projects);

const Index = () => {
  const container = document.createElement("div");
  container.classList.add("flex");
  container.id = "content";

  return container;
};

document.body.appendChild(Index());

DisplayController({ projects });
