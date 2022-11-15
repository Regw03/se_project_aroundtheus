
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

import { openPopup, closePopup, imagePreview } from "./utils.js";


/* -------------------------------------------------------------------------- */
/*                               // cards array                               */
/* -------------------------------------------------------------------------- */

const initialCards = [
  {
    name: 'Yosemite Valley',
    link: 'https://code.s3.yandex.net/web-code/yosemite.jpg',
  },
  {
    name: 'Lake Louise',
    link: 'https://code.s3.yandex.net/web-code/lake-louise.jpg',
  },
  {
    name: 'Bald Mountains',
    link: 'https://code.s3.yandex.net/web-code/bald-mountains.jpg',
  },
  {
    name: 'Latemar',
    link: 'https://code.s3.yandex.net/web-code/latemar.jpg',
  },
  {
    name: 'Vanoise National Park',
    link: 'https://code.s3.yandex.net/web-code/vanoise.jpg',
  },
  {
    name: 'Lago di Braies',
    link: 'https://code.s3.yandex.net/web-code/lago.jpg',
  },
];





/* -------------------------------------------------------------------------- */
/*                               //buttons nodes                              */
/* -------------------------------------------------------------------------- */

//add button
const addCardButton = document.querySelector('.profile__add-button');
//edit button
const profileEditButton = document.querySelector('.profile__edit-button');
//popup close button
const profileEditClose = document.querySelector('.popup__close-button');
//add close button
const addCloseButton = document.querySelector('#add_close-button');
//add save button
const addSaveButton = document.querySelector('#add_submit');
// image preview close
const previewCloseButton = document.querySelector("#image_preview-close");



/* -------------------------------------------------------------------------- */
/*                                 //edit form                                */
/* -------------------------------------------------------------------------- */

//profile title
const profileTitle = document.querySelector('.profile__info-name');
//profile profession
const profileProfession = document.querySelector('.profile__info-profession');
// profile edit form
const popupEditForm = document.querySelector('.popup__form');
//edit popup
const profileEditPopup = document.querySelector('#edit-popup');


/* -------------------------------------------------------------------------- */
/*                                 //card form                                */
/* -------------------------------------------------------------------------- */
//add popup
const addCardPopup = document.querySelector('#add-popup');
// add button form
const addCardForm = document.querySelector('#add-form');

/* -------------------------------------------------------------------------- */
/*                                // form data                                */
/* -------------------------------------------------------------------------- */
//edit form data
const nameInputValue = popupEditForm.querySelector('#name-input');
const professionInputValue = popupEditForm.querySelector('#profession-input',);

//card add form data
const titleInputValue = addCardForm.querySelector('#add_title-input');

const linkInputValue = addCardForm.querySelector('#add_link-input');

/* -------------------------------------------------------------------------- */
/*                              // card template                              */
/* -------------------------------------------------------------------------- */

const cardSelector = '#card-template';
const cardListEl = document.querySelector('.elements__card-grid');




/* ---------------------------------- classes --------------------------------- */

const settings = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
};


const editFormValidator = new FormValidator(settings, popupEditForm);
editFormValidator.enableValidation();
const addFormValidator = new FormValidator(settings, addCardForm);
addFormValidator.enableValidation();



/* -------------------------------------------------------------------------- */
/*                            //  profile edit form                           */
/* -------------------------------------------------------------------------- */



 //image preview close button
  previewCloseButton.addEventListener("click", function() {
    closePopup(imagePreview);
  });

//edit popup is open event
profileEditButton.addEventListener('click', function () {
  nameInputValue.value = profileTitle.textContent;
  professionInputValue.value = profileProfession.textContent;
  openPopup(profileEditPopup);
});

//edit popup close event
profileEditClose.addEventListener('click', function () {
  closePopup(profileEditPopup);
});

//profile save event
popupEditForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameInputValue = event.target.name.value;
  const professionInputValue = event.target.profession.value;
  profileTitle.textContent = nameInputValue;
  profileProfession.textContent = professionInputValue;
  closePopup(profileEditPopup);
});

/* -------------------------------------------------------------------------- */
/*                      // cards ellement / functions                         */
/* -------------------------------------------------------------------------- */



function renderCard(cardData) {
  const card = new Card(cardData, cardSelector);
  // const cardElement = createCard(cardData, cardTemplate);
  cardListEl.prepend(card.getView());
};

initialCards.forEach(renderCard);

//cards add form

addCardButton.addEventListener('click', function () {
  openPopup(addCardPopup);
});

addCloseButton.addEventListener('click', function () {
  closePopup(addCardPopup);
});


const disableSubmitButton = (button, settings) => {
        button.disabled = true;
        button.classList.add(settings.inactiveButtonClass);
}

//create new card
  addCardForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const linkInputValue = event.target.link.value;
    renderCard({
      name: titleInputValue.value,
      link: linkInputValue.value,
    });
    
    closePopup(addCardPopup);
    addCardForm.reset();
    const button = document.querySelector("#add_submit");
    disableSubmitButton(button, {inactiveButtonClass: "popup__button_disabled"});
    
  });

