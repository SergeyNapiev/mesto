import Card  from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
// import PopupWithForm from './PopupWithForm.js';
// import UserInfo from './UserInfo.js';

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
const popupEdit = document.querySelector('#edit');//
const popupAdd = document.querySelector('#add');//
const popupPhoto = document.querySelector('#photo');//
// const popup = document.querySelector('.popup');
const popupSelector = document.querySelector('.popup_opened');
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



// popups.forEach(item => {//Popup
//   item.addEventListener('mousedown', (evt) => {//Popup
//     if (evt.target === evt.currentTarget) {//Popup
//       closePopup(item);//Popup
//     }//Popup
//   });//Popup
// });//Popup

// function handleCloseByEscape (evt) {//Popup
//     if (evt.code === "Escape") { //Popup
//       const popupOpened = document.querySelector('.popup_opened');//Popup
//       closePopup(popupOpened); //Popup
//     }
// }

// function openPopup (item) {//Popup
//   document.addEventListener('keydown', handleCloseByEscape);//Popup
//   item.classList.add('popup_opened');//Popup
// }

// function closePopup (item) {//Popup
//   document.removeEventListener('keydown', handleCloseByEscape);//Popup
//   item.classList.remove('popup_opened');//Popup
// }

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
};

//PopupWithImage
// const popupWithImage = new PopupWithImage(popupPhoto);

function createCard(item) {
  const card = new Card(item, container, handleCardClick);
  const newCard = card.generateCard();
  // popupWithImage.setEventListeners();
  return newCard;
};

const renderer = (item) => {
  container.prepend(createCard(item));
};

const fullImage = popupPhoto.querySelector('.popup__item');
const fullImageTitle = popupPhoto.querySelector('.popup__title');

// function handleCardClick(name, link) {
//   fullImage.src = link;
//   fullImage.alt = name;
//   fullImageTitle.textContent = name;
//   openPopup(popupPhoto); 
// }


function handleCardClick(name, link) {
  const popupWithImage = new PopupWithImage(popupPhoto);
  // fullImage.src = link;
  // fullImage.alt = name;
  // fullImageTitle.textContent = name;
  popupWithImage.setEventListeners();
  popupWithImage.open(name, link);
};

const cardZone = new Section({items: initialCards, renderer}, container);
cardZone.renderItems();

addFormElement.addEventListener('submit', (evt) => { 
  evt.preventDefault(); 
  const newCard = {
    name: titleInput.value,
    link: urlInput.value
  }
  cardZone.addItem(createCard(newCard));
  closePopup(popupAdd); 
}) 



editButton.addEventListener('click', handleOpenEditForm);

// const closeButtons = document.querySelectorAll('.popup__close'); //Popup
// closeButtons.forEach((button) => {//Popup
//   const popup = button.closest('.popup');//Popup
//   button.addEventListener('click', () => closePopup(popup));//Popup
// });//Popup
editFormElement.addEventListener('submit', handleEditFormSubmit);
addButton.addEventListener('click', handleOpenAddForm);
