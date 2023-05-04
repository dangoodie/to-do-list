import Greeting from "./Greeting";
import ProjectCard from "./ProjectCard";
import Project from "../../classes/Project";

const MainContainer = () => {
  const container = document.createElement("div");
  container.className = "main-container";

  container.appendChild(Greeting());

  const projectContainer = document.createElement("div");
  projectContainer.className = "project-container";

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

  const projectB = new Project(
    "Project B",
    "A description of some sort",
    "purple"
  );

  const projectC = new Project(
    "Project C",
    "A description of some sort",
    "cyan"
  );

  projectContainer.appendChild(ProjectCard(projectA));
  projectContainer.appendChild(ProjectCard(projectB));
  projectContainer.appendChild(ProjectCard(projectC));

  container.appendChild(projectContainer);

  return container;
};

export default MainContainer;
