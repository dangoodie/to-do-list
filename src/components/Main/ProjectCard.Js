const ProjectCard = (project) => {
  const container = document.createElement("div");
  container.className = "project-card";

  const title = document.createElement("div");
  title.className = "project-card-title"
  title.textContent = project.title;


  container.append(title);

  return container;
}

export default ProjectCard;