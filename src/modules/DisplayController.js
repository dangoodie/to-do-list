import MainContainer from "../components/Main/MainContainer";
import SideBar from "../components/Sidebar/Sidebar";
import Project from "../classes/Project";
import Modal from "../components/Main/Modal";
import { saveProjects } from "./localStorageHandler";
import AddTodoForm from "../components/Main/AddTodo";
import setActive from "./activeHandler";

const DisplayController = (props) => {
  const { projects } = props;
  const contentDiv = document.querySelector("#content");

  let displayProjects = [projects[0]];

  function updateDisplay() {
    contentDiv.innerHTML = "";
    contentDiv.appendChild(SideBar({ projects }));
    contentDiv.appendChild(MainContainer({ projects: displayProjects }));
    contentDiv.appendChild(Modal());

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

      displayProjects = [newProject];
      updateDisplay();
      setActive(newProject);
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

        if (projects.length === 0) {
          displayProjects = [];
        } else {
          displayProjects = [projects[0]];
        }

        saveProjects(projects);
        updateDisplay();

        setActive(displayProjects[0]);
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

    // Handles delete todo button
    const deleteTodoBtns = document.querySelectorAll(".todo-delete-btn");
    deleteTodoBtns.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();

        const card = btn.closest(".todo-card");
        const { id } = card.dataset;
        const projectCard = card.closest(".card");
        const { id: projectId } = projectCard.dataset;
        const project = projects.find((proj) => proj.id === projectId);
        project.removeListItem(id);
        saveProjects(projects);

        updateDisplay();
      });
    });

    // Dropdown Controller for Todo Cards
    const todoCards = document.querySelectorAll(".todo-card");
    todoCards.forEach((card) => {
      const dropdownBtn = card.querySelector(".dropdown-btn");
      dropdownBtn.addEventListener("click", (event) => {
        event.preventDefault();

        const dropdownContent = card.querySelector(".dropdown-content");
        dropdownContent.classList.toggle("hide");
      });
    });

    // Sidebar button functions

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

    // // Handles All Projects button
    // const allProjectsBtn = document.querySelector(".all-projects");
    // allProjectsBtn.addEventListener("click", (event) => {
    //   event.preventDefault();

    //   displayProjects = projects;
    //   updateDisplay();

    //   setActive(".all-projects");
    // });

    // // Handle Today Projects button
    // const todayProjectsBtn = document.querySelector(".today-projects");
    // todayProjectsBtn.addEventListener("click", (event) => {
    //   event.preventDefault();

    //   displayProjects = projects.filter((project) => {
    //     const { dueDate } = project;
    //     const diff = dueDate.diffNow("days").toObject();
    //     return diff.days < 1;
    //   });

    //   updateDisplay();

    //   setActive(".today-projects");
    // });

    // // Handle This Week Projects button
    // const thisWeekProjectsBtn = document.querySelector(".this-week-projects");
    // thisWeekProjectsBtn.addEventListener("click", (event) => {
    //   event.preventDefault();

    //   displayProjects = projects.filter((project) => {
    //     const { dueDate } = project;
    //     const diff = dueDate.diffNow("days").toObject();
    //     return diff.days <= 7;
    //   });

    //   updateDisplay();

    //   setActive(".this-week-projects");
    // });

    // Handles Individual Project buttons
    const projectBtns = document.querySelectorAll(".project-btn");
    projectBtns.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();

        const { id } = btn.dataset;
        const project = projects.find((proj) => proj.id === id);
        displayProjects = [project];

        updateDisplay();
        setActive(project);
      });
    });
  }

  // Initial display
  updateDisplay();

  // set First project as default active button
  setActive(displayProjects[0]);
};

export default DisplayController;
