class FormValidator {

    constructor(settings, formElement) {
        this._settings = settings;
        this._form = formElement;
        this._formSelector = settings.formSelector;
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;
        this.settings = settings;
        this._form = formElement;
        
        console.log(this);
    };
        


    // _setEventListeners() {

    //     const inputList = [...this._form.querySelectorAll(this.settings.inputSelector)];
    //     const submitButton = this._form.querySelector(this.settings.submitButtonSelector);
    //     toggleButton(inputList, submitButton, settings);

    //     inputList.forEach((input) => {
    //         input.addEventListener("input", (e) => {
    //             //check validation
    //             checkInputValidity(this._form, input, settings);
    //             //toggle the button
    //             toggleButton(inputList, submitButton, settings);
            
    //          });
    //     });

    // }

    // _enableValidation() {

    //     this._form.addEventListener("submit", (e) => e.preventDefault())
    //     setEventListeners(this._form, settings);
        
    // };

};


const editFormValidator = new FormValidator(settings, editForm);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(settings, addForm);