import { v4 as uuidv4 } from "uuid";
import { DateTime } from "luxon";
import Todo from "./Todo";


class Project {
  constructor(props) {
    this.title = props.title;
    this.description = props.description;
    this.dueDate = DateTime.fromISO(props.dueDate).toISO();
    this.priority = props.priority;
    this.list = [];
    this.id = uuidv4();
  }
  
  addListItem(props) {
    const { title, description, dueDate, priority, note, checklist } = props;
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

  removeListItem(id) {
    this.list = this.list.filter((todo) => todo.id !== id);
  }
}

export default Project;
