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

const setEventListener = (form) => {
  const buttonSubmitElement = form.querySelector('.popup__button');
const inputs = Array.from(form.querySelectorAll('.popup__input'));

inputs.forEach(inputSelector => {

  inputSelector.addEventListener('input', () => {
    const isValid = inputSelector.validity.valid;
    const inputSectionElenemt = inputSelector.parentNode;
    const errorElement = inputSectionElenemt.querySelector('.popup__error');
    if (isValid) {
      errorElement.textContent = '';
      inputSelector.classList.remove('popup__input_type_error');
      errorElement.classList.remove('popup__error_visible');
    } else {
      errorElement.textContent = inputSelector.validationMessage;
      inputSelector.classList.add('popup__input_type_error');
      errorElement.classList.add('popup__error_visible');
    }

    toggleButtonState(inputs, buttonSubmitElement);

  });
});

const toggleButtonState = (inputs, buttonSubmitElement) => {
  const formIsValid = inputs.every(inputSelector => inputSelector.validity.valid);

  if (formIsValid) {
    buttonSubmitElement.removeAttribute('disabled');
    buttonSubmitElement.classList.remove('popup__button_disabled');
  } else {
    buttonSubmitElement.setAttribute('disabled', 'true');
    buttonSubmitElement.classList.add('popup__button_disabled');
  } 
}
};

const enableValidation = () => {
  const forms = Array.from(document.querySelectorAll('.popup__form'));
  forms.forEach(form  => {
    setEventListener(form);
  });
};

enableValidation();