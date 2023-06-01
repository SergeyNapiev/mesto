import './index.css';
import Card  from '../scripts/Card.js';
import FormValidator from '../scripts/FormValidator.js';
import Section from '../scripts/Section.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import PopupWithForm from '../scripts/PopupWithForm.js';
import UserInfo from '../scripts/UserInfo.js';
import {validationOptions} from '../utils/constants.js';
import PopupWithConfirmation from '../scripts/PopupWithconfirmation.js';
import Api from '../scripts/Api.js';
 
const container = document.querySelector('.elements');
const templateSelector = document.querySelector('#element');

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

let userId // Создаем пустую переменную userId, положим в нее твой id когда получим его с сервера

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([cardsData, userData]) => {
      userId = userData._id // В глобальную переменную userId кладем твой id
      // рендерим карточки
      cardZone.items = cardsData;
      cardZone.renderItems();
     //  вставляем данные в профиль
      userName.textContent = userData.name;
      userAbout.textContent = userData.about;
      userAvatar.src = userData.avatar;
      return userId;
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });


// создание секции
const cardZone = new Section({
  items: [],
  renderer: (item) => {
    const card = createCard(item, userId);
    cardZone.addItem(card);
    },
  },
  container);

function createCard(item, userId) {
  const card = new Card(
    item,
    templateSelector,
    handleCardClick,
    handleDeleteClick,
    handleLikeClick,
    userId
  );
  const newCard = card.generateCard();
  return newCard;
}
 
// попап редактирования профиля
const popupWithEditForm = new PopupWithForm(popupEdit,
   (name, about) => {
    popupWithEditForm.setLoadingState(true, 'Сохранение...');
    api.editUserInfo(name, about)
    .then((result) => {
      result.name = name;
      result.about = about;
      userInfo.setUserInfo(result.name, result.about);
      popupWithEditForm.close();
    })
    .catch((err) => {
    console.log(err); // выведем ошибку в консоль
    })
    .finally(() => {
      popupWithEditForm.setLoadingState(false)
    });
   }
);
 
popupWithEditForm.setEventListeners();
 
// попап нового аватара
const popupWithAvatarForm = new PopupWithForm(popupAvatar,
  (item) => {
    popupWithAvatarForm.setLoadingState(true, 'Сохранение...');
      api.setNewAvatar(item)
      .then(result=> {
        result.avatar = item.link;
        userAvatar.src = result.avatar;
        popupWithAvatarForm.close();
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      })
      .finally(() => {
        popupWithAvatarForm.setLoadingState(false)
      });
  }
);
 
popupWithAvatarForm.setEventListeners();

// попап большой картинки
const popupWithImage = new PopupWithImage(popupPhoto);
popupWithImage.setEventListeners();
 
function handleLikeClick(card) {
  if (card.isLikedByMe()) {
    api.deleteLikeCard(card.getCardId())
      .then((updatedCard) => {
        card.handleDislikeCard();
        card.updateLikes(updatedCard.likes);
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    api.likeCard(card.getCardId())
      .then((updatedCard) => {
        card.handleLikeCard();
        card.updateLikes(updatedCard.likes);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

const popupConfirmation = new PopupWithConfirmation(
  popupConfirm,
  (card) => {
  popupConfirmation.setLoadingState(true, 'Удаление...');
  api.removeCardFromServer(cardId)
    .then(() => {
      card.remove(); // Используем метод removeItem для удаления карточки из секции
      popupConfirmation.close();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      popupConfirmation.setLoadingState(false);
    });
  });

popupConfirmation.setEventListeners();

let cardId;

function handleDeleteClick(card) {
  cardId = card.getCardId();
  popupConfirmation.open(card, cardId); // Передайте карточку и ее идентификатор в попап подтверждения
}
 
 
// попап добавления новой карточки
const popupWithAddForm = new PopupWithForm(
  popupAdd,
  (item) => {
    popupWithAddForm.setLoadingState(true, 'Сохранение...');
    api.addNewCard(item)
    .then((result)=> {
      const card = createCard(result, userId);
      cardZone.addItem(card);
      popupWithAddForm.close();
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
  })
  .finally(() => {
    popupWithAddForm.setLoadingState(false)
  });
  }
);
 
popupWithAddForm.setEventListeners();

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
 
// открытие попапа большого фото
function handleCardClick(name, link) {
  popupWithImage.open(name, link);
};
 
editButton.addEventListener('click', handleOpenEditForm);
addButton.addEventListener('click', handleOpenAddForm);
avatarButton.addEventListener('click', handleOpenAvetarForm);