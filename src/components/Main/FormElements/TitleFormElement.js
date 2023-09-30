const TitleFormElement = () => {
  const titleDiv = document.createElement("div");

  const titleLabel = document.createElement("label");
  titleLabel.className = "form-label";
  titleLabel.htmlFor = "title";
  titleLabel.textContent = "Title";

  const titleInput = document.createElement("input");
  titleInput.className = "form-input";
  titleInput.name = "title";
  titleInput.type = "text";
  titleInput.id = "title";

  titleDiv.append(titleLabel, titleInput);

  return titleDiv;
};

export default TitleFormElement;
