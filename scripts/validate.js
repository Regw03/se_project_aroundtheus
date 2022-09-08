const showInputError = (input, formEl, {errorClass}) => {
    const errorSpan = formEl.querySelector('#' + input.id + '-error');
    //add Error message
    console.log(input.error,validationMessage);
    errorSpan.textContent = input.validationMessage;
    errorSpan.classList.add(errorClass);
}

const hideInputError = (input, formEl, {errorClass}) => {
    const errorSpan = formEl.querySelector('#' + input.id + '-error');
    //add Error message
    errorSpan.textContent = "";
    errorSpan.classList.add(errorClass);
}


const checkInputValidity = (formEl, input, settings) => {
    if(input.validity.valid) {
        console.log("valid");
        hideInputError();
    } else {
        showInputError(input, formEl);
    }
};

const setEventListeners = (formEl, settings) => {
    const inputs = [...formEl.querySelectorAll(settings.inputSelector)];
    inputs.forEach((input) => {
        input.addEventListener("input", (e) => {
            //check validation
            checkInputValidity(formEl, input, settings);
            console.log(checkInputValidity);
            //toggle the button
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
    inactiveButtonClass: "pupup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
});



