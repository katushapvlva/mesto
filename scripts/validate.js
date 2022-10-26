const showInputError = (formElement, inputElement, errorMessage, selectorsAndClasses) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(selectorsAndClasses.inputErrorClass); 
  errorElement.textContent = errorMessage;
}

const hideInputError = (formElement, inputElement, selectorsAndClasses) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(selectorsAndClasses.inputErrorClass); 
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
  const inputList = Array.from(formElement.querySelectorAll(selectorsAndClasses.inputSelector));
  const buttonElement = formElement.querySelector(selectorsAndClasses.submitButtonSelector); 
  
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, selectorsAndClasses);
      toggleButtonState(inputList, buttonElement, selectorsAndClasses);
    });
  });  
};

const enableValidation = ({formSelector, ...selectorsAndClasses}) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
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

function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    disabledButton(buttonElement);
  }
  else {
    activateButton(buttonElement);
  }
}

function disabledButton(buttonElement) { // new
  buttonElement.classList.add(selectorsAndClasses.inactiveButtonClass);
  buttonElement.setAttribute('disabled', true);
}

function activateButton(buttonElement) { // new
  buttonElement.classList.remove(selectorsAndClasses.inactiveButtonClass);
  buttonElement.removeAttribute('disabled');
}

enableValidation(selectorsAndClasses);