const popupEdit = document.querySelector('#edit');
const popupAdd = document.querySelector('#add');
const popupPhoto =document.querySelector('#photo');

const editButton = document.querySelector('.profile__edit-button');
const closeEditButton = popupEdit.querySelector('#close-edit');
const closeAddButton = popupAdd.querySelector('#close-add');
const closePhotoButton = popupPhoto.querySelector('#close-photo');
const addButton = document.querySelector('.profile__add-button');


const editHeading = popupAdd.querySelector('.popup__heading');


const editFormElement = document.querySelector('#edit-info');
const nameInput = editFormElement.querySelector('#name');
const jobInput = editFormElement.querySelector('#about');
const nameProfile = document.querySelector('.profile__name');
const aboutProfile = document.querySelector('.profile__about');

const elementsListWrapper = document.querySelector('.elements');
const element = document.querySelector('.elements__element');
const template = document.querySelector('#element').content;
const namePlace = template.querySelector('.elements__title');
const urlPlace = template.querySelector('.elements__item');

const addFormElement = document.querySelector('#add-place');
const titleInput = popupAdd.querySelector('#place');
const urlInput = popupAdd.querySelector('#url');

function openPopup (item) {
  item.classList.add('popup_opened');
}

function closePopup (item) {
  item.classList.remove('popup_opened');
}

function handleOpenEditForm () {
  nameInput.value = nameProfile.textContent;
  jobInput.value = aboutProfile.textContent;
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
  openPopup(popupAdd);
}

//создание карточек
const getElement = (element) => {
  const newElement = template.querySelector('.elements__element').cloneNode(true);
  const newElementTitile = newElement.querySelector('.elements__title');
  const newElementPhoto = newElement.querySelector('.elements__item');

  //удаление
  const removeButton = newElement.querySelector('.elements__delete');

  function handleRemoveButton () {
    removeButton.closest('.elements__element').remove();
  }
  
  removeButton.addEventListener('click', handleRemoveButton);

  //лайк
  const likeButton = newElement.querySelector('.elements__heart');
  
  function toggleLike () {
      likeButton.classList.toggle('elements__heart_active');
  }
  likeButton.addEventListener('click', toggleLike);
  
  newElementTitile.textContent = element.name;
  newElementPhoto.src = element.link;
  newElementPhoto.alt = element.name; 
  
  const photoElement = newElement.querySelector('.elements__item'); 
  photoElement .addEventListener("click", () => { 
        const fullImage = document.querySelector('.popup__item'); 
        const fullImageTitle = document.querySelector('.popup__title'); 
        fullImage.src = newElementPhoto.src; 
        fullImageTitle.textContent = newElementTitile.textContent; 
        fullImage.setAttribute('alt', fullImageTitle.textContent); 
        openPopup(popupPhoto); 
        } 
  );

  return newElement;
}

const renderElement = (wrap, element) => {
  wrap.prepend(getElement(element));
}

initialCards.forEach((element) => {
  renderElement(elementsListWrapper, element);
})

addFormElement.addEventListener('submit', (evt) => { 
  evt.preventDefault(); 
  const newCard = {
    name: titleInput.value,
    link: urlInput.value
  }
  renderElement(elementsListWrapper, newCard); 
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

const hiddenError = (errorElement, submitSelector, inputErrorClass, errorClass) => {
  errorElement.innerText = '';
  submitSelector.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
}

const showError = (submitSelector, errorElement, message, inputErrorClass, errorClass) => {
  errorElement.innerText = message;
  submitSelector.classList.add(inputErrorClass);
  errorElement.classList.add(errorClass);
}


const toggleInputState = (submitSelector, options) => {
  const isValid = submitSelector.validity.valid;
  const inputSectionElenemt = submitSelector.closest(options.inputSectionsSelector);
  const errorElement = inputSectionElenemt.querySelector(options.inputErrorSelector);
  if (isValid) {
      hiddenError(errorElement, submitSelector, options.inputErrorClass, options.errorClass);
    } else {
      showError(submitSelector, errorElement, submitSelector.validationMessage, options.inputErrorClass, options.errorClass);
    }
}

const enableButton = (buttonSubmitElement, inactiveButtonClass) => {
  buttonSubmitElement.removeAttribute('disabled');
  buttonSubmitElement.classList.remove(inactiveButtonClass);
};

const disableButton = (buttonSubmitElement, inactiveButtonClass) => {
  buttonSubmitElement.setAttribute('disabled', 'true');
  buttonSubmitElement.classList.add(inactiveButtonClass);
};

const enableValidation = (options) => {
  const forms = Array.from(document.querySelectorAll(options.formSelector));
  forms.forEach(form  => {
    setEventListener(form, options);
  });
};

const toggleButtonState = (inputs, buttonSubmitElement, inactiveButtonClass) => {
  const formIsValid = inputs.every(submitSelector => submitSelector.validity.valid);
  if (formIsValid) {
    enableButton(buttonSubmitElement, inactiveButtonClass);
  } else {
    disableButton(buttonSubmitElement, inactiveButtonClass);
  } 
}

const setEventListener = (form, options) => {
  const buttonSubmitElement = form.querySelector(options.submitButtonSelector);
  const inputs = Array.from(form.querySelectorAll(options.inputSelector));

  inputs.forEach(submitSelector => {
    submitSelector.addEventListener('input', () => {
      toggleInputState(submitSelector, options);
      toggleButtonState(inputs, buttonSubmitElement, options.inactiveButtonClass);
    });
  });
  toggleButtonState(inputs, buttonSubmitElement, options.inactiveButtonClass);
};

const options = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
  inputSectionsSelector: '.popup__section',
  inputErrorSelector: '.popup__error'
}

enableValidation(options);

/* 
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}); 
*/