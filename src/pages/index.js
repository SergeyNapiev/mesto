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
  return api.getUserInfo()
    .then((result) => {
      userName.textContent = result.name;
      userAbout.textContent = result.about;
      userAvatar.src = result.avatar;
      return result._id;
    });
}
 
let userId;
setServerUserInfo()
  .then((id) => {
    userId = id; // присваиваем значение переменной "userId"
  });
 
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
      console.log(item);
      api.setNewAvatar(item)
      .then(result=> {
        result.avatar = item.link;
        userAvatar.src = result.avatar;
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
  // const likes = card.getLikes();
  if (card.isLikedByMe()) {
    card.handleDislikeCard();
    api.deleteLikeCard(card.getCardId())
      .then((updatedCard) => {
        card.updateLikes(updatedCard.likes);
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    card.handleLikeCard();
    api.likeCard(card.getCardId())
      .then((updatedCard) => {
        card.updateLikes(updatedCard.likes);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
 
// создание новой карточки
function createCard(item) {
  const card = new Card(
    item,
    templateSelector,
    handleCardClick,
    () => {
      const popupConfirmation = new PopupWithConfirmation(popupConfirm, () => {
        popupConfirmation.setLoadingState(true, 'Удаление...');
        const cardId = card.getCardId();
        api.removeCardFromServer(cardId)
          .then((res) => {
            console.log(res);
            card.remove();
            popupConfirmation.close();
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            popupConfirmation.setLoadingState(false)
          });
      });
      popupConfirmation.open();
      popupConfirmation.setEventListeners();
    },
    handleLikeClick,
    userId // передача значения userId
  );
  const newCard = card.generateCard(item);
  return newCard;
}
 
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
    popupWithAddForm.setLoadingState(true, 'Сохранение...');
    api.addNewCard(item)
    .then((result)=> {
      // container.addItem(createCard(result));
      const card = createCard(result);
      cardZone.addItem(card);
      popupWithAddForm.close();
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
  })
  .finally(() => {
    popupAdd.setLoadingState(false)
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