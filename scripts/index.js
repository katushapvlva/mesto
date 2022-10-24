const openPopupEdit = document.querySelector('.profile__edit-button');
const openPopupAdd = document.querySelector('.profile__add-button');

const popupEdit = document.querySelector('#popup-edit');
const popupAdd = document.querySelector('#popup-add');
const popupImg = document.querySelector('#popup-img');

const popupImgPhoto = popupImg.querySelector('#img');
const popupImgTitle = popupImg.querySelector('#title');

const closePopupEdit = document.querySelector('#popup__close-edit');
const closePopupAdd = document.querySelector('#popup__close-add');

const formElementProfile = document.forms['profile-form'];
const formElementPlace = document.forms['place-form'];
const nameInput = formElementProfile.querySelector('.popup__input-text_type_name');
const jobInput = formElementProfile.querySelector('.popup__input-text_type_description');
const placeInput = formElementPlace.querySelector('.popup__input-text_type_place');
const linkInput = formElementPlace.querySelector('.popup__input-text_type_link');

const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__description');
const placeTitle = document.querySelector('.elements__title');
const linkPhoto = document.querySelector('.elements__photo');

const validation = { // new
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}; 

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

const containerElements = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card').content;

function createCard(item) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardPhoto = cardElement.querySelector('#photo');

  cardPhoto.src = item.link;
  cardPhoto.alt = item.name;
  cardElement.querySelector('#place').textContent = item.name;

  cardElement.querySelector('#like').addEventListener('click', likeCard);
  cardElement.querySelector('#delete').addEventListener('click', deleteCard);
  cardPhoto.addEventListener('click', openCard);

  return cardElement;
}

initialCards.forEach((item) => {
  const cardElement = createCard(item)
  containerElements.append(cardElement);
});

function createNewCard() { 
  const item = {
    name: placeInput.value,
    link: linkInput.value,
  };
  const cardElement = createCard(item);

  containerElements.prepend(cardElement);
}

function likeCard(event) {
  event.target.classList.toggle('elements__like-button_active');
}

function deleteCard(event) {
  event.target.closest('.elements__element').remove();
}

function openCard(event) {
  openPopup(popupImg);
  popupImgPhoto.src = event.target.src;
  popupImgPhoto.alt = event.target.alt;
  popupImgTitle.textContent = event.target.alt;
}

const closeButtons = document.querySelectorAll('.popup__close');
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');

  button.addEventListener('click', () => {
    closePopup(popup);
  });
});

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// new
function closePopupClickOnOverlay(event) {
  if (event.target == event.currentTarget) {
    closePopup(popupEdit);
    closePopup(popupAdd);
    closePopup(popupImg);
  }
}
popupEdit.addEventListener('click', closePopupClickOnOverlay);
popupAdd.addEventListener('click', closePopupClickOnOverlay);
popupImg.addEventListener('click', closePopupClickOnOverlay);

// new
function handlerKey(event) {
  if (event.key === 'Escape') {
    closePopup(popupEdit);
    closePopup(popupAdd);
    closePopup(popupImg);
  }
}
document.addEventListener('keydown', handlerKey);

function handlerFormSubmitEdit (evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;

  closePopup(popupEdit);
}

function handlerFormSubmitAdd (evt) {
  evt.preventDefault();

  createNewCard();

  closePopup(popupAdd);
  evt.target.reset();
}

openPopupEdit.addEventListener('click', () => {
  openPopup(popupEdit);
}); 
openPopupAdd.addEventListener('click', () => {
  openPopup(popupAdd);
}); 

formElementProfile.addEventListener('submit', handlerFormSubmitEdit); 
formElementPlace.addEventListener('submit', handlerFormSubmitAdd);