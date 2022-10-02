let openPopupEdit = document.querySelector('.profile__edit-button'); // new
let openPopupAdd = document.querySelector('.profile__add-button'); // new
let popupEdit = document.querySelector('#popup__edit'); // new
let popupAdd = document.querySelector('#popup__add'); // new
let closePopupEdit = document.querySelector('#popup__close-edit'); // new
let closePopupAdd = document.querySelector('#popup__close-add'); // new

let formElementProfile = document.querySelector('#profile__form'); // new
let formElementPlace = document.querySelector('#place__form'); // new
let nameInput = formElementProfile.querySelector('.popup__input-text_type_name'); // new
let jobInput = formElementProfile.querySelector('.popup__input-text_type_description'); // new
let placeInput = formElementPlace.querySelector('.popup__input-text_type_place'); // new
let linkInput = formElementPlace.querySelector('.popup__input-text_type_link'); // new

let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__description');
let placeTitle = document.querySelector('.elements__title'); // new
let linkPhoto = document.querySelector('.elements__photo'); // new

const initialCards = [ // new
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

initialCards.forEach(function (item) {
  const containerElements = document.querySelector('.elements');
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('#photo').src = item.link;
  cardElement.querySelector('#title').textContent = item.name;
  containerElements.append(cardElement);
})

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
formElementProfile.addEventListener('submit', formSubmitHandler); // new
formElementPlace.addEventListener('submit', formSubmitHandler); // new