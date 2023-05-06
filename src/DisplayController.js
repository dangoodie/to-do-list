import MainContainer from './components/Main/MainContainer';
import SideBar from './components/Sidebar/Sidebar';
import Project from './classes/Project';

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

const DisplayController = (props) => {
  const { projects } = props;
  const contentDiv = document.querySelector("#content");

  // Initial build on load
  contentDiv.appendChild(SideBar({ projects }));
  contentDiv.appendChild(MainContainer({ projects }));

  // Handles adding of new projects
  let newProject = document.querySelector('[data-id="add-project"]');

  function handleAddProject(e) {
    projects.push(projectA);

    contentDiv.innerHTML = "";
    contentDiv.appendChild(SideBar({ projects }));
    contentDiv.appendChild(MainContainer({ projects }));

    newProject = document.querySelector('[data-id="add-project"]');
    newProject.addEventListener("click", handleAddProject);
  }

  newProject.addEventListener("click", handleAddProject);
};

export default DisplayController;
