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
  popupWithDelete,
  deleteButton,
} from "../utils/constants.js";
import Api from "../components/Api.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js";

const cardSelector = "#card-template";
const cardListEl = document.querySelector(".elements__card-grid");



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
  api.addCards(data).then((cardData) => {
    const card = renderCard(cardData);
    section.addItem(card);
    addCardPopup.close();
  });
});

addCardPopup.setEventListeners();

const editPopup = new PopupWithForm("#edit-popup", (data) => {
  api.editProfile({name:data.name, about:data.profession}).then((userInfo));
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


// const addLike = new addLike(".likeButton", ()=> {
//   api.addLike({cardId, likeButton })
// });

// const removeLike = new removeLike(".likeButton", () => {
//   api.removeLike({cardId, likeButton})
// });


function handelImageClick({ name, link }) {
  imagePreviewPopup.open({ name, link });
}

function renderCard(cardData) {
  const card = new Card(
    cardData,
    cardSelector,
    handelImageClick,
    handleDeleteClick,
  );
  return card.getView();
}

const popupWithConfirm = new PopupWithConfirm("#delete_card");
popupWithConfirm.setEventListeners();

function handleDeleteClick(cardId){
  popupWithConfirm.open();
  popupWithConfirm.setSubmitAction(() => {
    api.deleteCard({cardId}).then(() => {
      this.handleDelete();
    })
    popupWithConfirm.close();
  })
};
//cards add form

addCardButton.addEventListener("click", function () {
  addFormValidator.disableSubmitButton();
  addCardPopup.open();
});

//Api object

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",

  headers: {
    authorization: "4b5610a4-d4fb-4ac3-a0cf-5cf08fc2641b",
    "Content-Type": "application/json",
  },
});

let section;
api.getInitialCards().then((cards) => {
  section = new Section(
    {
      items: cards,
      renderer: (item) => {
        const card = renderCard(item);
        section.addItem(card);
      },
    },
    ".elements__card-grid"
  );
  section.renderItems();
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
