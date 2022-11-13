class FormValidator {

    constructor(settings, formEl) {
        this._settings = settings;
        this._form = formEl;
        this._formSelector = settings.formSelector;
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;
        this._input = settings.input
        
        
    };
        


    _setEventListeners() {

        const inputList = [...this._form.querySelectorAll(this._settings.inputSelector)];
        const submitButton = this._form.querySelector(this._settings.submitButtonSelector);
        // this._toggleButton(inputList, submitButton, settings);

        inputList.forEach((input) => {
            input.addEventListener("input", (e) => {
                //check validation
                this._checkInputValidity(this._form, input, this._settings);
                //toggle the button
                this._toggleButton(inputList, submitButton, this._settings);
            
             });
        });

    }
//need help from here 

    _showInputError(input) {
        const errorSpan = this._form.querySelector('#' + input.id + '-error');
            //add Error message
            errorSpan.textContent = input.validationMessage;
            errorSpan.classList.add(this._errorClass);
            input.classList.add(this._inputErrorClass);
            
    };
        
    _hideInputError(input) {
         const errorSpan = this._form.querySelector('#' + input.id + '-error');
        //remove Error message
        errorSpan.textContent = "";
        errorSpan.classList.remove(this._errorClass);
        input.classList.remove(this._inputErrorClass);
    };




    _checkInputValidity (_form, input, _settings) {
        if(input.validity.valid) {
        this._hideInputError(input, this._form, this._settings);
        } else {
        this._showInputError(input, this._form, this._settings);
        };
    };

    _hasValidInputs(inputList) {
         return inputList.every(input => input.validity.valid === true);
    };




    _toggleButton (inputList, button, _settings) {
        if( this._hasValidInputs(inputList)) {
        this._enableSubmitButton(button, this._settings);
         } else {
        this._disableSubmitButton(button, this._settings);
        };
    };



    _enableSubmitButton (button, _settings) {
        button.disabled = false;
        button.classList.remove(this._settings.inactiveButtonClass);
    }

    _disableSubmitButton (button, _settings) {
        button.disabled = true;
        button.classList.add(this._settings.inactiveButtonClass);
    }



    //to here

    enableValidation() {

        this._form.addEventListener("submit", (e) => e.preventDefault())
        this._setEventListeners(this._form, this._settings);
        
    };

};


const settings = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
};



export default FormValidator;