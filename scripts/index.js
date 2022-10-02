let openPopupEdit = document.querySelector('.profile__edit-button');
let openPopupAdd = document.querySelector('.profile__add-button');
let popupEdit = document.querySelector('#popup__edit');
let popupAdd = document.querySelector('#popup__add');
let closePopupEdit = document.querySelector('#popup__close-edit');
let closePopupAdd = document.querySelector('#popup__close-add');

let formElementProfile = document.querySelector('#profile__form');
let formElementPlace = document.querySelector('#place__form');
let nameInput = formElementProfile.querySelector('.popup__input-text_type_name');
let jobInput = formElementProfile.querySelector('.popup__input-text_type_description');
let placeInput = formElementPlace.querySelector('.popup__input-text_type_place');
let linkInput = formElementPlace.querySelector('.popup__input-text_type_link');

let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__description');
let placeTitle = document.querySelector('.elements__title');
let linkPhoto = document.querySelector('.elements__photo');

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

initialCards.forEach((item) => { // new
  const containerElements = document.querySelector('.elements');
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('#photo').src = item.link;
  cardElement.querySelector('#title').textContent = item.name;
  
  cardElement.querySelector('#like').addEventListener('click', (event) => {
    event.target.classList.toggle('elements__like-button_active');
  })

  containerElements.append(cardElement);
})

function popupToggle(popup) { // new
  popup.classList.toggle('popup_opened');

  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;

  linkInput.value = "";
  placeInput.value = "";
}

function formSubmitHandlerEdit (evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;

  popupToggle(popupEdit);
}

function formSubmitHandlerAdd (evt) { // new
  evt.preventDefault();

  const containerElements = document.querySelector('.elements');
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('#photo').src = linkInput.value;
  cardElement.querySelector('#title').textContent = placeInput.value;
  
  cardElement.querySelector('#like').addEventListener('click', (event) => {
    event.target.classList.toggle('elements__like-button_active');
  });

  containerElements.prepend(cardElement);

  popupToggle(popupAdd)
}

openPopupEdit.addEventListener('click', () => {
  popupToggle(popupEdit);
}); 
openPopupAdd.addEventListener('click', () => {
  popupToggle(popupAdd);
}); 
closePopupEdit.addEventListener('click', () => {
  popupToggle(popupEdit);
}); 
closePopupAdd.addEventListener('click', () => {
  popupToggle(popupAdd);
}); 
formElementProfile.addEventListener('submit', formSubmitHandlerEdit); 
formElementPlace.addEventListener('submit', formSubmitHandlerAdd); 