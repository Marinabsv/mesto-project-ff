import {openPopup,closePopup,closePopupOverlay} from './modal'
import "./pages/index.css";
import {createCard,like,deleteCard} from "./card";
import  {enableValidation,clearValidation} from "./validation"
import {getData,updateProfile,updateCards,getNewAvatar} from "./api"

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
const formElement = editPopup.querySelector('.popup__form');
const formElementCard=addPopup.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_description');
const profileTitle=document.querySelector('.profile__title');
const profileDescription=document.querySelector('.profile__description');
const editProfileForm=document.forms["edit-profile"];
const addAvatarPopup=document.querySelector(".popup_avatar");
const addAvatarButton=document.querySelector(".profile__image-button");
const avatarCloseButton=addAvatarPopup.querySelector('.popup__close');
const editAvatarForm=addAvatarPopup.querySelector('.popup__form');
const submitAvatarButton=addAvatarPopup.querySelector('.popup__button');
const avatarNewLink=editAvatarForm.querySelector('.popup__input_avatar_url');
let userId=null;

///Создание карточки----------------------------

getData().then((res) => {
  const [userData, cardsData] = res;

  const userName = userData.name;
  const userAbout = userData.about;
  const userAvatar = userData.avatar;
  userId = userData._id;

  const profileImage = document.querySelector(".profile__image");
  profileImage.style.backgroundImage = `url(${userAvatar})`;
  profileTitle.textContent = userName;
  profileDescription.textContent = userAbout;

  cardsData.forEach((card) =>{
  const newCardElement= createCard(userId,card, deleteCard,like,openImage);
  listCards.append(newCardElement);
  });
})
.catch((err) => {
  console.error(err);
});

const validateConfig = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});

enableValidation(validateConfig); 

/// функция переключения текста кнопки сохраниения

const toggleSaveButton = (button, loading)=>{
  if (loading) {
    button.textContent = "Сохранение...";
    button.disabled = true;
  } else {
    button.textContent = "Сохранить";
    button.disabled = false;
  }
}


///ВЫзов функций ---


popupEditButton.addEventListener('click',() =>  {
  clearValidation(editProfileForm, validateConfig);
  openPopup(editPopup);
  nameInput.value=profileTitle.textContent;
  jobInput.value=profileDescription.textContent;
});

popupAddButton.addEventListener('click',() =>{ 
clearValidation(formPlace, validateConfig);
openPopup(addPopup)
});

addAvatarButton.addEventListener('click',() =>{ 
  clearValidation(editAvatarForm, validateConfig);
  openPopup(addAvatarPopup);
  });

popupCloseButtonEdit.addEventListener('click',() => closePopup(editPopup));
popupCloseButtonAdd.addEventListener('click',() => closePopup(addPopup));
popupCloseButtonImage.addEventListener('click',() => closePopup(popupOpenImage));
avatarCloseButton.addEventListener('click',() => closePopup(addAvatarPopup));
submitEditCardButton.addEventListener('click',() => closePopup(editPopup));
submitNewCardButton.addEventListener('click',() => closePopup(addPopup));
submitAvatarButton.addEventListener('click',() => closePopup(addAvatarPopup));
document.addEventListener('click',closePopupOverlay);


///Добавление карточки-

function addAllCards(evt) {
  evt.preventDefault(); 
  toggleSaveButton(submitNewCardButton,true);

  updateCards(newCardName.value, newCardLink.value)
  .then((data) => {
    const createNewCards = createCard(userId,data, deleteCard,like,openImage);
    listCards.prepend(createNewCards);
    formElementCard.reset();
    closePopup(addPopup);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    toggleSaveButton(submitNewCardButton,false);
  });
}

formElementCard.addEventListener('submit',addAllCards);


///Редактирование информации-------


nameInput.value=profileTitle.textContent;
jobInput.value=profileDescription.textContent;

function handleFormSubmit(evt) {
  evt.preventDefault(); 
 
  toggleSaveButton(submitEditCardButton,true);

  profileTitle.textContent=nameInput.value;
  profileDescription.textContent=jobInput.value;
  
  updateProfile(nameInput.value,jobInput.value).then((data)=>{
    const userName = data.name;
    const userAbout = data.about;
    const userAvatar = data.avatar;

    const profileImage = document.querySelector(".profile__image");
    profileImage.style.backgroundImage = `url(${userAvatar})`;
    profileTitle.textContent = userName;
    profileDescription.textContent = userAbout;
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    toggleSaveButton(submitEditCardButton,false);
  });
  closePopup(editPopup);}
  
formElement.addEventListener('submit', handleFormSubmit);



///Открытие картинки-

function openImage(imgSrc,captionText){
popupImage.src=imgSrc;
popupImage.alt=captionText;
popupCaption.textContent=captionText;
openPopup(popupOpenImage);
}

////Обновление аватара

function updateAvatar (evt) {
  evt.preventDefault();
  toggleSaveButton(submitAvatarButton,true);

  getNewAvatar(avatarNewLink.value).then((data)=>{
    const avatarImage= data.avatar;
    const profileImage = document.querySelector('.profile__image');
    profileImage.style.backgroundImage = `url(${avatarImage})`;
    closePopup(addAvatarPopup);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    toggleSaveButton(submitAvatarButton,false);
  });
  editAvatarForm.reset();
}
editAvatarForm.addEventListener('submit',updateAvatar);







