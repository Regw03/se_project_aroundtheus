import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import "./index.css";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import {
  initialCards,
  addCardButton,
  profileEditButton,
  profileEditClose,
  addCloseButton,
  addSaveButton,
  previewCloseButton,
  profileTitle,
  profileProfession,
  popupEditForm,
  profileEditPopup,
  addCardForm,
  nameInputValue,
  professionInputValue,
  titleInputValue,
  linkInputValue,
  settings,
} from "../utils/constants.js";

const cardSelector = "#card-template";
const cardListEl = document.querySelector(".elements__card-grid");

const section = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = renderCard(item);
      section.addItem(card);
    },
  },
  ".elements__card-grid"
);
section.renderItems();

export const imagePreview = document.querySelector("#image_preview");
export const popupImage = imagePreview.querySelector(".popup__image");
export const popupImageTitle = imagePreview.querySelector(
  ".popup__image-title"
);

const editFormValidator = new FormValidator(settings, popupEditForm);
editFormValidator.enableValidation();
const addFormValidator = new FormValidator(settings, addCardForm);
addFormValidator.enableValidation();

const addCardPopup = new PopupWithForm("#add-popup", (data) => {
  const card = renderCard({
    name: data.name,
    link: data.link,
  });

  section.addItem(card);

  addCardPopup.close();
});

addCardPopup.setEventListeners();
const editPopup = new PopupWithForm("#edit-popup", (data) => {
  userInfo.setUserInfo(data.name, data.profession);
  editPopup.close();
});

/* -------------------------------------------------------------------------- */
/*                            //  profile edit form                           */
/* -------------------------------------------------------------------------- */

const imagePreviewPopup = new PopupWithImage("#image_preview");
imagePreviewPopup.setEventListeners();

//edit popup is open event

const name = document.querySelector("#infoname");
const profession = document.querySelector("#profession");

const userInfo = new UserInfo(name, profession);

editPopup.setEventListeners();

profileEditButton.addEventListener("click", function () {
  const userData = userInfo.getUserInfo();
  nameInputValue.value = userData.name;
  professionInputValue.value = userData.profession;
  editPopup.open();
});

/* -------------------------------------------------------------------------- */
/*                      // cards element / functions                         */
/* -------------------------------------------------------------------------- */

function handelImageClick({ name, link }) {
  imagePreviewPopup.open({ name, link });
};

function renderCard(cardData) {
  const card = new Card(cardData, cardSelector, handelImageClick);
  return card.getView();
};

//cards add form

addCardButton.addEventListener("click", function () {
  addFormValidator.disableSubmitButton();
  addCardPopup.open();
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
