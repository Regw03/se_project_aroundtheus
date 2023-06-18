export default class Popup{
    constructor(popup){
        debugger;
        this.popup = document.querySelector(popup);
        this.closeButton = this.popup.querySelector(".popup__close-button");
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open(){

        this.popup.classList.add("popup_is-open");
        document.addEventListener('keydown', this._handleEscClose.bind(this));
        this.popup.addEventListener('click', this._handleOverlayClick.bind(this));

    };

    close(){

       this.popup.classList.remove("popup_is-open");
       this.popup.removeEventListener('keydown', this._handleEscClose);

    };

    _handleOverlayClick(event){

      if (event.target.classList.contains("popup_is-open")) {
      this.close();

    };

    }

    _handleEscClose(event){
        if (event.key === "Escape"){
            this.close();
        }
    };

    setEventListeners(){
         this.closeButton.addEventListener("click", () => this.closePopup());
         this.popup.addEventListener("click", this._handleOverlayClose);
    }

}