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

const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('#name');
const jobInput = formElement.querySelector('#about');
const nameProfile = document.querySelector('.profile__name');
const aboutProfile = document.querySelector('.profile__about');

const like = document.querySelector('.elements__heart');


function toggleLike () {
    like.classList.toggle('elements__heart');
    like.classList.toggle('elements__heart_active');
}

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
    nameInput.value = '';
    jobInput.value = '';
    nameInput.setAttribute('placeholder', 'Название');
    jobInput.setAttribute('placeholder', 'Ссылка на картинку');
    createButton.textContent = 'Создать';
    popupOpenAdd();
}



editButton.addEventListener('click', handleFormOpenEdit);
closeEditButton.addEventListener('click', popupCloseEdit);
formElement.addEventListener('submit', handleEditFormSubmit);
like.addEventListener('click', toggleLike);
addButton.addEventListener('click', handleAddFormOpen);
closeAddButton.addEventListener('click', popupCloseAdd);