import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupSelector.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._submitButton = this._form.querySelector('.popup__button');
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

    setLoadingState(isLoading, loadingMassage) {
      if (isLoading) {
        this._submitButton.textContent = loadingMassage;
      } else {
        this._submitButton.textContent = this._startSubmitButtonText;
      }
    }

  setEventListeners() {
      super.setEventListeners();
      this._form.addEventListener('submit', (evt) => {
          evt.preventDefault();
          this._handleFormSubmit(this._getInputValues());
        });
  }

  close() {
      super.close();
      this._form.reset();
  }

}

export default PopupWithForm;