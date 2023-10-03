import defaultProjects from "./defaultProjects"; // for testing
import Project from "../classes/Project";

// checks if localStorage is available and returns a boolean
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

// saves an array of projects to localStorage
const saveProjects = (projects) => {
  if (!storageAvailable("localStorage")) {
    throw new Error("localStorage is not available");
  }
  localStorage.setItem("projects", JSON.stringify(projects));
};

// returns an array of projects from localStorage
const getProjects = () => {
  const projects = [];
  // if localStorage is not available, add default projects
  if (!storageAvailable("localStorage")) {
    defaultProjects.forEach((project) => {
      projects.push(project);
    });
    return projects;
  }

  // get projects from localStorage and parse them
  const projectsJSON = localStorage.getItem("projects");
  const parsedProjects = JSON.parse(projectsJSON);

  // if there are no projects in localStorage, add default projects
  if (!parsedProjects || parsedProjects.length === 0) {
    defaultProjects.forEach((project) => {
      projects.push(project);
      saveProjects(projects);
    });
    // if there are projects in localStorage, add them to the projects array
  } else {
    parsedProjects.forEach((project) => {
      // create a new Project object for each project in localStorage
      const tempProject = new Project(project);

      // add each todo item to the project
      project.list.forEach((todo) => {
        tempProject.addListItem(todo);
      });
      // add the Project object to the projects array
      projects.push(tempProject);
    });
  }

  // return the projects array
  return projects;
};

export { getProjects, saveProjects };
