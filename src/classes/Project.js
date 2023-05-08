import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";

class Project {
  constructor(props) {
    this.title = props.title;
    this.description = props.description;
    this.list = [];
    this.dueDate = ""
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
