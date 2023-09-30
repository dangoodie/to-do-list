import MainContainer from "./components/Main/MainContainer";
import SideBar from "./components/Sidebar/Sidebar";
import Project from "./classes/Project";
import Modal from "./components/Main/Modal";
import { saveProjects } from "./localStorageHandler";

const DisplayController = (props) => {
  const { projects } = props;
  const contentDiv = document.querySelector("#content");

  function updateDisplay() {
    contentDiv.innerHTML = "";
    contentDiv.appendChild(SideBar({ projects }));
    contentDiv.appendChild(MainContainer({ projects }));
    contentDiv.appendChild(Modal());

    const newProjectBtn = document.querySelector(".add-project");

    // Handles new project button
    function handleAddBtn(event) {
      event.preventDefault();

      const modalBg = document.querySelector(".modal-bg");
      modalBg.classList.add("show");

      const modalClose = document.querySelector(".close-btn");
      modalClose.addEventListener("click", () => {
        modalBg.classList.remove("show");
      });
    }
    newProjectBtn.addEventListener("click", handleAddBtn);

    // Handles new project data
    const newProjectForm = document.querySelector("form");
    newProjectForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const modalBg = document.querySelector(".modal-bg");
      modalBg.classList.remove("show");

      const data = new FormData(event.target);
      const values = Object.fromEntries(data.entries());
      const newProject = new Project(values);
      projects.push(newProject);
      saveProjects(projects);
      updateDisplay();
    });

    // Handles project card close button
    const closeBtns = document.querySelectorAll(".close-btn");
    closeBtns.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();

        const card = btn.closest(".card");
        const { id } = card.dataset;
        const index = projects.findIndex((project) => project.id === id);
        projects.splice(index, 1);
        saveProjects(projects);
        updateDisplay();
      });
    });

    // Handles add todo button
    const addTodoBtns = document.querySelectorAll(".add-todo");
    addTodoBtns.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        console.log("clicked");
        event.preventDefault();
      });
    });
  }
  updateDisplay();
};

export default DisplayController;
