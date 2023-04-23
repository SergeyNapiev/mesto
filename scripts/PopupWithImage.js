import Popup from "./Popup.js";

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        console.log(this._popupSelector);
        this._link = this._popupSelector.querySelector('.popup__item');
        this._name = this._popupSelector.querySelector('.popup__title');
    }
    open(name, link) {
        console.log(name);
        console.log(link);
        this._link.src = link;
        this._name.textContent = name;
        this._link.alt = name;
        super.open();
    }

}

export default PopupWithImage;