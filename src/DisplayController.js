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
    
    const newProjectBtn = document.querySelector(".add-project");

    // Handles new project button
    function handleAddBtn(event) {
      event.preventDefault();
      // Remove event listener to prevent multiple triggers
      newProjectBtn.removeEventListener("click", handleAddBtn);

      const modalBg = document.querySelector(".modal-bg");
      modalBg.classList.add("show");

      const modalClose = document.querySelector(".close-btn");
      modalClose.addEventListener("click", () => {
        modalBg.classList.remove("show");

        // Add event listener back to new project button
        newProjectBtn.addEventListener("click", handleAddBtn);
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
      updateDisplay();

      // Add event listener back to new project button
      newProjectBtn.addEventListener("click", handleAddBtn);
    });
  }
  updateDisplay();
};

export default DisplayController;
