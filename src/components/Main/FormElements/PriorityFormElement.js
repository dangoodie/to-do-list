const PriorityFormElement = () => {
  const priorityDiv = document.createElement("div");

  const priorityLabel = document.createElement("label");
  priorityLabel.className = "form-label";
  priorityLabel.htmlFor = "priority";
  priorityLabel.textContent = "Priority";

  const priorityInput = document.createElement("select");
  priorityInput.className = "form-input";
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

  return priorityDiv;
};

export default PriorityFormElement;
