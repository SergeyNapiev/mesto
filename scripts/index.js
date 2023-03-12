const popupEdit = document.querySelector('#edit');
const popupAdd = document.querySelector('#add');
const popupPhoto = document.querySelector('#photo');
const popups = Array.from(document.querySelectorAll('.popup'));
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
const fullImage = document.querySelector('.popup__item'); 
const fullImageTitle = document.querySelector('.popup__title'); 

const editButtonElement = editFormElement.querySelector('#submit-edit');
const addButtonElement = addFormElement.querySelector('#submit-add');
const errorAddElement = Array.from(addFormElement.querySelectorAll('.popup__error'));
const errorAddInputElement = Array.from(addFormElement.querySelectorAll('.popup__input'));
const errorEditElement = Array.from(editFormElement.querySelectorAll('.popup__error'));
const errorEditInputElement = Array.from(editFormElement.querySelectorAll('.popup__input'));

popups.forEach(item => {
  item.addEventListener('mousedown', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(item);
    }
  });
});

function handleCloseByEscape (evt) {
    if (evt.code === "Escape") { 
      const popupOpened = document.querySelector('.popup_opened');
      closePopup(popupOpened); 
    }
}

function openPopup (item) {
  document.addEventListener('keydown', handleCloseByEscape);
  item.classList.add('popup_opened');
}

function closePopup (item) {
  document.removeEventListener('keydown', handleCloseByEscape);
  item.classList.remove('popup_opened');
}

function handleOpenEditForm () {
  nameInput.value = nameProfile.textContent;
  jobInput.value = aboutProfile.textContent;
  enableButton(editButtonElement, validationOptions.inactiveButtonClass);
  errorEditElement.forEach(item => {
    item.classList.remove('popup__error_visible');
  });
  errorEditInputElement.forEach(item => {
    item.classList.remove('popup__input_type_error');
  })
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
  disableButton(addButtonElement, validationOptions.inactiveButtonClass);
  errorAddElement.forEach(item => {
    item.classList.remove('popup__error_visible');
  });
  errorAddInputElement.forEach(item => {
    item.classList.remove('popup__input_type_error');
  })
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



enableValidation(validationOptions);

