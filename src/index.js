import {openPopup,closePopup,closePopupOverlay,closePopupEsc} from './modal'
import "./pages/index.css";
import {initialCards,createCard,like,deleteCard} from "./scripts/cards";

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
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_description');
const profileTitle=document.querySelector('.profile__title');
const profileDescription=document.querySelector('.profile__description');


// @todo: Вывести карточки на страницу РАБОЧАЯ ↓

initialCards.forEach((data) => {
  listCards.append(createCard(data, deleteCard,like,openImage));
});

///Добавление карточки-----------------------

formPlace.addEventListener('submit',function (evt){
  evt.preventDefault(); 
  const newCardObj= {
    name:newCardName.value,
    link:newCardLink.value
  }
  listCards.prepend(createCard(newCardObj,deleteCard,like,openImage));
  formPlace.reset();
  closePopup(submitNewCardButton,addPopup);
});

///Редактирование информации-----------------------

function handleFormSubmit(evt) {
    evt.preventDefault(); 
     profileTitle.textContent=nameInput.value;
    profileDescription.textContent=jobInput.value;
    closePopup(submitEditCardButton,editPopup);
}

formElement.addEventListener('submit', handleFormSubmit);

///Открытие картинки----------

function openImage(imgSrc,captionText){
  popupImage.src=imgSrc;
  popupImage.alt=captionText;
  popupCaption.textContent=captionText;
  popupOpenImage.classList.add('popup_is-opened','popup_is-animated');
}

///ВЫзов функций -------------------------

openPopup(popupEditButton,editPopup);
openPopup(popupAddButton,addPopup);
closePopup(popupCloseButtonEdit,editPopup);
closePopup(popupCloseButtonAdd,addPopup);
closePopupOverlay(editPopup);
closePopupOverlay(addPopup);
closePopupEsc(editPopup);
closePopupEsc(addPopup);
closePopupEsc(popupOpenImage);
closePopup(popupCloseButtonImage,popupOpenImage);
closePopupOverlay(popupOpenImage);



  

  

