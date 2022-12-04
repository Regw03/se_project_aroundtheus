class FormValidator {

    
 
    

    constructor(settings, formEl) {
        this._settings = settings;
        this._form = formEl;
        this._errorClass = settings.errorClass;
        
        
    };
        


    _setEventListeners() {

        const inputList = [...this._form.querySelectorAll(this._settings.inputSelector)];
        const submitButton = this._form.querySelector(this._settings.submitButtonSelector);
         this._toggleButton(inputList, submitButton, settings);

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
        const errorElement = this._form.querySelector('#' + input.id + '-error');
            //add Error message
            errorElement.textContent = input.validationMessage;
            errorElement.classList.add(this._errorClass);
            input.classList.add(this._inputErrorClass);
            
    };
        
    _hideInputError(input) {
         const errorElement = this._form.querySelector('#' + input.id + '-error');
        //remove Error message
        errorElement.textContent = "";
        errorElement.classList.remove(this._errorClass);
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




    _toggleButton () {
         const inputList = [...this._form.querySelectorAll(this._settings.inputSelector)];
         const button = this._form.querySelector(this._settings.submitButtonSelector);
        if( this._hasValidInputs(inputList)) {
        this._enableSubmitButton(button, this._settings);
         } else {
        this.disableSubmitButton(button, this._settings);
        };
    };



    _enableSubmitButton (button, _settings) {
        button.disabled = false;
        button.classList.remove(this._settings.inactiveButtonClass);
    }

    disableSubmitButton (button, _settings) {
        button.disabled = true;
        button.classList.add(this._settings.inactiveButtonClass);
    }



    //to here

    enableValidation() {

        this._form.addEventListener("submit", (e) => e.preventDefault())
        this._setEventListeners();
        
    };


};


const settings = {};



export default FormValidator;