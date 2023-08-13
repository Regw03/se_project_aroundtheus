import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
    constructor (popup) {
        super(popup);
        this._popupForm = this.popup.querySelector(".popup__form");
    };

    setSubmitAction( handleFormSubmit) {
      this.handleFormSubmit = handleFormSubmit;
    }


    setEventListeners() {
    this._popupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleFormSubmit();
    });
    super.setEventListeners();
  };
}