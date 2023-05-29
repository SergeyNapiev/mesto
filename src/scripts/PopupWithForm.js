import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupSelector.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._submitButton = this._form.querySelectorAll('.popup__button');
    this._startSubmitButtonText = this._submitButton.textContent;
  }

  _getInputValues() {
      const inputData = {};
      this._inputList.forEach(input => {
          inputData[input.name] = input.value;
      });
      return inputData;
  }

  setInputValues(data) {
      this._inputList.forEach((input) => {
        input.value = data[input.name];
      });
    }

    setLoadingState(isLoading) {
      if (isLoading) {
        this._submitButton.textContent = 'Сохранение...';
      } else {
        this._submitButton.textContent = this._initialSubmitButtonText;
      }
    }

  setEventListeners() {
      super.setEventListeners();
      this._form.addEventListener('submit', (evt) => {
          evt.preventDefault();
          this._handleFormSubmit(this._getInputValues());
          this.close();
        });
  }

  close() {
      super.close();
      this._form.reset();
  }

}

export default PopupWithForm;

// // Класс PopupWithForm - представляет всплывающее окно с формой
// class PopupWithForm extends Popup {
//     constructor(popupSelector, handleFormSubmit) {
//       super(popupSelector);
//       this._formElement = this._popupElement.querySelector('.popup__form');
//       this._handleFormSubmit = handleFormSubmit;
//       this._submitButton = this._formElement.querySelector('.popup__submit-button');
//       this._initialSubmitButtonText = this._submitButton.textContent;
//     }
  
//     _getInputValues() {
//       const inputList = Array.from(this._formElement.querySelectorAll('.popup__input'));
//       const formValues = {};
  
//       inputList.forEach((input) => {
//         formValues[input.name] = input.value;
//       });
  
//       return formValues;
//     }
  
//     setLoadingState(isLoading) {
//       if (isLoading) {
//         this._submitButton.textContent = 'Сохранение...';
//       } else {
//         this._submitButton.textContent = this._initialSubmitButtonText;
//       }
//     }
  
//     setEventListeners() {
//       super.setEventListeners();
  
//       this._formElement.addEventListener('submit', (event) => {
//         event.preventDefault();
//         const formValues = this._getInputValues();
//         this._handleFormSubmit(formValues);
//       });
//     }
  
//     close() {
//       super.close();
//       this._formElement.reset();
//     }
//   }