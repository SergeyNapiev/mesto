import { validationOptions } from "./index.js";

class FormValidator {

  constructor (validationOptions, forms, inputs) {
    this._formSelector = validationOptions.formSelector;
    this._inputSelector = validationOptions.inputSelector;
    this._submitButtonSelector = validationOptions.submitButtonSelector;
    this._inactiveButtonClass = validationOptions.inactiveButtonClass;
    this._inputErrorClass = validationOptions.inputErrorClass;
    this._errorClass = validationOptions.errorClass;
    this._inputSectionsSelector = validationOptions.inputSectionsSelector;
    this._inputErrorSelector = validationOptions.inputErrorSelector;
    this._forms = forms;
    this._inputs = inputs;
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

  enableButton = () => {
    this._buttonSubmitElement.removeAttribute('disabled');
    this._buttonSubmitElement.classList.remove(this._inactiveButtonClass);
  }

  disableButton = () => {
    this._buttonSubmitElement.setAttribute('disabled', 'true');
    this._buttonSubmitElement.classList.add(this._inactiveButtonClass);
  }

  _toggleInputState = (submitSelector) => {
    this._isValid = submitSelector.validity.valid;
    this._inputSectionElenemt = submitSelector.closest(this._inputSectionsSelector);
    this._errorElement = this._inputSectionElenemt.querySelector(this._inputErrorSelector);
    if (this._isValid) {
      this._hiddenError(this._errorElement, submitSelector, this._inputErrorClass, this._errorClass);
    } else {
      this._showError(submitSelector, this._errorElement, submitSelector.validationMessage, this._inputErrorClass, this._errorClass);
    }
  }

  _toggleButtonState = () => {
    this._formIsValid = this._inputs.every(submitSelector => submitSelector.validity.valid);
    if (this._formIsValid) {
      this.enableButton(this._buttonSubmitElement, this._inactiveButtonClass);
    } else {
      this.disableButton(this._buttonSubmitElement, this._inactiveButtonClass);
    } 
  }

  _setEventListener = (form) => {
    this._buttonSubmitElement = form.querySelector(this._submitButtonSelector);
    this._inputs = Array.from(form.querySelectorAll(this._inputSelector));
    this._inputs.forEach((submitSelector) => {
      submitSelector.addEventListener('input', () => {
        this._toggleInputState(submitSelector);
        this._toggleButtonState(submitSelector);
      });
    });
    this._toggleButtonState(this._inputs, this._buttonSubmitElement, this._inactiveButtonClass);
  }

  enableValidation = () => {
    this._forms = Array.from(document.querySelectorAll(this._formSelector));
    this._forms.forEach(form  => {
      this._setEventListener(form, validationOptions);
    });
  }

}

export default FormValidator;
//     const hiddenError = (errorElement, submitSelector, this._inputErrorClass, errorClass) => {
//         errorElement.innerText = '';
//         submitSelector.classList.remove(this._inputErrorClass);
//         errorElement.classList.remove(errorClass);
//       }
        
//       const showError = (submitSelector, errorElement, message, this._inputErrorClass, errorClass) => {
//         errorElement.innerText = message;
//         submitSelector.classList.add(this._inputErrorClass);
//         errorElement.classList.add(errorClass);
//       }
        
//       const enableButton = (buttonSubmitElement, inactiveButtonClass) => {
//         buttonSubmitElement.removeAttribute('disabled');
//         buttonSubmitElement.classList.remove(inactiveButtonClass);
//       };
        
//       const disableButton = (buttonSubmitElement, inactiveButtonClass) => {
//         buttonSubmitElement.setAttribute('disabled', 'true');
//         buttonSubmitElement.classList.add(inactiveButtonClass);
//       };
        
//       const enableValidation = (options) => {
//         const forms = Array.from(document.querySelectorAll(options.formSelector));
//         forms.forEach(form  => {
//           setEventListener(form, options);
//         });
//       };
        


//       const toggleInputState = (submitSelector, options) => {
//         const {inputSectionsSelector, inputErrorSelector, this._inputErrorClass, errorClass} = options;
//         const isValid = submitSelector.validity.valid;
//         const inputSectionElenemt = submitSelector.closest(inputSectionsSelector);
//         const errorElement = inputSectionElenemt.querySelector(inputErrorSelector);
//         if (isValid) {
//           hiddenError(errorElement, submitSelector, this._inputErrorClass, errorClass);
//         } else {
//           showError(submitSelector, errorElement, submitSelector.validationMessage, this._inputErrorClass, errorClass);
//         }
//       }

//       const toggleButtonState = (inputs, buttonSubmitElement, inactiveButtonClass) => {
//         const formIsValid = inputs.every(submitSelector => submitSelector.validity.valid);
//         if (formIsValid) {
//           enableButton(buttonSubmitElement, inactiveButtonClass);
//         } else {
//           disableButton(buttonSubmitElement, inactiveButtonClass);
//         } 
//       }
        
//       const setEventListener = (form, options) => {
//         const buttonSubmitElement = form.querySelector(options.submitButtonSelector);
//         const inputs = Array.from(form.querySelectorAll(options.inputSelector));
        
//         inputs.forEach(submitSelector => {
//           submitSelector.addEventListener('input', () => {
//             toggleInputState(submitSelector, options);
//             toggleButtonState(inputs, buttonSubmitElement, options.inactiveButtonClass);
//           });
//         });
//         toggleButtonState(inputs, buttonSubmitElement, options.inactiveButtonClass);
//       };
// }