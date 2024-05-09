(()=>{"use strict";function e(e){e.classList.add("popup_is-opened","popup_is-animated"),document.addEventListener("keydown",n)}function t(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",n)}function n(e){"Escape"===e.key&&t(document.querySelector(".popup_is-opened"))}var o=function(e){return fetch("https://mesto.nomoreparties.co/v1/wff-cohort-13/cards/likes/".concat(e),{method:"PUT",headers:{authorization:"abe3864d-da1e-403c-a876-5f3b8340f015","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка:".concat(e.status))}))},r=function(e){return fetch("https://mesto.nomoreparties.co/v1/wff-cohort-13/cards/likes/".concat(e),{method:"DELETE",headers:{authorization:"abe3864d-da1e-403c-a876-5f3b8340f015","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка:".concat(e.status))}))},c=document.querySelector("#card-template").content,a={};function i(e,t,n,o,r){var i=c.querySelector(".places__item").cloneNode(!0),u=i.querySelector(".card__delete-button"),s=i.querySelector(".card__image"),l=i.querySelector(".card__title"),p=i.querySelector(".card__like-button"),d=i.querySelector(".counter__likes");i.dataset.id=t._id,s.src=t.link,s.alt=t.name,l.textContent=t.name;var f=t._id,m=t.likes.some((function(t){return t._id===e}));return m&&(p.classList.add("card__like-button_is-active"),a[f]=!0),d.textContent=t.likes.length,p.addEventListener("click",(function(){o(f,p,d)})),e!==t.owner._id?u.style.visibility="hidden":u.addEventListener("click",(function(){n(f,i)})),s.addEventListener("click",(function(){r(t.link,t.name)})),i}function u(e,t,n){(a[e]?r:o)(e).then((function(o){t.classList.toggle("card__like-button_is-active"),n.textContent=o.likes.length,a[e]=!a[e]})).catch((function(e){return console.log(e)}))}function s(e,t){(function(e){return fetch("https://mesto.nomoreparties.co/v1/wff-cohort-13/cards/".concat(e),{method:"DELETE",headers:{authorization:"abe3864d-da1e-403c-a876-5f3b8340f015","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка:".concat(e.status))}))})(e).then((function(){t.remove()})).catch((function(e){console.log(e)}))}var l=function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),o.classList.remove(n.errorClass),o.textContent=""},p=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))},d=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);n.forEach((function(n){n.value="",l(e,n,t)})),p(n,o,t)};function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var m=document.querySelector(".places__list"),_=document.querySelector(".profile__edit-button"),y=document.querySelector(".profile__add-button"),v=document.querySelector(".popup_type_edit"),h=document.querySelector(".popup_type_new-card"),b=document.querySelector(".popup_type_image"),S=b.querySelector(".popup__image"),q=b.querySelector(".popup__caption"),k=document.querySelector(".popup__input_type_card-name"),C=document.querySelector(".popup__input_type_url"),E=document.forms["new-place"],L=h.querySelector(".popup__button"),g=v.querySelector(".popup__button"),j=v.querySelector(".popup__close"),x=h.querySelector(".popup__close"),w=b.querySelector(".popup__close"),A=v.querySelector(".popup__form"),T=h.querySelector(".popup__form"),P=A.querySelector(".popup__input_type_name"),z=A.querySelector(".popup__input_type_description"),O=document.querySelector(".profile__title"),B=document.querySelector(".profile__description"),D=document.forms["edit-profile"],I=document.querySelector(".popup_avatar"),M=document.querySelector(".profile__image-button"),N=I.querySelector(".popup__close"),J=I.querySelector(".popup__form"),H=I.querySelector(".popup__button"),U=J.querySelector(".popup__input_avatar_url"),V=null;Promise.all([fetch("https://mesto.nomoreparties.co/v1/wff-cohort-13/users/me",{headers:{authorization:"abe3864d-da1e-403c-a876-5f3b8340f015"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка:".concat(e.status))})),fetch("https://mesto.nomoreparties.co/v1/wff-cohort-13/cards/",{headers:{authorization:"abe3864d-da1e-403c-a876-5f3b8340f015","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка:".concat(e.status))}))]).then((function(e){var t,n,o=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c,a,i=[],u=!0,s=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(o=c.call(n)).done)&&(i.push(o.value),i.length!==t);u=!0);}catch(e){s=!0,r=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw r}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[0],c=o[1],a=r.name,l=r.about,p=r.avatar;V=r._id,document.querySelector(".profile__image").style.backgroundImage="url(".concat(p,")"),O.textContent=a,B.textContent=l,c.forEach((function(e){var t=i(V,e,s,u,G);m.append(t)}))})).catch((function(e){console.error(e)}));var $={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};!function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);p(n,o,t),n.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?l(e,t,n):function(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o.inputErrorClass),r.textContent=n,r.classList.add(o.errorClass)}(e,t,t.validationMessage,n)}(e,r,t),p(n,o,t)}))}))}(t,e)}))}($);var F=function(e,t){t?(e.textContent="Сохранение...",e.disabled=!0):(e.textContent="Сохранить",e.disabled=!1)};function G(t,n){S.src=t,S.alt=n,q.textContent=n,e(b)}_.addEventListener("click",(function(){d(D,$),e(v),P.value=O.textContent,z.value=B.textContent})),y.addEventListener("click",(function(){d(E,$),e(h)})),M.addEventListener("click",(function(){d(J,$),e(I)})),j.addEventListener("click",(function(){return t(v)})),x.addEventListener("click",(function(){return t(h)})),w.addEventListener("click",(function(){return t(b)})),N.addEventListener("click",(function(){return t(I)})),g.addEventListener("click",(function(){return t(v)})),L.addEventListener("click",(function(){return t(h)})),H.addEventListener("click",(function(){return t(I)})),document.addEventListener("click",(function(e){e.target.classList.contains("popup")&&t(e.target)})),T.addEventListener("submit",(function(e){var n,o;e.preventDefault(),F(L,!0),(n=k.value,o=C.value,fetch("https://mesto.nomoreparties.co/v1/wff-cohort-13/cards/",{method:"POST",headers:{authorization:"abe3864d-da1e-403c-a876-5f3b8340f015","Content-Type":"application/json"},body:JSON.stringify({name:n,link:o})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка:".concat(e.status))}))).then((function(e){var n=i(V,e,s,u,G);m.prepend(n),T.reset(),t(h)})).catch((function(e){console.error(e)})).finally((function(){F(L,!1)}))})),P.value=O.textContent,z.value=B.textContent,A.addEventListener("submit",(function(e){var n,o;e.preventDefault(),F(g,!0),O.textContent=P.value,B.textContent=z.value,(n=P.value,o=z.value,fetch("https://mesto.nomoreparties.co/v1/wff-cohort-13/users/me",{method:"PATCH",headers:{authorization:"abe3864d-da1e-403c-a876-5f3b8340f015","Content-Type":"application/json"},body:JSON.stringify({name:n,about:o})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка:".concat(e.status))}))).then((function(e){var t=e.name,n=e.about,o=e.avatar;document.querySelector(".profile__image").style.backgroundImage="url(".concat(o,")"),O.textContent=t,B.textContent=n})).catch((function(e){console.error(e)})).finally((function(){F(g,!1)})),t(v)})),J.addEventListener("submit",(function(e){var n;e.preventDefault(),F(H,!0),(n=U.value,fetch("https://mesto.nomoreparties.co/v1/wff-cohort-13/users/me/avatar",{method:"PATCH",headers:{authorization:"abe3864d-da1e-403c-a876-5f3b8340f015","Content-Type":"application/json"},body:JSON.stringify({avatar:n})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка:".concat(e.status))}))).then((function(e){var n=e.avatar;document.querySelector(".profile__image").style.backgroundImage="url(".concat(n,")"),t(I)})).catch((function(e){console.error(e)})).finally((function(){F(H,!1)})),J.reset()}))})();