const openPopupEdit = document.querySelector('.profile__edit-button');
const openPopupAdd = document.querySelector('.profile__add-button');

const popupEdit = document.querySelector('#popup-edit');
const popupAdd = document.querySelector('#popup-add');
const popupImg = document.querySelector('#popup-img');

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

function createInitialCards(item) { // new
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

initialCards.forEach((item) => { // fix
  const cardElement = createInitialCards(item)
  containerElements.append(cardElement);
});

function createNewCard() { // new
  const cardElement = cardTemplate.cloneNode(true);
  const cardPhoto = cardElement.querySelector('#photo');
  
  cardPhoto.src = linkInput.value;
  cardPhoto.alt = placeInput.value;
  cardElement.querySelector('#place').textContent = placeInput.value;

  cardElement.querySelector('#like').addEventListener('click', likeCard);
  cardElement.querySelector('#delete').addEventListener('click', deleteCard);
  cardPhoto.addEventListener('click', openCard);

  containerElements.prepend(cardElement);
}

function likeCard(event) { // new
  event.target.classList.toggle('elements__like-button_active');
}

function deleteCard(event) { // new
  event.target.closest('.elements__element').remove();
}

function openCard(event) { // new
  openPopup(popupImg);
  popupImg.querySelector('#img').src = event.target.src;
  popupImg.querySelector('#title').textContent = event.target.alt;
}

const closeButtons = document.querySelectorAll('.popup__close');

closeButtons.forEach((button) => { // new
  const popup = button.closest('.popup');

  button.addEventListener('click', () => {
    closePopup(popup);
  });
});

function openPopup(popup) { // new
  popup.classList.add('popup_opened');
}

function closePopup(popup) { // new
  popup.classList.remove('popup_opened');
}

function handlerFormSubmitEdit (evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;

  closePopup(popupEdit);
}

function handlerFormSubmitAdd (evt) { // fix
  evt.preventDefault();

  createNewCard();

  closePopup(popupAdd);
  clearInputAdd();
}

function clearInputAdd() {
  linkInput.value = "";
  placeInput.value = "";
}

openPopupEdit.addEventListener('click', () => {
  openPopup(popupEdit);
}); 
openPopupAdd.addEventListener('click', () => {
  openPopup(popupAdd);
}); 

formElementProfile.addEventListener('submit', handlerFormSubmitEdit); 
formElementPlace.addEventListener('submit', handlerFormSubmitAdd);