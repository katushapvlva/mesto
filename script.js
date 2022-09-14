let openPopup = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopup = popup.querySelector('.popup__close');

function popupToggle() {
  popup.classList.toggle('popup_opened');
  console.log('Нажала кнопку')
}

openPopup.addEventListener('click', popupToggle);
closePopup.addEventListener('click', popupToggle);