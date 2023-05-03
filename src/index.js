import Todo from "./classes/Todo.js";
import Project from "./classes/Project.js";

function component() {
  const element = document.createElement("div");
  const project = new Project("Title", "A short description"); 

  for (let index = 0; index < 10; index++) {
    const todo = new Todo(index, `this is Todo number ${index}`)
    project.addListItem(todo);
  }
  console.log(project);


  element.textContent = "Hello world!"

  return element;
}

document.body.appendChild(component())
