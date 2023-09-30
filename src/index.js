import "./style.css";
import DisplayController from "./DisplayController";
import defaultProjects from "./defaultProjects";

const projects = [];

defaultProjects.forEach((project) => {
  projects.push(project);
});

const Index = () => {
  const container = document.createElement("div");
  container.classList.add("flex");
  container.id = "content";

  return container;
};

document.body.appendChild(Index());

DisplayController({ projects });
