import Card  from './Card.js';
import FormValidator from './FormValidator.js';

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },
]; 

const validationOptions = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
  inputSectionsSelector: '.popup__section',
  inputErrorSelector: '.popup__error'
});

const container = document.querySelector('.elements');

//
const popupEdit = document.querySelector('#edit');
const popupAdd = document.querySelector('#add');
const popupPhoto = document.querySelector('#photo');
export { popupPhoto };
const popups = Array.from(document.querySelectorAll('.popup'));
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');


const editFormElement = document.querySelector('#edit-info');
const nameInput = editFormElement.querySelector('#name');
const jobInput = editFormElement.querySelector('#about');
const nameProfile = document.querySelector('.profile__name');
const aboutProfile = document.querySelector('.profile__about');

const addFormElement = document.querySelector('#add-place');
const titleInput = popupAdd.querySelector('#place');
const urlInput = popupAdd.querySelector('#url');

// для валидации
const editFormValidation = new FormValidator(validationOptions, editFormElement);
editFormValidation.enableValidation();

const addFormValidation = new FormValidator(validationOptions, addFormElement);
addFormValidation.enableValidation();

popups.forEach(item => {
  item.addEventListener('mousedown', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(item);
    }
  });
});

function handleCloseByEscape (evt) {
    if (evt.code === "Escape") { 
      const popupOpened = document.querySelector('.popup_opened');
      closePopup(popupOpened); 
    }
}

function openPopup (item) {
  document.addEventListener('keydown', handleCloseByEscape);
  item.classList.add('popup_opened');
}

export { openPopup };

function closePopup (item) {
  document.removeEventListener('keydown', handleCloseByEscape);
  item.classList.remove('popup_opened');
}

function handleOpenAddForm () {
  addFormElement.reset();
  addFormValidation.resetValidation();
  openPopup(popupAdd);
}

function handleOpenEditForm () {
  nameInput.value = nameProfile.textContent;
  jobInput.value = aboutProfile.textContent;
  openPopup(popupEdit);
  editFormValidation.resetValidation();
}

function handleEditFormSubmit (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  aboutProfile.textContent = jobInput.value;
  closePopup(popupEdit);
}

function createCard(item) {
  const card = new Card(item, container, handleCardClick);
  const newCard = card.generateCard();
  return newCard;
}

initialCards.forEach((item) => {
  container.prepend(createCard(item));
})


const fullImage = popupPhoto.querySelector('.popup__item');
const fullImageTitle = popupPhoto.querySelector('.popup__title');

function handleCardClick(name, link) {
  fullImage.src = link;
  fullImage.alt = name;
  fullImageTitle.textContent = name;
  openPopup(popupPhoto); 
}

addFormElement.addEventListener('submit', (evt) => { 
  evt.preventDefault(); 
  const newCard = {
    name: titleInput.value,
    link: urlInput.value
  }
  container.prepend(createCard(newCard));
  closePopup(popupAdd); 
}) 

editButton.addEventListener('click', handleOpenEditForm);

const closeButtons = document.querySelectorAll('.popup__close');
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});
editFormElement.addEventListener('submit', handleEditFormSubmit);
addButton.addEventListener('click', handleOpenAddForm);
