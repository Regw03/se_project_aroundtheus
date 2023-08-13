import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popup, handleFormSubmit) {
    super(popup);
    this.handleFormSubmit = handleFormSubmit;
    this._popupForm = this.popup.querySelector(".popup__form");
    this._inputList = this._popupForm.querySelectorAll(".popup__input");
  };

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );

    return this._formValues;
  };

  close() {
    this._popupForm.reset();
    super.close();
  };

  setEventListeners() {
    this._popupForm.addEventListener("submit", () => {
      this.handleFormSubmit(this._getInputValues());
    });
    super.setEventListeners();
  };
};
