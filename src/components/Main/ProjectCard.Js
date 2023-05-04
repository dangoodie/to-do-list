const ProjectCard = (project) => {
  const container = document.createElement("div");
  container.classList.add("card")

  const title = document.createElement("h3");
  title.className = "card-title";
  title.textContent = project.title;

  container.append(title);

  return container;
};

export default ProjectCard;
