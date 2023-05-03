import { v4 as uuidv4 } from "uuid";

class Todo {
  constructor(title, description, dueDate, priority, note, checklist) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.note = note;
    this.checklist = checklist;
    this.id = uuidv4();
  }
}

export default Todo;
