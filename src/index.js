import "./style.css";
import Project from "./classes/Project";
import DisplayController from "./DisplayController";

const projects = [];

const Index = () => {
  const container = document.createElement("div");
  container.classList.add("flex");
  container.id = "content";

  return container;
};

document.body.appendChild(Index());

DisplayController({ projects });