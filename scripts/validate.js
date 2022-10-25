const showInputError = (formElement, inputElement, errorMessage, selectorsAndClasses) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(selectorsAndClasses.inputErrorClass); // 'popup__input-text_error'
  errorElement.textContent = errorMessage;
}

const hideInputError = (formElement, inputElement, selectorsAndClasses) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(selectorsAndClasses.inputErrorClass); // 'popup__input-text_error'
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, selectorsAndClasses) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, selectorsAndClasses);
  } else {
    hideInputError(formElement, inputElement, selectorsAndClasses);
  }
};

const setEventListeners = (formElement, selectorsAndClasses) => {
  const inputList = Array.from(formElement.querySelectorAll(selectorsAndClasses.inputSelector)); // '.popup__input-text'
  const buttonElement = formElement.querySelector(selectorsAndClasses.submitButtonSelector); // '.popup__save-button'
  
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, selectorsAndClasses);
      toggleButtonState(inputList, buttonElement, selectorsAndClasses);
    });
  });  
};

const enableValidation = (selectorsAndClasses) => {
  const formList = Array.from(document.querySelectorAll(selectorsAndClasses.formSelector)); // '.popup__form'
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, selectorsAndClasses);
  });
};

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(inputList, buttonElement, selectorsAndClasses) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(selectorsAndClasses.inactiveButtonClass); // 'popup__save-button_disabled'
    buttonElement.setAttribute('disabled', true);
  }
  else {
     buttonElement.classList.remove(selectorsAndClasses.inactiveButtonClass); // 'popup__save-button_disabled'
     buttonElement.removeAttribute('disabled');
  }
}

enableValidation(selectorsAndClasses);