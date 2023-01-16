class FormValidator {
  constructor(settings, formEl) {
    this._settings = settings
    this._form = formEl
    // this._errorClass = settings.errorClass;
    // this._inputErrorClass = settings.inputErrorClass
  }

  _setEventListeners() {
    const inputList = [
      ...this._form.querySelectorAll(this._settings.inputSelector),
    ]
    const submitButton = this._form.querySelector(
      this._settings.submitButtonSelector,
    )
    this._toggleButton(inputList, submitButton, settings)

    inputList.forEach((input) => {
      input.addEventListener('input', (e) => {
        //check validation
        this._checkInputValidity(this._form, input, this._settings)
        //toggle the button
        this._toggleButton(inputList, submitButton, this._settings)
      })
    })
  }

  _showInputError(input) {
    const errorElement = this._form.querySelector('#' + input.id + '-error')

    //add Error message

    errorElement.textContent = input.validationMessage
    errorElement.classList.add(this._settings.errorClass)
    input.classList.add(this._settings.inputErrorClass)
  }

  _hideInputError(input) {
    const errorElement = this._form.querySelector('#' + input.id + '-error')

    //remove Error message

    errorElement.textContent = ''
    errorElement.classList.remove(this._settings.errorClass)
    input.classList.remove(this._settings.inputErrorClass)
  }

  _checkInputValidity(_form, input, _settings) {
    if (input.validity.valid) {
      this._hideInputError(input, this._form, this._settings)
    } else {
      this._showInputError(input, this._form, this._settings)
    }
  }

  _hasValidInputs(inputList) {
    return inputList.every((input) => input.validity.valid === true)
  }

  _toggleButton() {
    const inputList = [
      ...this._form.querySelectorAll(this._settings.inputSelector),
    ]
    this.button = this._form.querySelector(this._settings.submitButtonSelector)
    if (this._hasValidInputs(inputList)) {
      this._enableSubmitButton()
    } else {
      this.disableSubmitButton()
    }
  }

  _enableSubmitButton() {
    this.button.disabled = false
    this.button.classList.remove(this._settings.inactiveButtonClass)
  }

  disableSubmitButton() {
    this.button.disabled = true
    this.button.classList.add(this._settings.inactiveButtonClass)
  }

  enableValidation() {
    this._form.addEventListener('submit', (e) => e.preventDefault())
    this._setEventListeners()
  }
}

const settings = {}

export default FormValidator
