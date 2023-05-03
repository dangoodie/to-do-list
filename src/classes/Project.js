import { v4 as uuidv4 } from "uuid";
import List from "./List";

class Project {
  constructor(title, description, color) {
    this.title = title;
    this.description = description;
    this.list = [];
    this.color = color;
    this.id = uuidv4();
  }

  addListItem(title, description, dueDate, priority, note, checklist) {
    const newList = new List(
      title,
      description,
      dueDate,
      priority,
      note,
      checklist
    );
    this.list.push(newList);
    return newList;
  }
}

export default Project;
