import { openPopup, popupPhoto } from "./index.js";

class Card {

    static _template = document.querySelector('#element').content;

    constructor(item, container) {
        this._name = item.name;
        this._link = item.link;
        this._container = container;

    }

    _handleRemoveCard = () => {
        this._view.remove();
    }

    _handleLikeCard = () => {
        this._buttonHeart.classList.toggle('elements__heart_active');
    }

    _handleFullScreenCadr = () => {
        this._fullImage = document.querySelector('.popup__item');
        this._fullImageTitle = document.querySelector('.popup__title');

        this._fullImage.src = this._view.querySelector('.elements__item').src; 
        this._fullImage.alt = this._view.querySelector('.elements__item').alt; 
        this._fullImageTitle.textContent = this._view.querySelector('.elements__title').textContent; 

        openPopup(popupPhoto); 
    }

    _setEventListeners = () => {
        this._buttonDeleteCard = this._view.querySelector('.elements__delete');
        this._buttonHeart = this._view.querySelector('.elements__heart');
        this._buttonFullScreen = this._view.querySelector('.elements__item');

        this._buttonDeleteCard.addEventListener('click', this._handleRemoveCard);
        this._buttonHeart.addEventListener('click', this._handleLikeCard);
        this._buttonFullScreen.addEventListener('click', this._handleFullScreenCadr);
    }

    render = () => {
        this._view = Card._template.cloneNode(true).children[0];
        this._view.querySelector('.elements__title').textContent = this._name;
        this._view.querySelector('.elements__item').alt = this._name;
        this._view.querySelector('.elements__item').src = this._link;

        this._setEventListeners();
        this._container.prepend(this._view);

    }
}

export default Card;