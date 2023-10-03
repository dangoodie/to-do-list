import { DateTime } from "luxon";
import Project from "../classes/Project";

const today = DateTime.now().toISO();
const laterThisWeek = DateTime.now().plus({ days: 2 }).toISO();
const nextWeek = DateTime.now().plus({ days: 8 }).toISO();

const defaultProjects = [];

const project1 = new Project({
  title: "Project 1",
  description: "This is project 1",
  dueDate: today,
  priority: "high",
});
const project2 = new Project({
  title: "Project 2",
  description: "This is project 2",
  dueDate: laterThisWeek,
  priority: "medium",
});

const project3 = new Project({
  title: "Project 3",
  description: "This is project 3",
  dueDate: nextWeek,
  priority: "low",
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

defaultProjects.push(project1, project2, project3);

export default defaultProjects;
