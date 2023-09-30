const DescriptionFormElement = () => {
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

  return descriptionDiv;
};

export default DescriptionFormElement;
