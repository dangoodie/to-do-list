import TodoCard from "./TodoCard";
import muiClose from "../../assets/mui_close.svg";


const ProjectCard = (project) => {
  const container = document.createElement("div");
  container.className = "card";
  container.dataset.id = project.id;

  const closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.className = "close-btn";

  const closeImg = new Image();
  closeImg.src = muiClose;
  closeImg.className = "card-close";
  closeBtn.appendChild(closeImg);

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

  container.append(closeBtn, title, description, dueDate, priority);

  project.list.forEach((todo) => {
    container.appendChild(TodoCard(todo));
  });

  const addTodoBtn = document.createElement("button");
  addTodoBtn.type = "button";
  addTodoBtn.className = "add-todo";
  addTodoBtn.textContent = "+ Add Todo";
  container.appendChild(addTodoBtn);

  return container;
};

export default ProjectCard;
