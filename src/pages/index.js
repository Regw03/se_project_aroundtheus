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
  avatarEditButton,
  avatarEditForm,
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
const avatarFormValidator = new FormValidator(settings, avatarEditForm);
avatarFormValidator.enableValidation();

const addCardPopup = new PopupWithForm("#add-popup", (data) => {
  addCardPopup.renderLoading(true);
  api.addCards(data).then((cardData) => {
    const card = renderCard(cardData);
    section.addItem(card);
    addCardPopup.close();
  }).finally(()=> {
    addCardPopup.renderLoading(false);
  }).catch((error)=> {
    console.log(error)
  })
});

addCardPopup.setEventListeners();

const editPopup = new PopupWithForm("#edit-popup", (data) => {
  editPopup.renderLoading(true);
  api.editProfile({ name: data.name, about: data.profession }).then((user) => {
    userInfo.setUserInfo(user.name, user.about);
    editPopup.close();
  }).finally(() => {
    editPopup.renderLoading(false);
  }).catch((error) => {
    console.log(error);
  });
  
});

//avatar change below

const avatarEditPopup = new PopupWithForm("#change_avatar", (data) => {
  avatarEditPopup.renderLoading(true);
  api.changeAvatar(data).then(res => {
    console.log(res);
    userInfo.setAvatarImgInfo(res.avatar);
    avatarEditPopup.close();
  }).finally(() => {
    avatarEditPopup.renderLoading(false);
  }).catch((error) => {
    console.log(error);
  });
});
avatarEditPopup.setEventListeners();

avatarEditButton.addEventListener("click", function () {
  avatarEditPopup.open();
  
});




/* -------------------------------------------------------------------------- */
/*                            //  profile edit form                           */
/* -------------------------------------------------------------------------- */

const imagePreviewPopup = new PopupWithImage("#image_preview");
imagePreviewPopup.setEventListeners();

//edit popup is open event
const avatar = document.querySelector(".profile__avatar");
const name = document.querySelector("#infoname");
const profession = document.querySelector("#profession");

const userInfo = new UserInfo(name, profession, avatar);

editPopup.setEventListeners();

profileEditButton.addEventListener("click", function () {
  const userData = userInfo.getUserInfo();
  nameInputValue.value = userData.name;
  professionInputValue.value = userData.profession;
  editPopup.open();
});

function handelImageClick({ name, link }) {
  imagePreviewPopup.open({ name, link });
}

function renderCard(cardData) {
  const card = new Card(
    cardData,
    cardSelector,
    handelImageClick,
    handleDeleteClick,
    handleLikeClick
  );
  return card.getView();
}

const popupWithConfirm = new PopupWithConfirm("#delete_card");
popupWithConfirm.setEventListeners();

function handleDeleteClick(cardId) {
  
  popupWithConfirm.open();
  popupWithConfirm.setSubmitAction(() => {
    popupWithConfirm.renderSaving(true);
    api.deleteCard({ cardId }).then(() => {
      this.handleDelete();
      popupWithConfirm.close();
    }).finally(() => {
      popupWithConfirm.renderSaving(false);
    }).catch((error) => {
      console.log(error);
    });
    
  });
}

function handleLikeClick(cardId) {
  if (this._isLiked) {
    api.removeLike(cardId).then(() => {
      this.handleLike(false);
    }).catch((error) => {
      console.log(error);
    });
  } else {
    api.addLike(cardId).then(() => {
      this.handleLike(true);
    }).catch((error) => {
      console.log(error);
    });
  }
}

//cards add form

addCardButton.addEventListener("click", function () {
  addFormValidator.disableSubmitButton();
  addCardPopup.open();
});

//Api object

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",

  headers: {
    authorization: "b38ed4d6-3275-4538-846d-7ec5d56fd185",
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
}).catch((error) => {
  console.log(error);
});

api.getUserInfo().then((user) => {
  userInfo.setUserInfo(user.name, user.about);
  userInfo.setAvatarImgInfo(user.avatar);
}).catch((error) => {
  console.log(error)
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
