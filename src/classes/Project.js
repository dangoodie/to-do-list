import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";

class Project {
  constructor(title, description, color) {
    this.title = title;
    this.description = description;
    this.list = [];
    this.color = color;
    this.id = uuidv4();
  }

  addListItem(title, description, dueDate, priority, note, checklist) {
    const newTodo = new Todo(
      title,
      description,
      dueDate,
      priority,
      note,
      checklist
    );
    this.list.push(newTodo);
    return newTodo;
  }
}

export default Project;
