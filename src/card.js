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

  export {createCard,like,deleteCard};