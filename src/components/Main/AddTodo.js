import muiClose from "../../assets/mui_close.svg";

const AddTodo = () => {
  const container = document.createElement("div");
  container.className = "add-todo";

  const closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.className = "close-btn";

  const closeImg = new Image();
  closeImg.src = muiClose;
  closeImg.className = "add-todo-close";
  closeBtn.appendChild(closeImg);

  const title = document.createElement("h3");
  title.className = "add-todo-heading";
  title.textContent = "Create a new todo";

  const form = document.createElement("form");
  form.className = "add-todo-form";

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
}

export default AddTodo;