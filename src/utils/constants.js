export const initialCards = [{
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

//add button
export const addCardButton = document.querySelector('.profile__add-button');
//edit button
export const profileEditButton = document.querySelector('.profile__edit-button');
//popup close button
export const profileEditClose = document.querySelector('.popup__close-button');
//add close button
export const addCloseButton = document.querySelector('#add_close-button');
//add save button
export const addSaveButton = document.querySelector('#add_submit');
// image preview close
export const previewCloseButton = document.querySelector("#image_preview-close");
//delete Button
export const deleteButton = document.querySelector(".elements__trash-button")
//profile title
export const profileTitle = document.querySelector('.profile__info-name');
//profile profession
export const profileProfession = document.querySelector('.profile__info-profession');
// profile edit form
export const popupEditForm = document.querySelector('.popup__form');
//edit popup
export const profileEditPopup = document.querySelector('#edit-popup');
//delete card popup
export const popupWithDelete = document.querySelector("#delete_card")
// add button form
export const addCardForm = document.querySelector('#add-form');

//edit form data
export const nameInputValue = popupEditForm.querySelector('#name-input');
export const professionInputValue = popupEditForm.querySelector('#profession-input');

//avatar editor
export const avatarEditButton = document.querySelector(".profile__avatar-edit-button");
export const avatarEditForm = document.querySelector("#change_avatar-form");

//card add form data
export const titleInputValue = addCardForm.querySelector('#add_title-input');

export const linkInputValue = addCardForm.querySelector('#add_link-input');

export const settings = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
};
