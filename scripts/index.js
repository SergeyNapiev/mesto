const popupEdit = document.querySelector('#edit');
const popupAdd = document.querySelector('#add');
const popupPhoto =document.querySelector('#photo');

const editButton = document.querySelector('.profile__edit-button');
const closeEditButton = popupEdit.querySelector('#close-edit');
const closeAddButton = popupAdd.querySelector('#close-add');
const closePhotoButton = popupPhoto.querySelector('#close-photo');
const addButton = document.querySelector('.profile__add-button');
const createButton = popupAdd.querySelector('.popup__save');

const editHeading = popupAdd.querySelector('.popup__heading');


const editFormElement = document.querySelector('#edit-info');
const nameInput = editFormElement.querySelector('#name');
const jobInput = editFormElement.querySelector('#about');
const nameProfile = document.querySelector('.profile__name');
const aboutProfile = document.querySelector('.profile__about');

const elementsListWrapper = document.querySelector('.elements');
const element = document.querySelector('.elements__element');
const template = document.querySelector('#element');
const namePlace = template.querySelector('.elements__title');
const urlPlace = template.querySelector('.elements__item');

const addFormElement = document.querySelector('#add-place');
const titleInput = popupAdd.querySelector('#place');
const urlInput = popupAdd.querySelector('#url');

function popupOpen (item) {
  item.classList.add('popup_opened');
}

function popupClose (item) {
  item.classList.remove('popup_opened');
}

function handleOpenEditForm () {
  nameInput.value = nameProfile.textContent;
  jobInput.value = aboutProfile.textContent;
  popupOpen(popupEdit);
}

function handleEditFormSubmit (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  aboutProfile.textContent = jobInput.value;
  popupClose(popupEdit);
}

function handleOpenAddForm () {
  addFormElement.reset();
  popupOpen(popupAdd);
}

//создание карточек
const getElement = (element) => {
  const newElement = template.content.firstElementChild.cloneNode(true);
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
        popupOpen(popupPhoto); 
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
  console.log(evt);
  renderElement(elementsListWrapper, newCard); 
  popupClose(popupAdd); 
}) 

editButton.addEventListener('click', handleOpenEditForm);
closeEditButton.addEventListener('click', () => {
  popupClose(popupEdit);
});
closeAddButton.addEventListener('click', () => {
  popupClose(popupAdd);
});
closePhotoButton.addEventListener('click',() => {
  popupClose(popupPhoto);
});
editFormElement.addEventListener('submit', handleEditFormSubmit);
addButton.addEventListener('click', handleOpenAddForm);