const SubmitFormElement = () => {
  const submitBtn = document.createElement("button");
  submitBtn.className = "form-submit";
  submitBtn.type = "submit";
  submitBtn.textContent = "Submit";

  return submitBtn;
}

export default SubmitFormElement;