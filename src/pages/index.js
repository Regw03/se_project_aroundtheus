import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import "./index.css";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import {initialCards} from "../utils/constants.js";


const cardSelector = '#card-template';
const cardListEl = document.querySelector('.elements__card-grid');

const section = new Section({items:initialCards, renderer:(item)=>{
const card = renderCard(item);
section.addItem(card);
}},".elements__card-grid");
section.renderItems();

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
// add button form
const addCardForm = document.querySelector('#add-form');

/* -------------------------------------------------------------------------- */
/*                                // form data                                */
/* -------------------------------------------------------------------------- */
//edit form data
const nameInputValue = popupEditForm.querySelector('#name-input');
const professionInputValue = popupEditForm.querySelector('#profession-input', );

//card add form data
const titleInputValue = addCardForm.querySelector('#add_title-input');

const linkInputValue = addCardForm.querySelector('#add_link-input');

/* -------------------------------------------------------------------------- */
/*                              // card template                              */
/* -------------------------------------------------------------------------- */



export const imagePreview = document.querySelector('#image_preview');
export const popupImage = imagePreview.querySelector(".popup__image");
export const popupImageTitle = imagePreview.querySelector(".popup__image-title");




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

const name = document.querySelector('#infoname');
const profession = document.querySelector('#profession');

const userinfo = new UserInfo(name, profession);

const addCardPopup = new PopupWithForm('#add-popup', (data) => {
    const card = renderCard({
        name: data.name,
        link: data.link,
    });

    section.addItem(card);

    // closePopup(addCardPopup);
    addCardPopup.close();
    addCardForm.reset();
    const button = document.querySelector("#add_submit");
})

    addCardPopup.setEventListeners();
const editPopup = new PopupWithForm('#edit-popup', (data) =>{
    profileTitle.textContent = data.name;
    profileProfession.textContent = data.profession;
    editPopup.close();

});
    editPopup.setEventListeners();

/* -------------------------------------------------------------------------- */
/*                            //  profile edit form                           */
/* -------------------------------------------------------------------------- */

const imagePreviewPopup = new PopupWithImage('#image_preview')
imagePreviewPopup.setEventListeners();

//edit popup is open event

profileEditButton.addEventListener('click', function() {
    nameInputValue.value = profileTitle.textContent;
    professionInputValue.value = profileProfession.textContent;
    editPopup.open();
});





/* -------------------------------------------------------------------------- */
/*                      // cards ellement / functions                         */
/* -------------------------------------------------------------------------- */

function handelImageClick({name, link}){
imagePreviewPopup.open({name, link});
};

function renderCard(cardData) {
    const card = new Card(cardData, cardSelector, handelImageClick);
    return card.getView();
};



//cards add form

addCardButton.addEventListener('click', function() {
    addCardPopup.open()
});

addCloseButton.addEventListener('click', function() {
    addCardPopup.close()
});




//create new card


    // event.preventDefault();
    // const linkInputValue = event.target.link.value;
    // renderCard({
    //     name: titleInputValue.value,
    //     link: linkInputValue,
    // });

    // closePopup(addCardPopup);
    // addCardForm.reset();
    // const button = document.querySelector("#add_submit");
    // addFormValidator.disableSubmitButton();


