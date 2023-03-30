import { openPopup, popupPhoto } from "./index.js";

class Card {

    constructor(item, container, templateSelector) {
        this._name = item.name;
        this._link = item.link;
        this._container = container;
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        this._templateSelector = document.querySelector('#element').content;
        const cardElement = this._templateSelector.querySelector('.elements__element').cloneNode(true);
        return cardElement;
    }

    generateCard () {
        this._card = this._getTemplate();
        this._card.querySelector('.elements__title').textContent = this._name;
        this._card.querySelector('.elements__item').alt = this._name;
        this._card.querySelector('.elements__item').src = this._link;
        this._fullImage = document.querySelector('.popup__item');
        this._fullImageTitle = document.querySelector('.popup__title');
        this._cardImage = this._card.querySelector('.elements__item');
        this._setEventListeners();

        return this._card;
    }

    _handleRemoveCard = () => {
        this._card.remove();
    }

    _handleLikeCard = () => {
        this._buttonHeart.classList.toggle('elements__heart_active');
    }

    _handleFullScreenCadr = () => {
        this._fullImage.src = this._cardImage.src; 
        this._fullImage.alt = this._cardImage.alt; 
        this._fullImageTitle.textContent = this._card.querySelector('.elements__title').textContent; 

        openPopup(popupPhoto); 
    }

    _setEventListeners = () => {
        this._buttonDeleteCard = this._card.querySelector('.elements__delete');
        this._buttonHeart = this._card.querySelector('.elements__heart');
        this._buttonFullScreen = this._card.querySelector('.elements__item');

        this._buttonDeleteCard.addEventListener('click', this._handleRemoveCard);
        this._buttonHeart.addEventListener('click', this._handleLikeCard);
        this._buttonFullScreen.addEventListener('click', this._handleFullScreenCadr);
    }

}

export default Card;