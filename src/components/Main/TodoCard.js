const TodoCard = (todo) => {
  const container = document.createElement("div");
  container.className = "todo-card";
  container.dataset.id = todo.id;

  const title = document.createElement("h4");
  title.classList.add("todo-title");
  title.classList.add("dropdown-btn");
  title.textContent = todo.title;

  const dropdown = document.createElement("div");
  dropdown.className = "dropdown-content hide";

  const description = document.createElement("p");
  description.className = "todo-description";
  description.textContent = todo.description;

  const dueDate = document.createElement("p");
  dueDate.className = "todo-due-date";
  dueDate.textContent = todo.dueDate;

  const priority = document.createElement("p");
  priority.className = "todo-priority";
  priority.textContent = todo.priority;

  const note = document.createElement("p");
  note.className = "todo-note";
  note.textContent = todo.note;

  const checklist = document.createElement("p");
  checklist.className = "todo-checklist";
  checklist.textContent = todo.checklist;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "todo-delete-btn";
  deleteBtn.textContent = "Delete";

  dropdown.append(description, dueDate, priority, note, checklist, deleteBtn);

  container.append(title, dropdown);

  return container;
};

export default TodoCard;
