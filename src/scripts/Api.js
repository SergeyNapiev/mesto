class Api {
    constructor(server, headers) {
      this._server = server;
      this._headers = headers;
    }

    // карточки
    getInitialCards() {
        return fetch(`${this._server}/cards`, {
            method: 'GET',
            headers: {
                authorization: this._headers
          }
        })
          .then(res => {
            if (res.ok) {
              return res.json();
            }
      
            // если ошибка, отклоняем промис
            return Promise.reject(`Ошибка: ${res.status}`);
          });
    } 
        // новая карточка

        addNewCard(item) {
            return fetch(`${this._server}/cards`, {
                method: 'POST',
                headers: {
                  authorization: this._headers,
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: item.name,
                    link: item.link
                  })
              })
              .then(res => {
                if (res.ok) {
                  return res.json();
                }
          
                // если ошибка, отклоняем промис
                return Promise.reject(`Ошибка: ${res.status}`);
              });
        }
    // удалить карточку
    removeCardFromServer(id) {
      return fetch(`${this._server}/cards/${id}`, {
        method: 'DELETE',
        headers: {
            authorization: this._headers,
            'Content-Type': 'application/json'
        },
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

      // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      });
    };

    // // поставить лайк
    // likeCard() {

    // }
    // // удалить лайк
    // deleteLike() {

    // }
    // профиль получаем данные
    getUserInfo() {
        return fetch(`${this._server}/users/me`, {
            method: 'GET',
            headers: {
              authorization: this._headers,
            }
          })
          .then(res => {
            if (res.ok) {
              return res.json();
            }
      
            // если ошибка, отклоняем промис
            return Promise.reject(`Ошибка: ${res.status}`);
          });
    }
    // профиль изменить данные
    editUserInfo(item) {
        return fetch(`${this._server}/users/me`, {
            method: 'PATCH',
            headers: {
              authorization: this._headers,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: item.name,
                about: item.about
              })
          })
          .then(res => {
            if (res.ok) {
              return res.json();
            }
      
            // если ошибка, отклоняем промис
            return Promise.reject(`Ошибка: ${res.status}`);
          });
    }

    // установить аватар
    setNewAvatar(item) {
        return fetch(`${this._server}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
              authorization: this._headers,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: item.link
              })
          })
          .then(res => {
            if (res.ok) {
              return res.json();
            }
      
            // если ошибка, отклоняем промис
            return Promise.reject(`Ошибка: ${res.status}`);
          });
    }
  }
  


  export default Api;

//   // Класс Api - представляет интерфейс для взаимодействия с сервером
// class Api {
//   constructor(options) {
//     this._baseUrl = options.baseUrl;
//     this._headers = options.headers;
//   }

//   _checkResponse(res) {
//     if (res.ok) {
//       return res.json();
//     }

//     return Promise.reject(`Ошибка: ${res.status}`);
//   }

//   getUserInfo() {
//     return fetch(`${this._baseUrl}/users/me`, {
//       headers: this._headers,
//     })
//       .then(this._checkResponse);
//   }

//   setUserInfo({ name, about }) {
//     return fetch(`${this._baseUrl}/users/me`, {
//       method: 'PATCH',
//       headers: this._headers,
//       body: JSON.stringify({
//         name: name,
//         about: about,
//       }),
//     })
//       .then(this._checkResponse);
//   }

//   setUserAvatar({ avatar }) {
//     return fetch(`${this._baseUrl}/users/me/avatar`, {
//       method: 'PATCH',
//       headers: this._headers,
//       body: JSON.stringify({
//         avatar: avatar,
//       }),
//     })
//       .then(this._checkResponse);
//   }

//   getInitialCards() {
//     return fetch(`${this._baseUrl}/cards`, {
//       headers: this._headers,
//     })
//       .then(this._checkResponse);
//   }

//   addCard({ name, link }) {
//     return fetch(`${this._baseUrl}/cards`, {
//       method: 'POST',
//       headers: this._headers,
//       body: JSON.stringify({
//         name: name,
//         link: link,
//       }),
//     })
//       .then(this._checkResponse);
//   }

//   removeCard(cardId) {
//     return fetch(`${this._baseUrl}/cards/${cardId}`, {
//       method: 'DELETE',
//       headers: this._headers,
//     })
//       .then(this._checkResponse);
//   }

//   likeCard(cardId) {
//     return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
//       method: 'PUT',
//       headers: this._headers,
//     })
//       .then(this._checkResponse);
//   }

//   dislikeCard(cardId) {
//     return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
//       method: 'DELETE',
//       headers: this._headers,
//     })
//       .then(this._checkResponse);
//   }
// }