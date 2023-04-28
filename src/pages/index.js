import './index.css';
import Card  from '../scripts/Card.js';
import FormValidator from '../scripts/FormValidator.js';
import Section from '../scripts/Section.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import PopupWithForm from '../scripts/PopupWithForm.js';
import UserInfo from '../scripts/UserInfo.js';
import {validationOptions} from '../utils/constants.js';
import {initialCards} from '../utils/constants.js';

const container = document.querySelector('.elements');
const templateSelector = document.querySelector('#element');
//
const popupEdit = document.querySelector('#edit');//
const popupAdd = document.querySelector('#add');//
const popupPhoto = document.querySelector('#photo');//

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');


const editFormElement = document.querySelector('#edit-info');
const nameInput = editFormElement.querySelector('#name');
const jobInput = editFormElement.querySelector('#about');

const addFormElement = document.querySelector('#add-place');

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
   (item) => {
    cardZone.addItem(createCard(item));
  }
);

popupWithAddForm.setEventListeners();

function createCard(item) {
  const card = new Card(item, templateSelector, handleCardClick);
  const newCard = card.generateCard();
  return newCard;
};

const renderer = (item) => {
  container.prepend(createCard(item));
};

const popupWithImage = new PopupWithImage(popupPhoto);
popupWithImage.setEventListeners();

function handleCardClick(name, link) {
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
  addFormValidation.resetValidation();
  popupWithAddForm.open();
}

editButton.addEventListener('click', handleOpenEditForm);

addButton.addEventListener('click', handleOpenAddForm);
