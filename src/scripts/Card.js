class Card {

    constructor(item, templateSelector, handleCardClick, handleDeleteClick) {
        this._name = item.name;
        this._link = item.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = handleDeleteClick;
    }

    _getTemplate() {
        
        const cardElement = this._templateSelector
        .content
        .querySelector('.elements__element').cloneNode(true);
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

    _handleLikeCard = () => {
        this._buttonHeart.classList.toggle('elements__heart_active');
    }

    _setEventListeners = () => {
        this._buttonDeleteCard = this._card.querySelector('.elements__delete');
        this._buttonHeart = this._card.querySelector('.elements__heart');
        this._buttonDeleteCard.addEventListener('click', (item) => {
            this._handleDeleteClick(item);
        });
        this._buttonHeart.addEventListener('click', this._handleLikeCard);
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link)
          });
    }

}

export default Card;