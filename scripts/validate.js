const showInputError = (input, formEl, {errorClass, inputErrorClass}) => {
    const errorSpan = formEl.querySelector('#' + input.id + '-error');
    //add Error message
    errorSpan.textContent = input.validationMessage;
    errorSpan.classList.add(errorClass);
    input.classList.add(inputErrorClass);
}

const hideInputError = (input, formEl, {errorClass}) => {
    const errorSpan = formEl.querySelector('#' + input.id + '-error');
    //add Error message
    errorSpan.textContent = "";
    errorSpan.classList.add(errorClass);
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

 const toggleButton = (inputList, button, settings) => {
    console.log('hasValid', hasValidInputs(inputList));
    if( hasValidInputs(inputList)) {
        button.disabled = false;
        button.classList.remove("popup__button_disabled");
    } else {
        button.disabled = true;
        button.classList.add("popup__button_disabled");
    };
 };

const setEventListeners = (formEl, settings) => {
    const inputList = [...formEl.querySelectorAll(settings.inputSelector)];
    const submitButton = formEl.querySelector(settings.submitButtonSelector);
    inputList.forEach((input) => {
        input.addEventListener("input", (e) => {
            //check validation
            checkInputValidity(formEl, input, settings);
            //console.log(checkInputValidity);
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



