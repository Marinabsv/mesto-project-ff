// @todo: Функция создания карточки
import { getDeleteCards, getAddLike, getDeleteLike } from "./api";
const cardTemplate = document.querySelector("#card-template").content;
const likeStates = {};

function createCard(userId, data, deleteCard, like, openImage) {
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const likeCounter = cardElement.querySelector(".counter__likes");

  cardElement.dataset.id = data._id;
  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;
  const cardId = data._id;

  const isLiked = data.likes.some((like) => like._id === userId);

  if (isLiked) {
    likeButton.classList.add("card__like-button_is-active");
    likeStates[cardId] = true;
  }
  likeCounter.textContent = data.likes.length;

  likeButton.addEventListener("click", () => {
    like(cardId, likeButton, likeCounter);
  });

  if (userId !== data.owner._id) {
    deleteButton.style.visibility = "hidden";
  } else {
    deleteButton.addEventListener("click", function () {
      deleteCard(cardId, cardElement);
    });
  }

  cardImage.addEventListener("click", () => {
    openImage(data.link, data.name);
  });
  return cardElement;
}
///Лайк--------------

function like(cardId, likeButton, likeCounter) {
  const likeMethod = likeStates[cardId] ? getDeleteLike : getAddLike;
  likeMethod(cardId)
    .then((data) => {
      likeButton.classList.toggle("card__like-button_is-active");
      likeCounter.textContent = data.likes.length;
      likeStates[cardId] = !likeStates[cardId];
    })
    .catch((err) => console.log(err));
}

// @todo: Функция удаления карточки
function deleteCard(cardId, cardElement) {
  getDeleteCards(cardId, cardElement)
    .then(() => {
      cardElement.remove();
    })
    .catch((error) => {
      console.log(error);
    });
}

export { createCard, like, deleteCard };
