class FormValidator {

  constructor (validationOptions, form) {
    this._formSelector = validationOptions.formSelector;
    this._inputSelector = validationOptions.inputSelector;
    this._submitButtonSelector = validationOptions.submitButtonSelector;
    this._inactiveButtonClass = validationOptions.inactiveButtonClass;
    this._inputErrorClass = validationOptions.inputErrorClass;
    this._errorClass = validationOptions.errorClass;
    this._inputErrorSelector = validationOptions.inputErrorSelector;
    this._form = form;
  };

  _hiddenError(inputElement) {
    this._errorElement = inputElement.nextElementSibling;
    this._errorElement.innerText = '';
    inputElement.classList.remove(this._inputErrorClass);
    this._errorElement.classList.remove(this._errorClass);
  };

  _showError(inputElement) {
    this._errorElement = inputElement.nextElementSibling;
    this._errorElement.innerText = inputElement.validationMessage;
    inputElement.classList.add(this._inputErrorClass);
    this._errorElement.classList.add(this._errorClass);
  };

  _enableButton = () => {
    this._buttonSubmitElement = this._form.querySelector(this._submitButtonSelector);
    this._buttonSubmitElement.removeAttribute('disabled');
    this._buttonSubmitElement.classList.remove(this._inactiveButtonClass);
  };

  _disableButton = () => {
    this._buttonSubmitElement = this._form.querySelector(this._submitButtonSelector);
    this._buttonSubmitElement.setAttribute('disabled', 'true');
    this._buttonSubmitElement.classList.add(this._inactiveButtonClass);
  };

  _toggleInputState(inputElement) {
    this._isValid = inputElement.validity.valid;
    this._errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    if (this._isValid) {
      this._hiddenError(inputElement);
    } else {
      this._showError(inputElement);
    }
  };

  _toggleButtonState() {
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._formIsValid = this._inputList.every(inputElement => inputElement.validity.valid);
    if (this._formIsValid) {
      this._enableButton();
    } else {
      this._disableButton();
    } 
  };

  _setEventListener() {
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._toggleInputState(inputElement);
        this._toggleButtonState();
      });
      this._toggleButtonState();
    });
  };
  
  enableValidation = () => {
      this._setEventListener();
    };

  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hiddenError(inputElement);
    });
  };
}

export default FormValidator;

  // const validationOptions = {
  //   formSelector: '.popup__form',
  //   inputSelector: '.popup__input',
  //   submitButtonSelector: '.popup__button',
  //   inactiveButtonClass: 'popup__button_disabled',
  //   inputErrorClass: 'popup__input_type_error',
  //   errorClass: 'popup__error_visible',
  //   inputErrorSelector: '.popup__error'
  // }