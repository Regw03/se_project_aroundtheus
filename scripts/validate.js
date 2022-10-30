const showInputError = (input, formEl, {errorClass, inputErrorClass}) => {
    const errorSpan = formEl.querySelector('#' + input.id + '-error');
    //add Error message
    errorSpan.textContent = input.validationMessage;
    errorSpan.classList.add(errorClass);
    input.classList.add(inputErrorClass);
}

const hideInputError = (input, formEl, {errorClass, inputErrorClass}) => {
    const errorSpan = formEl.querySelector('#' + input.id + '-error');
    //add Error message
    errorSpan.textContent = "";
    errorSpan.classList.remove(errorClass);
    input.classList.remove(inputErrorClass);
}


const checkInputValidity = (formEl, input, settings) => {
    if(input.validity.valid) {
        hideInputError(input, formEl, settings);
    } else {
        showInputError(input, formEl, settings);
    }
};
 const hasValidInputs = (inputList) => {

    return inputList.every(input => input.validity.valid === true);
    
 };

const enableSubmitButton = (button, settings) => {
    button.disabled = false;
    button.classList.remove(settings.inactiveButtonClass);
}

const disableSubmitButton = (button, settings) => {
        button.disabled = true;
        button.classList.add(settings.inactiveButtonClass);
}

 const toggleButton = (inputList, button, settings) => {
    if( hasValidInputs(inputList)) {
        enableSubmitButton(button, settings);
    } else {
        disableSubmitButton(button, settings);
    };
 };

const setEventListeners = (formEl, settings) => {
    const inputList = [...formEl.querySelectorAll(settings.inputSelector)];
    const submitButton = formEl.querySelector(settings.submitButtonSelector);
    toggleButton(inputList, submitButton, settings);

    inputList.forEach((input) => {
        input.addEventListener("input", (e) => {
            //check validation
            checkInputValidity(formEl, input, settings);
            //toggle the button
            toggleButton(inputList, submitButton, settings);
            
        });
    });
};

const enableValidation = (settings) => {

    const formElements = [...document.querySelectorAll(settings.formSelector)];
    formElements.forEach((formEl) => {
    formEl.addEventListener("submit", (e) => e.preventDefault())
        setEventListeners(formEl, settings);
    });

};
 

enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
    
});


