import MainContainer from "./components/Main/MainContainer";
import SideBar from "./components/Sidebar/Sidebar";
import Project from "./classes/Project";
import Modal from "./components/Main/Modal";

const DisplayController = (props) => {
  const { projects } = props;
  const contentDiv = document.querySelector("#content");

  // Initial build on load
  function updateDisplay() {
    contentDiv.innerHTML = "";
    contentDiv.appendChild(SideBar({ projects }));
    contentDiv.appendChild(MainContainer({ projects }));
    contentDiv.appendChild(Modal());
  }
  updateDisplay();

  // Handles new project button
  const newProjectBtn = document.querySelector(".add-project");

  function handleAddBtn() {
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
  newProjectForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const modalBg = document.querySelector(".modal-bg");
    modalBg.classList.remove("show");

    const data = new FormData(e.target);
    const values = Object.fromEntries(data.entries());

    const newProject = new Project(values);
    projects.push(newProject);
    updateDisplay();
  });
};

export default DisplayController;
