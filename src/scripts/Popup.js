export default class Popup{
    constructor(popup){

        this.popup = document.querySelector(popup);
        this.closeButton = document.querySelector("popup__close-button");
        this._handleEscClose = this._handleEscClase.bind(this);
    }

    open(){

        this.popup.classList.add("popup_is-open");
        this.popup.addEventListener('keydown', this.handleEscClose);

    };

    close(){

       this.popup.classList.remove("popup_is-open");
       this.popup.removeEventListener('keydown', this.handleEscClose);

    };

    _handleEscClase(){

    };

    setEventListeners(){
         
    }

}