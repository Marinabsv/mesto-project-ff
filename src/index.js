import {openPopup,closePopup,closePopupOverlay} from './modal'
import "./pages/index.css";
import {initialCards} from "./scripts/cards";
import {createCard,like,deleteCard} from "./card";
//import  {showInputError,hideInputError,isValid,setEventListeners,hasInvalidInput,toggleButtonState,clearValidation} from "./validation"

const listCards = document.querySelector(".places__list");
const popupEditButton = document.querySelector(".profile__edit-button");
const popupAddButton = document.querySelector(".profile__add-button");
const editPopup = document.querySelector(".popup_type_edit");
const addPopup = document.querySelector(".popup_type_new-card");
const popupOpenImage=document.querySelector('.popup_type_image');
const popupImage=popupOpenImage.querySelector('.popup__image');
const popupCaption=popupOpenImage.querySelector('.popup__caption');
const newCardName=document.querySelector('.popup__input_type_card-name');
const newCardLink=document.querySelector('.popup__input_type_url');
const formPlace = document.forms["new-place"];
const submitNewCardButton=addPopup.querySelector('.popup__button');
const submitEditCardButton=editPopup.querySelector('.popup__button');
const popupCloseButtonEdit = editPopup.querySelector(".popup__close");
const popupCloseButtonAdd = addPopup.querySelector(".popup__close");
const popupCloseButtonImage = popupOpenImage.querySelector(".popup__close");
const formElement = document.querySelector('.popup__form');
export const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_description');
const profileTitle=document.querySelector('.profile__title');
const profileDescription=document.querySelector('.profile__description');
const editProfileForm=document.forms["edit-profile"];


// @todo: Вывести карточки на страницу 

initialCards.forEach((data) => {
  listCards.append(createCard(data, deleteCard,like,openImage));
});

///Добавление карточки-

formPlace.addEventListener('submit',function (evt){
  evt.preventDefault(); 
  const newCardObj= {
    name:newCardName.value,
    link:newCardLink.value
  }
  listCards.prepend(createCard(newCardObj,deleteCard,like,openImage));
  formPlace.reset();
  
  closePopup(addPopup);
});

///Редактирование информации-
  nameInput.value=profileTitle.textContent;
  jobInput.value=profileDescription.textContent;

  function handleFormSubmit(evt) {
    evt.preventDefault(); 
    profileTitle.textContent=nameInput.value;
    profileDescription.textContent=jobInput.value;
    closePopup(editPopup);
    
}

formElement.addEventListener('submit', handleFormSubmit);

///Открытие картинки-

function openImage(imgSrc,captionText){
  popupImage.src=imgSrc;
  popupImage.alt=captionText;
  popupCaption.textContent=captionText;
  openPopup(popupOpenImage);
}

///ВЫзов функций ---



popupEditButton.addEventListener('click',() =>  {openPopup(editPopup)});
popupAddButton.addEventListener('click',() => openPopup(addPopup));
popupCloseButtonEdit.addEventListener('click',() => closePopup(editPopup));
popupCloseButtonAdd.addEventListener('click',() => closePopup(addPopup));
popupCloseButtonImage.addEventListener('click',() => closePopup(popupOpenImage));
submitEditCardButton.addEventListener('click',() => closePopup(editPopup));
submitNewCardButton.addEventListener('click',() => closePopup(addPopup));
document.addEventListener('click',closePopupOverlay);



////----------------
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
 }

 const toggleButtonState = (inputList,buttonElement,validateConfig) =>{
  if (hasInvalidInput(inputList)){
   buttonElement.disabled=true;
  buttonElement.classList.add(validateConfig.inactiveButtonClass);
  } else {
   buttonElement.disabled=false;
  buttonElement.classList.remove(validateConfig.inactiveButtonClass);
  }
 }


 export const clearValidation = (formElement, validateConfig) => { 
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
 export const validateConfig = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});

const enableValidation = (validateConfig) => {
  const formList = Array.from(document.querySelectorAll(validateConfig.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
      setEventListeners(formElement,validateConfig);
  });
};

// Вызовем функцию
enableValidation(validateConfig); 
