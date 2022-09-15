let openPopup = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopup = popup.querySelector('.popup__close');

let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__form-name'); 
let jobInput = formElement.querySelector('.popup__form-description'); 

let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__description');

let savePopup = popup.querySelector('.popup__save-button');

function popupToggle() {
  popup.classList.toggle('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
}

openPopup.addEventListener('click', popupToggle);
closePopup.addEventListener('click', popupToggle);
savePopup.addEventListener('click', popupToggle);
formElement.addEventListener('submit', formSubmitHandler); 