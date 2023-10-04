function setActiveProjectText(name) {
  const display = document.querySelector(".title");
  display.textContent = name;
}

// set active across display for a given project

function setActive(project) {
  if (!project) return;
  
  const projectBtns = document.querySelectorAll(".project-btn");

  // set active button
  projectBtns.forEach((btn) => {
    // find button with matching id
    if (btn.dataset.id === project.id) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  setActiveProjectText(project.title);
}

export default setActive;