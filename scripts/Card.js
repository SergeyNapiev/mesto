class Card {

    constructor(item, container, handleCardClick) {
        this._name = item.name;
        this._link = item.link;
        this._container = container;
        this._handleCardClick = handleCardClick;
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

    _setEventListeners = () => {
        this._buttonDeleteCard = this._card.querySelector('.elements__delete');
        this._buttonHeart = this._card.querySelector('.elements__heart');
        this._buttonDeleteCard.addEventListener('click', this._handleRemoveCard);
        this._buttonHeart.addEventListener('click', this._handleLikeCard);
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link)
          });
    }

}

export default Card;