// @todo: Темплейт карточки

const contentCards = document.querySelector(".content");
const listCards = document.querySelector(".places__list");
const cardTemplate = document.querySelector("#card-template").content;

// @todo: Функция создания карточки
function addCards(data, deleteCard) {
  const cardsElement = cardTemplate.querySelector(".places__item").cloneNode(true);
  const deleteButton = cardsElement.querySelector(".card__delete-button");
  cardsElement.querySelector(".card__image").src = data.link;
  cardsElement.querySelector(".card__image").alt = data.name;
  cardsElement.querySelector(".card__title").textContent = data.name;

  deleteButton.addEventListener("click", () => {
    deleteCard(deleteButton);
  });

  return cardsElement;
}

// @todo: Функция удаления карточки
function deleteCard(deleteButton) {
  const deleting = deleteButton.closest(".places__item");
  deleting.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach((data) => {
  const card = addCards(data, deleteCard);
  listCards.append(card);
});
