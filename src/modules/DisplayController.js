import MainContainer from "../components/Main/MainContainer";
import SideBar from "../components/Sidebar/Sidebar";
import Project from "../classes/Project";
import Modal from "../components/Main/Modal";
import { saveProjects } from "./localStorageHandler";
import AddTodoForm from "../components/Main/AddTodo";

const DisplayController = (props) => {
  const { projects } = props;
  const contentDiv = document.querySelector("#content");

  function updateDisplay() {
    contentDiv.innerHTML = "";
    contentDiv.appendChild(SideBar({ projects }));
    contentDiv.appendChild(MainContainer({ projects }));
    contentDiv.appendChild(Modal());

    // Handles new project button
    function handleAddBtn(event) {
      event.preventDefault();

      const modalBg = document.querySelector(".modal-bg");
      modalBg.classList.add("show");

      const modalClose = document.querySelector(".modal-close-btn");
      modalClose.addEventListener("click", () => {
        modalBg.classList.remove("show");
      });
    }
    
    const newProjectBtn = document.querySelector(".add-project");
    newProjectBtn.addEventListener("click", handleAddBtn);

    // Handles new project data from modal
    const newProjectForm = document.querySelector(".modal-form");
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
    const closeBtns = document.querySelectorAll(".project-close-btn");
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
        event.preventDefault();

        btn.classList.add("hide");

        const projectCard = btn.closest(".card");
        const addTodoForm = AddTodoForm();
        projectCard.appendChild(addTodoForm);

        const cancelBtn = document.querySelector(".cancel-btn");
        cancelBtn.addEventListener("click", (e) => {
          e.preventDefault();

          btn.classList.remove("hide");
          addTodoForm.remove();
        });

        const submitBtn = document.querySelector(".form-submit");
        submitBtn.addEventListener("click", (e) => {
          e.preventDefault();

          const form = e.target.closest("form");
          const data = new FormData(form);
          const values = Object.fromEntries(data.entries());
          const { id } = projectCard.dataset;
          const project = projects.find((proj) => proj.id === id);
          project.addListItem(values);
          saveProjects(projects);
          updateDisplay();
        });
      });
    });
  }
  updateDisplay();
};

export default DisplayController;