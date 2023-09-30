import muiClose from "../../assets/mui_close.svg";

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

  const titleDiv = document.createElement("div");

  const titleLabel = document.createElement("label");
  titleLabel.className = "modal-label";
  titleLabel.htmlFor = "title";
  titleLabel.textContent = "Title";

  const titleInput = document.createElement("input");
  titleInput.className = "modal-input";
  titleInput.name = "title";
  titleInput.type = "text";
  titleInput.id = "title";

  titleDiv.append(titleLabel, titleInput);

  const descriptionDiv = document.createElement("div");

  const descriptionLabel = document.createElement("label");
  descriptionLabel.className = "modal-label";
  descriptionLabel.htmlFor = "description";
  descriptionLabel.textContent = "Description";

  const descriptionInput = document.createElement("textarea");
  descriptionInput.name = "description";
  descriptionInput.rows = "5";
  descriptionInput.className = "modal-input";
  descriptionInput.id = "description";

  descriptionDiv.append(descriptionLabel, descriptionInput);

  const dueDateDiv = document.createElement("div");

  const dueDateLabel = document.createElement("label");
  dueDateLabel.className = "modal-label";
  dueDateLabel.htmlFor = "due-date";
  dueDateLabel.textContent = "Due Date";

  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.className = "modal-input";
  dueDateInput.id = "due-date";
  dueDateInput.name = "dueDate";

  dueDateDiv.append(dueDateLabel, dueDateInput);

  const priorityDiv = document.createElement("div");

  const priorityLabel = document.createElement("label");
  priorityLabel.className = "modal-label";
  priorityLabel.htmlFor = "priority";
  priorityLabel.textContent = "Priority";

  const priorityInput = document.createElement("select");
  priorityInput.className = "modal-input";
  priorityInput.id = "priority";
  priorityInput.name = "priority";

  const option1 = document.createElement("option");
  option1.value = "low";
  option1.textContent = "Low";

  const option2 = document.createElement("option");
  option2.value = "medium";
  option2.textContent = "Medium";

  const option3 = document.createElement("option");
  option3.value = "high";
  option3.textContent = "High";

  priorityInput.append(option1, option2, option3);

  priorityDiv.append(priorityLabel, priorityInput);

  const submitBtn = document.createElement("button");
  submitBtn.className = "modal-submit";
  submitBtn.type = "submit";
  submitBtn.textContent = "Submit";

  form.append(titleDiv, descriptionDiv, dueDateDiv, priorityDiv, submitBtn);

  modalDiv.append(closeBtn, heading, form);

  return container;
};

export default Modal;
