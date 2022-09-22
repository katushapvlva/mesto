let openPopup = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopup = popup.querySelector('.popup__close');

let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input-text_type_name'); 
let jobInput = formElement.querySelector('.popup__input-text_type_description'); 

let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__description');

function popupToggle() {
  popup.classList.toggle('popup_opened');
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

function formSubmitHandler (evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;

  popupToggle();
}

openPopup.addEventListener('click', popupToggle);
closePopup.addEventListener('click', popupToggle);
formElement.addEventListener('submit', formSubmitHandler);