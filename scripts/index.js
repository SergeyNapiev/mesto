const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup'); 
const closeButton = document.querySelector('.popup__close');

const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('#name');
const jobInput = formElement.querySelector('#about');
const nameProfile = document.querySelector('.profile__name');
const aboutProfile = document.querySelector('.profile__about');

function popupOpen () {
    popup.classList.add('popup_opened');
}

function popupClose () {
    popup.classList.remove('popup_opened');
}

function handleFormOpen () {
    nameInput.value = nameProfile.textContent;
    jobInput.value = aboutProfile.textContent;
    popupOpen();
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    nameInput.getAttribute('value');
    jobInput.getAttribute('value');
    nameProfile.textContent = nameInput.value;
    aboutProfile.textContent = jobInput.value;
    popupClose();
}

editButton.addEventListener('click', handleFormOpen);
closeButton.addEventListener('click', popupClose);
formElement.addEventListener('submit', handleFormSubmit); 