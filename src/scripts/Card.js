class Card {

  constructor(card, templateSelector, handleCardClick, handleDeleteClick) {
    this._name = card.name;
    this._link = card.link;
    this._likes = card.likes;
    this._cardId = card._id;
    this._ownerId = card.owner._id;
    // this._userId = userId;
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
  this._counter = this._card.querySelector('.elements__counter');
  this._counter.textContent = this._likes.length;
  this._cardImage = this._card.querySelector('.elements__item');
  this._setEventListeners();

  return this._card;
}

getCardId () {
  return this._cardId;
}

_handleLikeCard = () => {
    this._buttonHeart.classList.toggle('elements__heart_active');
}

_removeButtonDelete(userId) {
    if (userId === this._ownerId) {
      this._buttonDeleteCard.classList.remove('element__delete_none')
    }
  }

  remove() {
    this._card.remove();
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

// class Card {

//   }
  