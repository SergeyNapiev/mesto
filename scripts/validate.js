const hiddenError = (errorElement, submitSelector, inputErrorClass, errorClass) => {
  errorElement.innerText = '';
  submitSelector.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
}
  
const showError = (submitSelector, errorElement, message, inputErrorClass, errorClass) => {
  errorElement.innerText = message;
  submitSelector.classList.add(inputErrorClass);
  errorElement.classList.add(errorClass);
}
  
  
const toggleInputState = (submitSelector, options) => {
  const {inputSectionsSelector, inputErrorSelector, inputErrorClass, errorClass} = options;
  const isValid = submitSelector.validity.valid;
  const inputSectionElenemt = submitSelector.closest(inputSectionsSelector);
  const errorElement = inputSectionElenemt.querySelector(inputErrorSelector);
  if (isValid) {
    hiddenError(errorElement, submitSelector, inputErrorClass, errorClass);
  } else {
    showError(submitSelector, errorElement, submitSelector.validationMessage, inputErrorClass, errorClass);
  }
}
  
const enableButton = (buttonSubmitElement, inactiveButtonClass) => {
  buttonSubmitElement.removeAttribute('disabled');
  buttonSubmitElement.classList.remove(inactiveButtonClass);
};
  
const disableButton = (buttonSubmitElement, inactiveButtonClass) => {
  buttonSubmitElement.setAttribute('disabled', 'true');
  buttonSubmitElement.classList.add(inactiveButtonClass);
};
  
const enableValidation = (options) => {
  const forms = Array.from(document.querySelectorAll(options.formSelector));
  forms.forEach(form  => {
    setEventListener(form, options);
  });
};
  
const toggleButtonState = (inputs, buttonSubmitElement, inactiveButtonClass) => {
  const formIsValid = inputs.every(submitSelector => submitSelector.validity.valid);
  if (formIsValid) {
    enableButton(buttonSubmitElement, inactiveButtonClass);
  } else {
    disableButton(buttonSubmitElement, inactiveButtonClass);
  } 
}
  
const setEventListener = (form, options) => {
  const buttonSubmitElement = form.querySelector(options.submitButtonSelector);
  const inputs = Array.from(form.querySelectorAll(options.inputSelector));
  
  inputs.forEach(submitSelector => {
    submitSelector.addEventListener('input', () => {
      toggleInputState(submitSelector, options);
      toggleButtonState(inputs, buttonSubmitElement, options.inactiveButtonClass);
    });
  });
  toggleButtonState(inputs, buttonSubmitElement, options.inactiveButtonClass);
};