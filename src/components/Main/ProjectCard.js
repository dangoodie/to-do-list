import TodoCard from "./TodoCard";

const ProjectCard = (project) => {
  const container = document.createElement("div");
  container.className = "card";
  container.dataset.id = project.id;

  const title = document.createElement("h3");
  title.className = "card-title";
  title.textContent = project.title;

  const description = document.createElement("p");
  description.className = "card-description";
  description.textContent = project.description;

  const dueDate = document.createElement("p");
  dueDate.className = "card-due-date";
  dueDate.textContent = project.dueDate;

  const priority = document.createElement("p");
  priority.className = "card-priority";
  priority.textContent = project.priority;

  container.append(title, description, dueDate, priority);

  console.log(project);

  project.list.forEach((todo) => {
    container.appendChild(TodoCard(todo));
  });

  return container;
};

export default ProjectCard;
