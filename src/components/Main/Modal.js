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
  form.action = "#"

  const titleDiv = document.createElement("div");

  const titleLabel = document.createElement("label");
  titleLabel.className = "modal-label";
  titleLabel.htmlFor = "title";
  titleLabel.textContent = "Title";

  const titleInput = document.createElement("input");
  titleInput.className = "modal-input";
  titleInput.type = "text";
  titleInput.id = "title";

  titleDiv.append(titleLabel, titleInput);  

  const descriptionDiv = document.createElement("div");

  const descriptionLabel = document.createElement("label");
  descriptionLabel.className = "modal-label";
  descriptionLabel.htmlFor = "description";
  descriptionLabel.textContent = "Description";

  const descriptionInput = document.createElement("textarea");
  descriptionInput.rows = "5"
  descriptionInput.className = "modal-input";
  descriptionInput.id = "description";

  const submitBtn = document.createElement("button");
  submitBtn.className = "modal-submit"
  submitBtn.type = "submit"
  submitBtn.textContent = "Submit"

  descriptionDiv.append(descriptionLabel, descriptionInput, submitBtn);  

  form.append(titleDiv, descriptionDiv);

  modalDiv.append(closeBtn, heading, form);

  return container;
};

export default Modal;
