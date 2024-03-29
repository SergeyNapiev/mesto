class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(evt) {
        if (evt.code === "Escape") { 
            this.close();
          }
    }

    setEventListeners(){
        const closeButton = this._popupSelector.querySelector('.popup__close');
        closeButton.addEventListener('click', () => this.close());
        this._popupSelector.addEventListener('click', (evt) => {
            if (evt.target === evt.currentTarget) {
                this.close();
            }
        });
    }


}

export default Popup;