import {openPopup,closePopup,closePopupOverlay} from './modal'
import "./pages/index.css";
import {initialCards} from "./scripts/cards";
import {createCard,like,deleteCard} from "./card";

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



popupEditButton.addEventListener('click',() => openPopup(editPopup));
popupAddButton.addEventListener('click',() => openPopup(addPopup));
popupCloseButtonEdit.addEventListener('click',() => closePopup(editPopup));
popupCloseButtonAdd.addEventListener('click',() => closePopup(addPopup));
popupCloseButtonImage.addEventListener('click',() => closePopup(popupOpenImage));
submitEditCardButton.addEventListener('click',() => closePopup(editPopup));
submitNewCardButton.addEventListener('click',() => closePopup(addPopup));
document.addEventListener('click',closePopupOverlay);