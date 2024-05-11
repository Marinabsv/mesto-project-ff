///////запрос к серверу
function resStatus(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка:${res.status}`);
}

const config = {
  url: "https://mesto.nomoreparties.co/v1/wff-cohort-13",
  headers: {
    authorization: "abe3864d-da1e-403c-a876-5f3b8340f015",
    "Content-Type": "application/json",
  },
};

////Загрузка инфы о профиле
const getProfile = () => {
  return fetch(`${config.url}/users/me`, {
    headers: config.headers,
  }).then(resStatus);
};

/////Загрузка карточек с сервера
const getCards = () => {
  return fetch(`${config.url}/cards/`, {
    headers: config.headers,
  }).then(resStatus);
};

export const getData = () => {
  return Promise.all([getProfile(), getCards()]);
};

////Редактирование профиля
export const updateProfile = (name, about) => {
  return fetch(`${config.url}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about,
    }),
  }).then(resStatus);
};

///////Добавление карточки
export const updateCards = (name, link) => {
  return fetch(`${config.url}/cards/`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  }).then(resStatus);
};

/////Запрос на удаление карточек

export const getDeleteCards = (cardId) => {
  return fetch(`${config.url}/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(resStatus);
};

//////Постановка и снятие лайка

export const getAddLike = (cardId) => {
  return fetch(`${config.url}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  }).then(resStatus);
};

export const getDeleteLike = (cardId) => {
  return fetch(`${config.url}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(resStatus);
};

//////Обновление аватара пользователя

export const getNewAvatar = (avatar) => {
  return fetch(`${config.url}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatar,
    }),
  }).then(resStatus);
};
