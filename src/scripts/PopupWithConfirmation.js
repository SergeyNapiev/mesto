import Popup from "./Popup.js";

class PopupWithConfirmation extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popupSelector.querySelector('.popup__form');
    }

    open(data) {
        super.open(data);
        this._data = data.target.parentNode;
        console.log(data.target.parentNode);
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