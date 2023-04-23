import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popupSelector.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__input');
    }

    _getInputValues() {
        const inputData = {};
        this._inputList.forEach(input => {
            inputData[input.name] = input.value;
            console.log( inputData[input.name]);
            console.log(input.value);
        });
        console.log(inputData);
        return inputData;
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