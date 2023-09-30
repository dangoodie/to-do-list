import Project from "../classes/Project";

const defaultProjects = [];

const project1 = new Project({
  title: "Project 1",
  description: "This is project 1",
  dueDate: "2023-09-30",
  priority: "high",
});
const project2 = new Project({
  title: "Project 2",
  description: "This is project 2",
  dueDate: "2023-10-27",
  priority: "medium",
});

project1.addListItem({
  title: "Todo 1",
  description: "This is todo 1",
  dueDate: "2023-09-30",
  priority: "high",
  note: "This is a note",
  checklist: ["Item 1", "Item 2", "Item 3"],
});

project1.addListItem({
  title: "Todo 2",
  description: "This is todo 2",
  dueDate: "2023-09-30",
  priority: "high",
  note: "This is a note",
  checklist: ["Item 1", "Item 2", "Item 3"],
});

project1.addListItem({
  title: "Todo 3",
  description: "This is todo 3",
  dueDate: "2023-09-30",
  priority: "high",
  note: "This is a note",
  checklist: ["Item 1", "Item 2", "Item 3"],
});

project2.addListItem({
  title: "Todo 1",
  description: "This is todo 1",
  dueDate: "2023-09-30",
  priority: "high",
  note: "This is a note",
  checklist: ["Item 1", "Item 2", "Item 3"],
});

defaultProjects.push(project1, project2);

export default defaultProjects;
