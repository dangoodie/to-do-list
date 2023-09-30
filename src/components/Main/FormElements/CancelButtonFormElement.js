const CancelButtonFormElement = () => {
  const cancelButton = document.createElement('button');
  cancelButton.type = 'button';
  cancelButton.className = 'form-cancel';
  cancelButton.textContent = 'Cancel';

  return cancelButton;
};

export default CancelButtonFormElement;
