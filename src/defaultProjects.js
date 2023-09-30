import Project from "./classes/Project";

const defaultProjects = [
  new Project({
    title: "Project 1",
    description: "This is project 1",
    dueDate: "2023-09-30",
    priority: "high",
    todos: [],
  }),
  new Project({
    title: "Project 2",
    description: "This is project 2",
    dueDate: "2023-10-27",
    priority: "medium",
    todos: [],
  }),
];

export default defaultProjects;
