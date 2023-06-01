import Popup from "./Popup.js";

class PopupWithConfirmation extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popupSelector.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__input');
        this._submitButton = this._form.querySelector('.popup__button');
        this._startSubmitButtonText = this._submitButton.textContent;
    }

    open(data) {
        super.open(data);
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
            this._handleFormSubmit(this._data);
            this.close();
        });
    }

}

export default PopupWithConfirmation;

// // Класс PopupWithConfirmation - представляет всплывающее окно с подтверждением
// class PopupWithConfirmation extends Popup {
//     constructor(popupSelector, handleConfirmation) {
//       super(popupSelector);
//       this._confirmationButton = this._popupElement.querySelector('.popup__confirmation-button');
//       this._handleConfirmation = handleConfirmation;
//     }
  
//     setEventListeners() {
//       super.setEventListeners();
  
//       this._confirmationButton.addEventListener('click', () => {
//         this._handleConfirmation();
//       });
//     }
//   }