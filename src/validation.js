
// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement,errorMessage,validateConfig) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(validateConfig.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validateConfig.errorClass);
  };
  
  // Функция, которая удаляет класс с ошибкой
  const hideInputError = (formElement, inputElement,validateConfig) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(validateConfig.inputErrorClass);
    errorElement.classList.remove(validateConfig.errorClass);
    errorElement.textContent = '';
  };
  
  // Функция, которая проверяет валидность поля
  const isValid = (formElement, inputElement,validateConfig) => {
    if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity("");
  }
    if (!inputElement.validity.valid) {
      // Если поле не проходит валидацию, покажем ошибку
      showInputError(formElement,inputElement,inputElement.validationMessage,validateConfig);
    } else {
      // Если проходит, скроем
      hideInputError(formElement, inputElement,validateConfig);
    }
  };
  
  const setEventListeners = (formElement,validateConfig) => {
    const inputList = Array.from(formElement.querySelectorAll(validateConfig.inputSelector));
    const buttonElement = formElement.querySelector(validateConfig.submitButtonSelector);
    toggleButtonState(inputList, buttonElement,validateConfig);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        isValid(formElement, inputElement,validateConfig);
        toggleButtonState(inputList, buttonElement,validateConfig);
        
      });
    });
  };
  
  
  
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement)=>{
     return !inputElement.validity.valid;
    })
   };
  

   const toggleButtonState = (inputList,buttonElement,validateConfig) =>{
    if (hasInvalidInput(inputList)){
     buttonElement.disabled=true;
    buttonElement.classList.add(validateConfig.inactiveButtonClass);
    } else {
     buttonElement.disabled=false;
    buttonElement.classList.remove(validateConfig.inactiveButtonClass);
    }
   };
  
  
    const clearValidation = (formElement, validateConfig) => { 
      const inputList = Array.from( 
      formElement.querySelectorAll(validateConfig.inputSelector) 
    ); 
      const submitButton = formElement.querySelector( 
      validateConfig.submitButtonSelector 
    ); 
      inputList.forEach((inputElement) => { 
      inputElement.value = ""; 
      hideInputError(formElement, inputElement, validateConfig); 
    }); 
      toggleButtonState(inputList,submitButton,validateConfig); 
  };
  

  const enableValidation = (validateConfig) => {
    const formList = Array.from(document.querySelectorAll(validateConfig.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
        setEventListeners(formElement,validateConfig);
    });
  };

 export {enableValidation,clearValidation};