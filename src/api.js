///////запрос к серверу

////Загрузка инфы о профиле
const getProfile = () => {
    return fetch('https://mesto.nomoreparties.co/v1/wff-cohort-13/users/me',{
       headers: {
         authorization: 'abe3864d-da1e-403c-a876-5f3b8340f015'
       }
     })
     .then(res => {
       if (res.ok) {
         return res.json();
       }
       return Promise.reject(`Ошибка:${res.status}`);
     })};
  


/////Загрузка карточек с сервера
const getCards = () => {
 return fetch('https://mesto.nomoreparties.co/v1/wff-cohort-13/cards/',{
   headers: {
     authorization: 'abe3864d-da1e-403c-a876-5f3b8340f015',
     "Content-Type": "application/json",
   }
 })
 .then(res => {
   if (res.ok) {
     return res.json();
   }
   return Promise.reject(`Ошибка:${res.status}`);
 })};

 export const getData = () => {
   return Promise.all([getProfile(),getCards()]);
 }

////Редактирование профиля 
export const updateProfile = (name, about) =>{
    return fetch('https://mesto.nomoreparties.co/v1/wff-cohort-13/users/me',{
      method: "PATCH",
      headers: {
        authorization: 'abe3864d-da1e-403c-a876-5f3b8340f015',
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        about: about,
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка:${res.status}`);
    })};
  
  
  ///////Добавление карточки
  export const updateCards = (name,link) => {
    return fetch('https://mesto.nomoreparties.co/v1/wff-cohort-13/cards/',{
      method: "POST",
      headers:{
        authorization:'abe3864d-da1e-403c-a876-5f3b8340f015',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка:${res.status}`);
    })};



/////Запрос на удаление карточек

export const getDeleteCards = (cardId) => {
 return fetch(`https://mesto.nomoreparties.co/v1/wff-cohort-13/cards/${cardId}`,{
   method: 'DELETE',
   headers: {
     authorization: 'abe3864d-da1e-403c-a876-5f3b8340f015',
     "Content-Type": "application/json",
   }
 })
 .then(res=>{
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка:${res.status}`);
})
};


//////Постановка и снятие лайка

export const getAddLike = (cardId) => {
 return fetch(`https://mesto.nomoreparties.co/v1/wff-cohort-13/cards/likes/${cardId}`,{
   method: 'PUT',
   headers: {
     authorization: 'abe3864d-da1e-403c-a876-5f3b8340f015',
     "Content-Type": "application/json",
   }
 })
 .then(res=>{
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка:${res.status}`);
})
};


export const getDeleteLike =(cardId) => {
 return fetch(`https://mesto.nomoreparties.co/v1/wff-cohort-13/cards/likes/${cardId}`,{
   method: 'DELETE',
   headers: {
     authorization: 'abe3864d-da1e-403c-a876-5f3b8340f015',
     "Content-Type": "application/json",
   }
 })
 .then(res => {
   if (res.ok) {
     return res.json();
   }
   return Promise.reject(`Ошибка:${res.status}`);
 })};

//////Обновление аватара пользователя

export const getNewAvatar = (avatar) => {
 return fetch(`https://mesto.nomoreparties.co/v1/wff-cohort-13/users/me/avatar`,{
   method: 'PATCH',
   headers: {
     authorization: 'abe3864d-da1e-403c-a876-5f3b8340f015',
     "Content-Type": "application/json",
   },
   body:JSON.stringify({
    avatar: avatar,
  }),
 })
 .then(res => {
   if (res.ok) {
     return res.json();
   }
   return Promise.reject(`Ошибка:${res.status}`);
 })};