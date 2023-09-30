import "./style.css";
import DisplayController from "./DisplayController";
import populateProjects from "./localStorageHandler";

const projects = populateProjects();


const Index = () => {
  const container = document.createElement("div");
  container.classList.add("flex");
  container.id = "content";

  return container;
};

document.body.appendChild(Index());

DisplayController({ projects });
