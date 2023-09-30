import defaultProjects from "./defaultProjects"; // for testing

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

// returns an array of projects from localStorage
const getProjects = () => {
  if (!storageAvailable("localStorage")) {
    return [];
  }

  const projects = [];
  const projectsJSON = localStorage.getItem("projects");

  const parsedProjects = JSON.parse(projectsJSON);

  if (!parsedProjects || parsedProjects.length === 0) {
    defaultProjects.forEach((project) => {
      projects.push(project);
    });
  } else {
    parsedProjects.forEach((project) => {
      projects.push(project);
    });
  }

  return projects;
};

// saves an array of projects to localStorage
const saveProjects = (projects) => {
  if (!storageAvailable("localStorage")) {
    return;
  }

  localStorage.setItem("projects", JSON.stringify(projects));
};

export { getProjects, saveProjects };
