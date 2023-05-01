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
        });
        return inputData;
    }
// можно лучше
    // setInputValues(data) {
    //     this._inputList.forEach((input) => {
    //       // тут вставляем в `value` инпута данные из объекта по атрибуту `name` этого инпута
    //       input.value = data[input.name];
    //     });
    //   }

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