let openPopupEdit = document.querySelector('.profile__edit-button');
let openPopupAdd = document.querySelector('.profile__add-button'); // new
let popupEdit = document.querySelector('#popup__edit'); // new
let popupAdd = document.querySelector('#popup__add'); // new
let closePopupEdit = document.querySelector('#popup__close-edit'); // new
let closePopupAdd = document.querySelector('#popup__close-add'); // new

let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input-text_type_name'); 
let jobInput = formElement.querySelector('.popup__input-text_type_description'); 
let placeInput = formElement.querySelector('.popup__input-text_type_place'); // new
let linkInput = formElement.querySelector('.popup__input-text_type_link'); // new

let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__description');
let placeTitle = document.querySelector('.elements__title'); // new
let linkPhoto = document.querySelector('.elements__photo'); // new

function popupToggle(popup) { // new
  popup.classList.toggle('popup_opened'); // new
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

function formSubmitHandler (evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;

  // placeTitle.textContent = placeInput.value; // new
  // linkPhoto.textContent = linkInput.value; // new

  popupToggle(popupEdit); // "заглушка"
}

openPopupEdit.addEventListener('click', () => {
  popupToggle(popupEdit);
}); // new
openPopupAdd.addEventListener('click', () => {
  popupToggle(popupAdd);
}); // new
closePopupEdit.addEventListener('click', () => {
  popupToggle(popupEdit);
}); // new
closePopupAdd.addEventListener('click', () => {
  popupToggle(popupAdd);
}); // new
formElement.addEventListener('submit', formSubmitHandler);