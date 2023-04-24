import Card  from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';

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

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');


const editFormElement = document.querySelector('#edit-info');
const nameInput = editFormElement.querySelector('#name');
const jobInput = editFormElement.querySelector('#about');
// const nameProfile = document.querySelector('.profile__name');
// const aboutProfile = document.querySelector('.profile__about');

const addFormElement = document.querySelector('#add-place');
// const titleInput = popupAdd.querySelector('#place');
// const urlInput = popupAdd.querySelector('#url');

// для валидации
const editFormValidation = new FormValidator(validationOptions, editFormElement);
editFormValidation.enableValidation();

const addFormValidation = new FormValidator(validationOptions, addFormElement);
addFormValidation.enableValidation();

//профиль пользователя
const userInfo = new UserInfo({
  name: '.profile__name',
  about: '.profile__about   '
});

const popupWithEditForm = new PopupWithForm(popupEdit,
   (name, about) => {
    userInfo.setUserInfo(name, about);
    popupWithEditForm.close();
  }
);

popupWithEditForm.setEventListeners();

const popupWithAddForm = new PopupWithForm(popupAdd,
   (data) => {
    console.log(data);
    const newCard = createCard(data);
    console.log(newCard);
    cardZone.addItem(newCard);
    popupWithAddForm.close();
  }
);

popupWithAddForm.setEventListeners();

function createCard(item) {
  const card = new Card(item, container, handleCardClick);
  const newCard = card.generateCard();
  return newCard;
};

const renderer = (item) => {
  container.prepend(createCard(item));
};

function handleCardClick(name, link) {
  const popupWithImage = new PopupWithImage(popupPhoto);
  popupWithImage.setEventListeners();
  popupWithImage.open(name, link);
};

const cardZone = new Section({items: initialCards, renderer}, container);
cardZone.renderItems();

function handleOpenEditForm() {
  const oldUser = userInfo.getUserInfo();
  nameInput.value = oldUser.name;
  jobInput.value = oldUser.about;
  editFormValidation.resetValidation();
  popupWithEditForm.open();
}

function handleOpenAddForm() {
  addFormElement.reset();
  addFormValidation.resetValidation();
  popupWithAddForm.open();
}

editButton.addEventListener('click', handleOpenEditForm);

addButton.addEventListener('click', handleOpenAddForm);
