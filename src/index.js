import List from "./classes/List";
import Project from "./classes/Project";

function component() {
  const element = document.createElement("div");
  const project = new Project("Title", "A short description"); 

  for (let index = 0; index < 10; index++) {
    const list = new List(index, `this is List number ${index}`)
    project.addListItem(list);
  }
  console.log(project);


  element.textContent = "Hello world!"

  return element;
}

document.body.appendChild(component())
