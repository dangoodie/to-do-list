const DueDateFormElement = () => {
  const dueDateDiv = document.createElement("div");

  const dueDateLabel = document.createElement("label");
  dueDateLabel.className = "form-label";
  dueDateLabel.htmlFor = "due-date";
  dueDateLabel.textContent = "Due Date";

  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.className = "form-input";
  dueDateInput.id = "due-date";
  dueDateInput.name = "dueDate";

  dueDateDiv.append(dueDateLabel, dueDateInput);

  return dueDateDiv;
};

export default DueDateFormElement;
