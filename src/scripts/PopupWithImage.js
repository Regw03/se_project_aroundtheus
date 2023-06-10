import Popup from "./scripts/Popup.js";

export default class PopupWithImage extends Popup{
    constructor(popupSelector){
        super(popupSelector);

        this._title = this._popupElement.querySelector(".popup__image-title");
        this._image = this._popupElement.querySelector(".popup__image")
    }

    open({link, name}) {
        
    }
}