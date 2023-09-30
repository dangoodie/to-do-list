import TitleFormElement from "./FormElements/TitleFormElement";
import DescriptionFormElement from "./FormElements/DescriptionFormElement";
import DueDateFormElement from "./FormElements/DueDateFormElement";
import PriorityFormElement from "./FormElements/PriorityFormElement";
import SubmitFormElement from "./FormElements/SubmitFormElement";
import CancelButtonFormElement from "./FormElements/CancelButtonFormElement";

const AddTodoForm = () => {
  const container = document.createElement("div");
  container.className = "add-todo";

  const title = document.createElement("h3");
  title.className = "add-todo-heading";
  title.textContent = "Create a new todo";

  const form = document.createElement("form");
  form.className = "add-todo-form";

  const titleDiv = TitleFormElement();
  const descriptionDiv = DescriptionFormElement();
  const dueDateDiv = DueDateFormElement();
  const priorityDiv = PriorityFormElement();
  const submitBtn = SubmitFormElement();
  const cancelBtn = CancelButtonFormElement();

  form.append(
    titleDiv,
    descriptionDiv,
    dueDateDiv,
    priorityDiv,
    submitBtn,
    cancelBtn
  );

  container.append(title, form);

  return container;
};

export default AddTodoForm;
