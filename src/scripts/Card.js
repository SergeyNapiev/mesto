class Card {
 
  constructor(card, templateSelector, handleCardClick, handleDeleteClick, handleLikeClick, userId) {
    this._name = card.name;
    this._link = card.link;
    this._likes = card.likes;
    this._cardId = card._id;
    this._ownerId = card.owner._id;
    this._userId = userId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
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
    this._buttonDeleteCard = this._card.querySelector('.elements__delete');
    if (this._userId === this._ownerId) {
      this._buttonDeleteCard.classList.remove('elements__delete_none')
    }
    this._buttonHeart = this._card.querySelector('.elements__heart');
    this.updateLikes(this._likes);
    this.getLikes = this.getLikes.bind(this);
    
    this._setEventListeners();
    
    return this._card;
  }
  
  getCardId () {
    return this._cardId;
  }
  
  getLikes() {
    return this._likes;
  }

  
  handleLikeCard() {
    this._buttonHeart.classList.add('elements__heart_active');
  }
  
  handleDislikeCard() {
    this._buttonHeart.classList.remove('elements__heart_active');
  }
  updateLikes(updatedLikes) {
    this._likes = updatedLikes;
    this._counter.textContent = this._likes.length;

    if (this.isLikedByMe()) {
      this.handleLikeCard();
    } else {
      this.handleDislikeCard();
    }
  }

  isLikedByMe() {
    return this._likes.some((like) => like._id === this._userId);
  }

  
    remove() {

      this._card.remove();
    }
  
  _setEventListeners = () => {
      

      this._buttonDeleteCard.addEventListener('click', () => {
          this._handleDeleteClick(this);
      });
      this._buttonHeart.addEventListener('click', () => {
        this._handleLikeClick(this);
      });
      this._cardImage.addEventListener('click', () => {
          this._handleCardClick(this._name, this._link)
        });
  }
  }
  
  export default Card;