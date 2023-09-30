const SubmitFormElement = () => {
  const submitBtn = document.createElement("button");

  submitBtn.type = "submit";
  submitBtn.textContent = "Submit";

  return submitBtn;
}

export default SubmitFormElement;