//Попап карточки

/////MODAL ////////////////
const popupAll = document.querySelectorAll(".popup");

function openPopup(element,popup) {
    element.addEventListener("click", (evt)=> {
    evt.preventDefault();
    popup.classList.add('popup_is-opened','popup_is-animated');
  });
  }
  
  
  function closePopup(element,popup) {
    element.addEventListener('click',()=>{
      popup.classList.remove("popup_is-opened");
    })
  }
  
  function closePopupOverlay(popup) {
    document.addEventListener('click',(evt)=>{
      if (Array.from(popupAll).includes(evt.target)){
       popup.classList.remove("popup_is-opened");
      }
    })
  }
  
  function closePopupEsc(popup) {
    document.addEventListener('keydown',(evt)=>{
    if (evt.key === "Escape") {
      popup.classList.remove("popup_is-opened");
    }
    })
  }


  ///ОТКРЫТИЕ КАРТИНКИ

 
  export {openPopup,closePopup,closePopupOverlay,closePopupEsc};