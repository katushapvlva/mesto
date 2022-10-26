const buttonOpenPopupEdit = document.querySelector('.profile__edit-button');
const buttonOpenPopupAdd = document.querySelector('.profile__add-button');

const popupEdit = document.querySelector('#popup-edit');
const popupAdd = document.querySelector('#popup-add');
const popupImg = document.querySelector('#popup-img');

const popupImgPhoto = popupImg.querySelector('#img');
const popupImgTitle = popupImg.querySelector('#title');

const buttonClosePopupEdit = document.querySelector('#popup__close-edit');
const buttonClosePopupAdd = document.querySelector('#popup__close-add');

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

const containerElements = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card').content.querySelector('#element');

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
  const cardElement = createCard(item);
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
  popupImgPhoto.src = event.target.src;
  popupImgPhoto.alt = event.target.alt;
  popupImgTitle.textContent = event.target.alt;
  openPopup(popupImg);
}

const buttonsClose = document.querySelectorAll('.popup__close');
buttonsClose.forEach((button) => {
  const popup = button.closest('.popup');

  button.addEventListener('click', () => {
    closePopup(popup);
  });
});

function openPopup(popup) {
  popup.classList.add('popup_opened');
  popup.addEventListener('click', closePopupClickOnOverlay);
  document.addEventListener('keydown', handlerKey);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('click', closePopupClickOnOverlay);
  document.removeEventListener('keydown', handlerKey);
}

function closePopupClickOnOverlay(event) {
  if (event.target == event.currentTarget) {
    const popupOpened = document.querySelector('.popup_opened')
    closePopup(popupOpened);
  }
}

function handlerKey(event) {
  if (event.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened')
    closePopup(popupOpened);
  }
}

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

buttonOpenPopupEdit.addEventListener('click', () => {
  openPopup(popupEdit);
}); 
buttonOpenPopupAdd.addEventListener('click', () => {
  const submitButton = popupAdd.querySelector('.popup__save-button');
  openPopup(popupAdd);
  disabledButton(submitButton);
}); 

formElementProfile.addEventListener('submit', handlerFormSubmitEdit); 
formElementPlace.addEventListener('submit', handlerFormSubmitAdd);