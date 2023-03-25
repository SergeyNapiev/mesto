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

const validationOptions = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
  inputSectionsSelector: '.popup__section',
  inputErrorSelector: '.popup__error'
}

export { validationOptions };

const container = document.querySelector('.elements');

initialCards.forEach((item) => {
  const card = new Card(item, container);
  card.render();
})

//
const popupEdit = document.querySelector('#edit');
const popupAdd = document.querySelector('#add');
const popupPhoto = document.querySelector('#photo');
export { popupPhoto };
const popups = Array.from(document.querySelectorAll('.popup'));
const editButton = document.querySelector('.profile__edit-button');
const closeEditButton = popupEdit.querySelector('#close-edit');
const closeAddButton = popupAdd.querySelector('#close-add');
const closePhotoButton = popupPhoto.querySelector('#close-photo');
const addButton = document.querySelector('.profile__add-button');


const editFormElement = document.querySelector('#edit-info');
const nameInput = editFormElement.querySelector('#name');
const jobInput = editFormElement.querySelector('#about');
const nameProfile = document.querySelector('.profile__name');
const aboutProfile = document.querySelector('.profile__about');

const addFormElement = document.querySelector('#add-place');
const titleInput = popupAdd.querySelector('#place');
const urlInput = popupAdd.querySelector('#url');


const editButtonElement = editFormElement.querySelector('#submit-edit');
const addButtonElement = addFormElement.querySelector('#submit-add');
const errorAddElement = Array.from(addFormElement.querySelectorAll('.popup__error'));
const errorAddInputElement = Array.from(addFormElement.querySelectorAll('.popup__input'));
const errorEditElement = Array.from(editFormElement.querySelectorAll('.popup__error'));
const errorEditInputElement = Array.from(editFormElement.querySelectorAll('.popup__input'));

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

function handleOpenEditForm () {
  nameInput.value = nameProfile.textContent;
  jobInput.value = aboutProfile.textContent;
  runValidation.enableButton(editButtonElement, validationOptions.inactiveButtonClass);
  errorEditElement.forEach(item => {
    item.classList.remove('popup__error_visible');
  });
  errorEditInputElement.forEach(item => {
    item.classList.remove('popup__input_type_error');
  })
  openPopup(popupEdit);
}

function handleEditFormSubmit (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  aboutProfile.textContent = jobInput.value;
  closePopup(popupEdit);
}

function handleOpenAddForm () {
  addFormElement.reset();
  runValidation.disableButton(addButtonElement, validationOptions.inactiveButtonClass);
  errorAddElement.forEach(item => {
    item.classList.remove('popup__error_visible');
  });
  errorAddInputElement.forEach(item => {
    item.classList.remove('popup__input_type_error');
  })
  openPopup(popupAdd);
}


addFormElement.addEventListener('submit', (evt) => { 
  evt.preventDefault(); 
  const newCard = {
    name: titleInput.value,
    link: urlInput.value
  }
  initialCards.push(newCard)
  const card = new Card(newCard, container);
  card.render();
  closePopup(popupAdd); 
}) 

editButton.addEventListener('click', handleOpenEditForm);
closeEditButton.addEventListener('click', () => {
  closePopup(popupEdit);
});
closeAddButton.addEventListener('click', () => {
  closePopup(popupAdd);
});
closePhotoButton.addEventListener('click',() => {
  closePopup(popupPhoto);
});
editFormElement.addEventListener('submit', handleEditFormSubmit);
addButton.addEventListener('click', handleOpenAddForm);

// для валидации
const runValidation = new FormValidator(validationOptions);
runValidation.enableValidation();
