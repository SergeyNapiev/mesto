class FormValidator {

  constructor (validationOptions, form) {
    this._formSelector = validationOptions.formSelector;
    this._inputSelector = validationOptions.inputSelector;
    this._submitButtonSelector = validationOptions.submitButtonSelector;
    this._inactiveButtonClass = validationOptions.inactiveButtonClass;
    this._inputErrorClass = validationOptions.inputErrorClass;
    this._errorClass = validationOptions.errorClass;
    this._inputSectionsSelector = validationOptions.inputSectionsSelector;
    this._inputErrorSelector = validationOptions.inputErrorSelector;
    this._form = form;
  }

  _hiddenError = (submitSelector) => {
    this._errorElement.innerText = '';
    submitSelector.classList.remove(this._inputErrorClass);
    this._errorElement.classList.remove(this._errorClass);
  }

  _showError = (submitSelector) => {
    this._errorElement.innerText = submitSelector.validationMessage;
    submitSelector.classList.add(this._inputErrorClass);
    this._errorElement.classList.add(this._errorClass);
  }

  _enableButton = () => {
    this._buttonSubmitElement.removeAttribute('disabled');
    this._buttonSubmitElement.classList.remove(this._inactiveButtonClass);
  }

  _disableButton = () => {
    this._buttonSubmitElement.setAttribute('disabled', 'true');
    this._buttonSubmitElement.classList.add(this._inactiveButtonClass);
  }



  _toggleInputState = (submitSelector) => {
    this._isValid = submitSelector.validity.valid;
    this._inputSectionElenemt = submitSelector.closest(this._inputSectionsSelector);
    this._errorElement = this._inputSectionElenemt.querySelector(this._inputErrorSelector);
    if (this._isValid) {
      this._hiddenError(submitSelector);
    } else {
      this._showError(submitSelector);
    }
  }

  _toggleButtonState = () => {
    this._formIsValid = this._inputList.every(submitSelector => submitSelector.validity.valid);
    if (this._formIsValid) {
      this._enableButton();
    } else {
      this._disableButton();
    } 
  }

  _resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideError(inputElement);
    });
  }

  _setEventListener = (form) => {
    this._inputList = Array.from(form.querySelectorAll(this._inputSelector));
    this._buttonSubmitElement = form.querySelector(this._submitButtonSelector);
    this._inputList.forEach((submitSelector) => {
      submitSelector.addEventListener('input', () => {
        this._toggleInputState(submitSelector);
        this._toggleButtonState(submitSelector);
      });
      this._toggleButtonState(this._inputList, this._buttonSubmitElement, this._inactiveButtonClass);
    });
  }
  


  enableValidation = () => {
      this._setEventListener(this._form);
      this._resetValidation(this._inputList);
    }

}

export default FormValidator;

  // const validationOptions = {
  //   formSelector: '.popup__form',
  //   inputSelector: '.popup__input',
  //   submitButtonSelector: '.popup__button',
  //   inactiveButtonClass: 'popup__button_disabled',
  //   inputErrorClass: 'popup__input_type_error',
  //   errorClass: 'popup__error_visible',
  //   inputSectionsSelector: '.popup__section',
  //   inputErrorSelector: '.popup__error'
  // }