import './index.css';
import Card  from '../scripts/Card.js';
import FormValidator from '../scripts/FormValidator.js';
import Section from '../scripts/Section.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import PopupWithForm from '../scripts/PopupWithForm.js';
import UserInfo from '../scripts/UserInfo.js';
import {validationOptions} from '../utils/constants.js';
// import {initialCards} from '../utils/constants.js';
import PopupWithConfirmation from '../scripts/PopupWithconfirmation.js';
import Api from '../scripts/Api.js';

const container = document.querySelector('.elements');
const templateSelector = document.querySelector('#element');
const avatar = document.querySelector('.profile__avatar');
//
const popupEdit = document.querySelector('#edit');//
const popupAdd = document.querySelector('#add');//
const popupPhoto = document.querySelector('#photo');//
const popupAvatar = document.querySelector('#avatar');//
const popupConfirm = document.querySelector('#delete');

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const avatarButton = document.querySelector('.profile__set-avatar')

const userName = document.querySelector('.profile__name');
const userAbout = document.querySelector('.profile__about');
const userAvatar = document.querySelector('.profile__avatar');

const editFormElement = document.querySelector('#edit-info');
const addFormElement = document.querySelector('#add-place');
const avatarFormElement = document.querySelector('#set-avatar');
const deleteFormElement = document.querySelector('#delete-form');

// для валидации
const editFormValidation = new FormValidator(validationOptions, editFormElement);
editFormValidation.enableValidation();

const addFormValidation = new FormValidator(validationOptions, addFormElement);
addFormValidation.enableValidation();

const avatarFormValidation = new FormValidator(validationOptions, avatarFormElement);
avatarFormValidation.enableValidation();

const api = new Api(
   'https://mesto.nomoreparties.co/v1/cohort-64',
    '4ebb947e-2153-478d-938f-3cce41c29118',
); 

//профиль пользователя
const userInfo = new UserInfo({
  name: '.profile__name',
  about: '.profile__about   '
});

function setServerUserInfo() {
  api.getUserInfo()
  .then((result) => {
    userName.textContent = result.name;
    userAbout.textContent = result.about;
    userAvatar.src = result.avatar;
  })
}
setServerUserInfo();

// попап редактирования профиля
const popupWithEditForm = new PopupWithForm(popupEdit,
   (name, about) => {
    api.editUserInfo(name, about)
    .then((result) => {
      result.name = name;
      result.about = about;
      userInfo.setUserInfo(result.name, result.about);
      popupWithEditForm.close();
    })
    .catch((err) => {
    console.log(err); // выведем ошибку в консоль
    });
   }
);

popupWithEditForm.setEventListeners();

// попап нового аватара
const popupWithAvatarForm = new PopupWithForm(popupAvatar,
  (item) => {
      console.log(item);
      api.setNewAvatar(item)
      .then(result=> {
        result.avatar = item.link;
        userAvatar.src = result.avatar;
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }
);

popupWithAvatarForm.setEventListeners();



// попап большой картинки
const popupWithImage = new PopupWithImage(popupPhoto);
popupWithImage.setEventListeners();

function handleCardClick(name, link) {
  popupWithImage.open(name, link);
};

function handleDeleteClick(item) {
  popupConfirmation.open(item);
}

// создание секции карточек
// api.getInitialCards()
//   .then((result) => {
//     console.log(result);
//     const cardZone = new Section({
//       items: result,
//       renderer: (item) => {
//         console.log(item);
//         const card = createCard(item);

//         console.log(card);
//         cardZone.addItem(card.generateCard());
//       },
//       container});
//     cardZone.renderItems();
//   })
//   .catch((err) => {
//     console.log(err); // выведем ошибку в консоль
// }); 

// создание новой карточки
function createCard(item) {
  const card = new Card(item, templateSelector, handleCardClick, handleDeleteClick);
  const newCard = card.generateCard(item);
  return newCard;
};

// создание секции
const cardZone = new Section({
  items: [],
  renderer: (item) => {
    const card = createCard(item);
    cardZone.addItem(card);
    },
  },
  container);

  api.getInitialCards()
  .then((data) => {
    cardZone.items = data;
    cardZone.renderItems();
  })
  .catch((error) => {
    console.error(error);
  });  

// попап добавления новой карточки
const popupWithAddForm = new PopupWithForm(
  popupAdd,
  (item) => {
    api.addNewCard(item)
    .then(result=> {
      container.prepend(createCard(result));
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
  });
  }
);



// const renderer = (item) => {
//   container.prepend(createCard(item));
// };

popupWithAddForm.setEventListeners();

// попап подтверждения удаления
const popupConfirmation = new PopupWithConfirmation(popupConfirm, 
  (item) => {
    console.log(item);
    cardZone.removeItem(item);

  });
  popupConfirmation.setEventListeners();

// открытие попап изменения данных профиля
function handleOpenEditForm() {
  const oldUser = userInfo.getUserInfo();
  popupWithEditForm.setInputValues(oldUser);
  editFormValidation.resetValidation();
  popupWithEditForm.open();
}

// открытие попап добавления карточки
function handleOpenAddForm() {
  addFormValidation.resetValidation();
  popupWithAddForm.open();
}

// открытие попап обновить аватар
function handleOpenAvetarForm() {
  avatarFormValidation.resetValidation();
  popupWithAvatarForm.open();
}

editButton.addEventListener('click', handleOpenEditForm);
addButton.addEventListener('click', handleOpenAddForm);
avatarButton.addEventListener('click', handleOpenAvetarForm);