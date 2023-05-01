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
                  authorization: this._headers
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
    // // удалить карточку
    // deleteCard() {

    // }
    // // поставить лайк
    // likeCard() {

    // }
    // // удалить лайк
    // deleteLike() {

    // }
    // // профиль получаем данные
    // getUserInfo() {

    // }
    // // профиль изменить данные
    // setUserInfo() {

    // }
    // // установить аватар
    // setNewAvatar() {

    // }
  }
  


  export default Api;