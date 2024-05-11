//Попап карточки
/////MODAL ////////////////
function openPopup(element) {
  element.classList.add("popup_is-opened", "popup_is-animated");
  document.addEventListener("keydown", closePopupEsc);
  document.addEventListener("click", closePopupOverlay);
}

function closePopup(element) {
  element.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closePopupEsc);
  document.removeEventListener("click", closePopupOverlay);
}

function closePopupOverlay(evt) {
  if (evt.target.classList.contains("popup")) {
    closePopup(evt.target);
  }
}

function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_is-opened"));
  }
}

export { openPopup, closePopup, closePopupOverlay };
