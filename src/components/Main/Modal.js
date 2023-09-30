import muiClose from "../../assets/mui_close.svg";
import DescriptionFormElement from "./FormElements/DescriptionFormElement";
import DueDateFormElement from "./FormElements/DueDateFormElement";
import TitleFormElement from "./FormElements/TitleFormElement";
import PriorityFormElement from "./FormElements/PriorityFormElement";
import SubmitFormElement from "./FormElements/SubmitFormElement";

const Modal = () => {
  const container = document.createElement("div");
  container.className = "modal-bg";

  const modalDiv = document.createElement("div");
  modalDiv.className = "modal-container";
  container.appendChild(modalDiv);

  const closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.className = "close-btn";

  const closeImg = new Image();
  closeImg.src = muiClose;
  closeImg.className = "modal-close";
  closeBtn.appendChild(closeImg);

  const heading = document.createElement("h3");
  heading.className = "modal-heading";
  heading.textContent = "Create a new project";

  const form = document.createElement("form");
  form.className = "modal-form";

  const titleDiv = TitleFormElement();
  titleDiv.className = "modal-title";

  const descriptionDiv = DescriptionFormElement();
  descriptionDiv.className = "modal-description";

  const dueDateDiv = DueDateFormElement();
  dueDateDiv.className = "modal-due-date";

  const priorityDiv = PriorityFormElement();
  priorityDiv.className = "modal-priority";

  const submitBtn = SubmitFormElement();
  submitBtn.className = "modal-submit";

  form.append(titleDiv, descriptionDiv, dueDateDiv, priorityDiv, submitBtn);

  modalDiv.append(closeBtn, heading, form);

  return container;
};

export default Modal;
