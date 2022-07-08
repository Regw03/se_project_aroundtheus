// cards array

const initialCards = [
{ 
  name: "Yosemite Valley",
  link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
},
{
  name: "Lake Louise",
  link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
},
{
  name: "Bald Mountains",
  link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
},
{
  name: "Latemar",
  link: "https://code.s3.yandex.net/web-code/latemar.jpg",
},
{
  name: "Vanoise National Park",
  link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
},
{
  name: "Lago di Braies",
  link: "https://code.s3.yandex.net/web-code/lago.jpg",
},
];






//buttons nodes
const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditClose = document.querySelector(".popup__close-button");
const profileSave = document.querySelector(".popup__submit");
//wrappers
const profileTitle = document.querySelector(".profile__info-name");
const profileProfession = document.querySelector(".profile__info-profession");
const popupEditForm = document.querySelector(".popup__form");
const profileEditPopup = document.querySelector(".popup");
// form data
const nameInputValue = popupEditForm.querySelector(".popup__input-name");
const professionInputValue = popupEditForm.querySelector(".popup__input-profession");

// card template

const cardTemplate = document.querySelector("#card-template").content.firstElementChild;
const cardListEl = document.querySelector(".elements__card-grid");



profileEditButton.addEventListener("click", function() {
    nameInputValue.value = profileTitle.textContent;
    professionInputValue.value = profileProfession.textContent;
    profileEditPopup.classList.add("popup__is_open");
});

profileEditClose.addEventListener("click", function(){
    profileEditPopup.classList.remove("popup__is_open");
});


popupEditForm.addEventListener("submit", (event) =>{
    event.preventDefault();
    const nameInputValue = event.target.name.value; 
    const professionInputValue = event.target.profession.value;
    profileTitle.textContent = nameInputValue;
    profileProfession.textContent = professionInputValue;
    profileEditPopup.classList.remove("popup__is_open");

});


// cards ellement 
function createCard (cardData){
  // clone template
  const cardElement = cardTemplate.cloneNode(true);
  // find card image
  const imageEl = cardElement.querySelector(".elements__card-image");
  // find card title
   const titleEl = cardElement.querySelector(".elements__card-title");
  // replace img src
  imageEl.src = cardData.link;
  // replace img alt
  imageEl.alt = cardData.name;
  // replace title
  titleEl.textContent = cardData.name;
  // append to list
  return cardElement;
};

function renderCard (cardData){
  const cardElement = createCard(cardData);
  cardListEl.prepend(cardElement);
}

initialCards.forEach(renderCard);


