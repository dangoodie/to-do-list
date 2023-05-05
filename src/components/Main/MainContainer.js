import Greeting from "./Greeting";
import ProjectCard from "./ProjectCard";


const MainContainer = (props) => {
  const container = document.createElement("div");
  container.className = "main-container";

  container.appendChild(Greeting());

  const projectContainer = document.createElement("div");
  projectContainer.className = "project-container";

  props.projects.forEach(project => {
    projectContainer.appendChild(ProjectCard(project));
  });

  container.appendChild(projectContainer);

  return container;
};

export default MainContainer;
