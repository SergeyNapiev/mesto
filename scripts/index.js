const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close');
const editNamePopup = document.querySelector('.popup__name');
const editNameProfile = document.querySelector('.profile__name');
const editAboutProfile = document.querySelector('.profile__about');
const editAboutPopup = document.querySelector('.popup__about');
const submitButton = document.querySelector('.popup__save');

const toggleOpenPopup = () => {
    popup.classList.toggle('popup_opened')
}

function saveClose (closing) {
    if (closing.target === closing.currentTarget)
    toggleOpenPopup ();
}

const handleEditButtonClick = () => {
    toggleOpenPopup ();
}

editButton.addEventListener('click', handleEditButtonClick);
closeButton.addEventListener('click', saveClose);
popup.addEventListener('click', saveClose);

function newInfo () {
    editNameProfile.textContent = editNamePopup.value;
    editAboutProfile.textContent = editAboutPopup.value;
}

submitButton.addEventListener ('click', (event) => {
    event.preventDefault();
    console.log(event);
    newInfo ();
    saveClose (submitButton);
});