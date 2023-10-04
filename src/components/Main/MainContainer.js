import ProjectCard from "./ProjectCard";
import TopSection from "./TopSection";

const MainContainer = (props) => {
  const container = document.createElement("div");
  container.className = "main-container";

  container.appendChild(TopSection());

  const projectContainer = document.createElement("div");
  projectContainer.className = "project-container";

  props.projects.forEach((project) => {
    projectContainer.appendChild(ProjectCard(project));
  });

  container.appendChild(projectContainer);

  return container;
};

export default MainContainer;
