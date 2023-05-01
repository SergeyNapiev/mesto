// class Api {
//     constructor(server) {
//       this._server = server;
//       this._headers = headers;
//     }
  
//     getInitialCards() {
//         return fetch(this._server, {
//           headers: {
//             authorization: this._headers
//           }
//         })
//           .then(res => {
//             if (res.ok) {
//               return res.json();
//             }
      
//             // если ошибка, отклоняем промис
//             return Promise.reject(`Ошибка: ${res.status}`);
//           });
//       } 
  
//     // другие методы работы с API
//   }
  


//   export default Api;