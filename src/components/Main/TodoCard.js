const TodoCard = (todo) => {
  const container = document.createElement("div");
  container.className = "todo-card";
  container.dataset.id = todo.id;

  const title = document.createElement("h4");
  title.className = "todo-title";
  title.textContent = todo.title;

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

  container.append(title, description, dueDate, priority, note, checklist)

  return container;
}

export default TodoCard;