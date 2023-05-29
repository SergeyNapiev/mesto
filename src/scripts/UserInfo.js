class UserInfo {
    constructor({name, about}) {
        this._name = document.querySelector(name);
        this._about = document.querySelector(about);
    }

    getUserInfo() {
        return {
          name: this._name.textContent,
          about: this._about.textContent
        };
    }

    setUserInfo({ name, about }) {
        this._name.textContent = name;
        this._about.textContent = about;
    }

}

export default UserInfo;

// // Класс UserInfo - представляет информацию о пользователе
// class UserInfo {
//     constructor({ nameSelector, avatarSelector }) {
//       this._nameElement = document.querySelector(nameSelector);
//       this._avatarElement = document.querySelector(avatarSelector);
//     }
  
//     getUserInfo() {
//       return {
//         name: this._nameElement.textContent,
//         avatar: this._avatarElement.src,
//       };
//     }
  
//     setUserInfo({ name, avatar }) {
//       this._nameElement.textContent = name;
//       this._avatarElement.src = avatar;
//     }
  
//     getUserId() {
//       // Реализуйте метод, который возвращает идентификатор пользователя
//       // Может быть необходимо использовать токен авторизации или другой способ идентификации пользователя
//     }
//   }