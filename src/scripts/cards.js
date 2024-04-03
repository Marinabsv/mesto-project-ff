 const initialCards = [
    {
      name: "Grogu",
      link: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Batman",
      link: "https://images.unsplash.com/photo-1610568781018-995405522539?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "John Wick",
      link: "https://images.unsplash.com/photo-1560354508-468e7201bbc2?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Star Wars",
      link: "https://images.unsplash.com/photo-1472457897821-70d3819a0e24?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Harry Potter",
      link: "https://images.unsplash.com/photo-1629944970361-d9fc34988644?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Thor",
      link: "https://images.unsplash.com/photo-1626209731723-4bf514fcdcd1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
];

// @todo: Функция создания карточки
function createCard(data, deleteCard,like,openImage) {
  const cardTemplate = document.querySelector("#card-template").content; 
  const cardElement = cardTemplate.querySelector(".places__item").cloneNode(true);
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const cardImage=cardElement.querySelector(".card__image");
  const cardTitle=cardElement.querySelector(".card__title");
  const likeButton=cardElement.querySelector(".card__like-button");

  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;

  deleteButton.addEventListener("click", () => {
    deleteCard(cardElement);
  });

  likeButton.addEventListener('click',like);

  cardImage.addEventListener('click',()=>{
    openImage(data.link,data.name);
  })
  return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(cardElement) {
  cardElement.remove();
}
///Лайк--------------
function like (evt){
  evt.target.classList.toggle('card__like-button_is-active');
}

export {initialCards,createCard,like,deleteCard};