import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
    constructor(popup, handelFormSubmit){

        super(popup);
        this.handelFormSubmit = handelFormSubmit;
        this._popupForm = this.popup.querySelector(".popup__form");

    }



    _getInputValues(){

        this._inputList = this._popupForm.querySelectorAll(".popup__input");

        this._formValues = {};
        this._inputList.forEach(
            (input) => (this._formValues[input.name] = input.value)
        );

        return this._formValues;

    }

    setEventListeners(){
        
        this._popupForm.addEventListener('submit', ()=>{
            this.handelFormSubmit(this._getInputValues());
        });
        super.setEventListeners();

    }

}