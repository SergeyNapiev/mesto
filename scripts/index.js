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
    }
]; 

const editButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('#edit'); 
const closeEditButton = document.querySelector('.popup__close');

const addButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('#add');
const editHeading = popupAdd.querySelector('.popup__heading');
const createButton = popupAdd.querySelector('.popup__save');
const closeAddButton = popupAdd.querySelector('.popup__close');

const editFormElement = document.getElementById('edit-info');
const nameInput = editFormElement.querySelector('#name');
const jobInput = editFormElement.querySelector('#about');
const nameProfile = document.querySelector('.profile__name');
const aboutProfile = document.querySelector('.profile__about');


function popupOpenEdit () {
    popupEdit.style.animation = 'fadeIn 1s';
    popupEdit.style.visibility = 'visible';
    popupEdit.style.transition = '1s';
}

function popupCloseEdit () {
    popupEdit.style.animation = 'fadeOut 1s';
    popupEdit.style.visibility = 'hidden';
    popupEdit.style.transition = '1s';
}

function popupOpenAdd () {
    popupAdd.style.animation = 'fadeIn 1s';
    popupAdd.style.visibility = 'visible';
    popupAdd.style.transition = '1s';
}

function popupCloseAdd () {
    popupAdd.style.animation = 'fadeOut 1s';
    popupAdd.style.visibility = 'hidden';
    popupAdd.style.transition = '1s';
}

function handleFormOpenEdit () {
    nameInput.value = nameProfile.textContent;
    jobInput.value = aboutProfile.textContent;
    popupOpenEdit();
}

function handleEditFormSubmit (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    aboutProfile.textContent = jobInput.value;
    nameInput.setAttribute('placeholder', '');
    jobInput.setAttribute('placeholder', '');
    popupCloseEdit();
}

function handleAddFormOpen () {
    editHeading.textContent = 'Новое место';
    titleInput.value = '';
    urlInput.value = '';
    titleInput.setAttribute('placeholder', 'Название');
    urlInput.setAttribute('placeholder', 'Ссылка на картинку');
    createButton.textContent = 'Создать';
    popupOpenAdd();
}
//создание карточек
const elementsListWrapper = document.querySelector('.elements');
const element = document.querySelector('.elements__element');
const template = document.getElementById('element');
const namePlace = template.querySelector('.elements__title');
const urlPlace = template.querySelector('.elements__item');

const getElement = (element) => {
  const newElement = template.content.cloneNode(true);
  const newElementTitile = newElement.querySelector('.elements__title');
  const newElementPhoto = newElement.querySelector('.elements__item');
  newElementTitile.textContent = element.name;
  newElementPhoto.src = element.link;
  return newElement;
}

//для новых карточек  
const getNewElement = () => {
  const newElement = template.content.cloneNode(true);
  const newElementTitile = newElement.querySelector('.elements__title');
  const newElementPhoto = newElement.querySelector('.elements__item');
  newElementTitile.textContent = titleInput.value;
  newElementPhoto.src = urlInput.value;
  return newElement;
}

const renderElement = (wrap, element) => {
  wrap.prepend(getElement(element));
}

const renderNewElement = (wrap, element) => { //для новых
  wrap.prepend(getNewElement(element));
}

initialCards.forEach((element) => {
  renderElement(elementsListWrapper, element);
})

const addFormElement = document.getElementById('add-place');
const titleInput = popupAdd.querySelector('.popup__input_text_name');
const urlInput = popupAdd.querySelector('.popup__input_text_about');

addFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  renderNewElement(elementsListWrapper);
  popupCloseAdd();
})

editButton.addEventListener('click', handleFormOpenEdit);
closeEditButton.addEventListener('click', popupCloseEdit);
editFormElement.addEventListener('submit', handleEditFormSubmit);
addButton.addEventListener('click', handleAddFormOpen);
closeAddButton.addEventListener('click', popupCloseAdd);