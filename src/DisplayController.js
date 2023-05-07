import MainContainer from "./components/Main/MainContainer";
import SideBar from "./components/Sidebar/Sidebar";
import Project from "./classes/Project";
import Modal from "./components/Main/Modal";

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
  contentDiv.appendChild(Modal());

  // Handles adding of new projects
  let newProject = document.querySelector('[data-id="add-project"]');

  function handleAddBtn() {
    const modalBg = document.querySelector(".modal-bg")
    modalBg.classList.add("show");

    const modalClose = document.querySelector(".close-btn")
    modalClose.addEventListener("click", (e) => {
      modalBg.classList.remove("show");
    })
  }

  newProject.addEventListener("click", handleAddBtn);
};

export default DisplayController;
