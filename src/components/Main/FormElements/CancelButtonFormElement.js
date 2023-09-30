const CancelButtonFormElement = () => {
  const cancelButton = document.createElement('button');
  cancelButton.type = 'button';
  cancelButton.className = 'cancel-btn';
  cancelButton.textContent = 'Cancel';

  return cancelButton;
};

export default CancelButtonFormElement;
