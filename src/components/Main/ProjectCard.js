import TodoCard from "./TodoCard";

const ProjectCard = (project) => {
  const container = document.createElement("div");
  container.className = "card"
  container.dataset.id = project.id;

  const title = document.createElement("h3");
  title.className = "card-title";
  title.textContent = project.title;

  const description = document.createElement("p");
  description.className = "card-description";
  description.textContent = project.description;

  container.append(title, description);

  project.list.forEach(todo => {
    container.appendChild(TodoCard(todo));
  });

  

  return container;
};

export default ProjectCard;
