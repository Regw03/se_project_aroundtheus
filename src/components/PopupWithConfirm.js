import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
    constructor (popup, handelFormSubmit) {
        super(popup);
        this.handelFormSubmit = handelFormSubmit;
    };


    setEventListeners() {
    // this._popupForm.addEventListener("submit", () => {
    //   this.handelFormSubmit(this._getInputValues());
    // });
    super.setEventListeners();
  };
}