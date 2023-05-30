(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,r(o.key),o)}}function n(t,e,n){return(e=r(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(n)?n:String(n)}var o=function(){function t(e,r,o,i){var u=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n(this,"_handleLikeCard",(function(){u._buttonHeart.classList.toggle("elements__heart_active")})),n(this,"_setEventListeners",(function(){u._buttonDeleteCard=u._card.querySelector(".elements__delete"),u._buttonHeart=u._card.querySelector(".elements__heart"),u._buttonDeleteCard.addEventListener("click",(function(t){u._handleDeleteClick(t)})),u._buttonHeart.addEventListener("click",u._handleLikeCard),u._cardImage.addEventListener("click",(function(){u._handleCardClick(u._name,u._link)}))})),this._name=e.name,this._link=e.link,this._likes=e.likes,this.cardId=e._id,this._ownerId=e.owner._id,this._userId=userId,this._templateSelector=r,this._handleCardClick=o,this._handleDeleteClick=i}var r,o;return r=t,(o=[{key:"_getTemplate",value:function(){return this._templateSelector.content.querySelector(".elements__element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._card=this._getTemplate(),this._card.querySelector(".elements__title").textContent=this._name,this._card.querySelector(".elements__item").alt=this._name,this._card.querySelector(".elements__item").src=this._link,this._counter=this._card.querySelector(".elements__counter"),this._counter.textContent=this._likes.length,this._cardImage=this._card.querySelector(".elements__item"),this._setEventListeners(),this._card}},{key:"_addButtonDelete",value:function(t){t===this._ownerId&&this._buttonDeleteCard.classList.remove("element__delete_none")}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),t}();const i=o;var u={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible",inputSectionsSelector:".popup__section",inputErrorSelector:".popup__error"};function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,s(r.key),r)}}function l(t,e,n){return(e=s(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t){var e=function(t,e){if("object"!==c(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===c(e)?e:String(e)}var f=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,"_enableButton",(function(){r._buttonSubmitElement.removeAttribute("disabled"),r._buttonSubmitElement.classList.remove(r._inactiveButtonClass)})),l(this,"_disableButton",(function(){r._buttonSubmitElement.setAttribute("disabled","true"),r._buttonSubmitElement.classList.add(r._inactiveButtonClass)})),l(this,"enableValidation",(function(){r._setEventListener()})),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._inputErrorSelector=e.inputErrorSelector,this._form=n,this._buttonSubmitElement=this._form.querySelector(this._submitButtonSelector)}var e,n;return e=t,(n=[{key:"_hiddenError",value:function(t){this._errorElement=t.nextElementSibling,this._errorElement.innerText="",t.classList.remove(this._inputErrorClass),this._errorElement.classList.remove(this._errorClass)}},{key:"_showError",value:function(t){this._errorElement=t.nextElementSibling,this._errorElement.innerText=t.validationMessage,t.classList.add(this._inputErrorClass),this._errorElement.classList.add(this._errorClass)}},{key:"_toggleInputState",value:function(t){this._isValid=t.validity.valid,this._errorElement=this._form.querySelector("#".concat(t.id,"-error")),this._isValid?this._hiddenError(t):this._showError(t)}},{key:"_toggleButtonState",value:function(){this._formIsValid=this._inputList.every((function(t){return t.validity.valid})),this._formIsValid?this._enableButton():this._disableButton()}},{key:"_setEventListener",value:function(){var t=this;this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._toggleInputState(e),t._toggleButtonState()})),t._toggleButtonState()}))}},{key:"resetValidation",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){t._hiddenError(e)}))}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();const p=f;function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===y(o)?o:String(o)),r)}var o}const b=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.items=r,this.renderer=o,this._containerSelector=n}var e,n;return e=t,(n=[{key:"renderItems",value:function(){var t=this;this.items.forEach((function(e){t.renderer(e)}))}},{key:"addItem",value:function(t){this._containerSelector.prepend(t)}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===h(o)?o:String(o)),r)}var o}const v=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupSelector=e,this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popupSelector.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupSelector.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.code&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popupSelector.querySelector(".popup__close").addEventListener("click",(function(){return t.close()})),this._popupSelector.addEventListener("click",(function(e){e.target===e.currentTarget&&t.close()}))}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==_(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===_(o)?o:String(o)),r)}var o}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=E(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},g.apply(this,arguments)}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},E(t)}const j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=E(r);if(o){var n=E(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===_(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._link=e._popupSelector.querySelector(".popup__item"),e._name=e._popupSelector.querySelector(".popup__title"),e}return e=u,(n=[{key:"open",value:function(t,e){this._link.src=e,this._name.textContent=t,this._link.alt=t,g(E(u.prototype),"open",this).call(this)}}])&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(v);function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=L(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},P.apply(this,arguments)}function C(t,e){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},C(t,e)}function L(t){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},L(t)}const T=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&C(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=L(r);if(o){var n=L(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===k(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleFormSubmit=e,n._form=n._popupSelector.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll(".popup__input"),n._submitButton=n._form.querySelectorAll(".popup__button"),n._startSubmitButtonText=n._submitButton.textContent,n}return e=u,(n=[{key:"_getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){t[e.name]=e.value})),t}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"setLoadingState",value:function(t){this._submitButton.textContent=t?"Сохранение...":this._initialSubmitButtonText}},{key:"setEventListeners",value:function(){var t=this;P(L(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues()),t.close()}))}},{key:"close",value:function(){P(L(u.prototype),"close",this).call(this),this._form.reset()}}])&&O(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(v);function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===q(o)?o:String(o)),r)}var o}const B=function(){function t(e){var n=e.name,r=e.about;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(n),this._about=document.querySelector(r)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about;this._name.textContent=e,this._about.textContent=n}}])&&I(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==R(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===R(o)?o:String(o)),r)}var o}function V(){return V="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=A(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},V.apply(this,arguments)}function D(t,e){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},D(t,e)}function A(t){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},A(t)}const N=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&D(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=A(r);if(o){var n=A(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===R(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleFormSubmit=e,n._form=n._popupSelector.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll(".popup__input"),n}return e=u,(n=[{key:"open",value:function(t){V(A(u.prototype),"open",this).call(this,t),this._data=t.target.parentNode}},{key:"setEventListeners",value:function(){var t=this;V(A(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._data),t.close()}))}}])&&x(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(v);function U(t){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(t)}function z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==U(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==U(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===U(o)?o:String(o)),r)}var o}const H=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._server=e,this._headers=n}var e,n;return e=t,(n=[{key:"getInitialCards",value:function(){return fetch("".concat(this._server,"/cards"),{method:"GET",headers:{authorization:this._headers}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"addNewCard",value:function(t){return fetch("".concat(this._server,"/cards"),{method:"POST",headers:{authorization:this._headers,"Content-Type":"application/json"},body:JSON.stringify({name:t.name,link:t.link})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"removeCard",value:function(t){return fetch("".concat(this._server,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._headers,"Content-Type":"application/json"}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._server,"/users/me"),{method:"GET",headers:{authorization:this._headers}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"editUserInfo",value:function(t){return fetch("".concat(this._server,"/users/me"),{method:"PATCH",headers:{authorization:this._headers,"Content-Type":"application/json"},body:JSON.stringify({name:t.name,about:t.about})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"setNewAvatar",value:function(t){return fetch("".concat(this._server,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._headers,"Content-Type":"application/json"},body:JSON.stringify({avatar:t.link})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}}])&&z(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();var F=document.querySelector(".elements"),J=document.querySelector("#element"),G=(document.querySelector(".profile__avatar"),document.querySelector("#edit")),M=document.querySelector("#add"),K=document.querySelector("#photo"),Q=document.querySelector("#avatar"),W=document.querySelector("#delete"),X=document.querySelector(".profile__edit-button"),Y=document.querySelector(".profile__add-button"),Z=document.querySelector(".profile__set-avatar"),$=document.querySelector(".profile__name"),tt=document.querySelector(".profile__about"),et=document.querySelector(".profile__avatar"),nt=document.querySelector("#edit-info"),rt=document.querySelector("#add-place"),ot=document.querySelector("#set-avatar"),it=(document.querySelector("#delete-form"),new p(u,nt));it.enableValidation();var ut=new p(u,rt);ut.enableValidation();var ct=new p(u,ot);ct.enableValidation();var at=new H("https://mesto.nomoreparties.co/v1/cohort-64","4ebb947e-2153-478d-938f-3cce41c29118"),lt=new B({name:".profile__name",about:".profile__about   "});at.getUserInfo().then((function(t){$.textContent=t.name,tt.textContent=t.about,et.src=t.avatar}));var st=new T(G,(function(t,e){at.editUserInfo(t,e).then((function(n){n.name=t,n.about=e,lt.setUserInfo(n.name,n.about),st.close()})).catch((function(t){console.log(t)}))}));st.setEventListeners();var ft=new T(Q,(function(t){console.log(t),at.setNewAvatar(t).then((function(e){e.avatar=t.link,et.src=e.avatar})).catch((function(t){console.log(t)}))}));ft.setEventListeners();var pt=new j(K);function yt(t){return new i(t,J,dt,vt).generateCard(t)}pt.setEventListeners();var mt=new b({items:[],renderer:function(t){var e=yt(t);mt.addItem(e)}},F);at.getInitialCards().then((function(t){mt.items=t,mt.renderItems()})).catch((function(t){console.error(t)}));var bt=new T(M,(function(t){at.addNewCard(t).then((function(t){F.prepend(yt(t))})).catch((function(t){console.log(t)}))}));bt.setEventListeners();var ht=new N(W,(function(t){console.log(t),mt.removeItem(t)}));function dt(t,e){pt.open(t,e)}function vt(t){ht.popupConfirmation.open(t)}ht.setEventListeners(),X.addEventListener("click",(function(){var t=lt.getUserInfo();st.setInputValues(t),it.resetValidation(),st.open()})),Y.addEventListener("click",(function(){ut.resetValidation(),bt.open()})),Z.addEventListener("click",(function(){ct.resetValidation(),ft.open()}))})();
//# sourceMappingURL=main.2fc3430e485402b488ce.js.map