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
//save button
const profileSave = document.querySelector('.popup__submit');
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
const nameInputValue = popupEditForm.querySelector('.popup__input');
const professionInputValue = popupEditForm.querySelector('.popup__input',);

//card add form data
const titleInputValue = addCardForm.querySelector('#add_title-input');

const linkInputValue = addCardForm.querySelector('#add_link-input');

/* -------------------------------------------------------------------------- */
/*                              // card template                              */
/* -------------------------------------------------------------------------- */

const cardTemplate = document.querySelector('#card-template').content.firstElementChild;
const cardListEl = document.querySelector('.elements__card-grid');

/* -------------------------------------------------------------------------- */
/*                            //  profile edit form                           */
/* -------------------------------------------------------------------------- */

function openPopup(popup) {
  popup.classList.add("popup_is-open");
};

function closePopup(popup) {
  popup.classList.remove("popup_is-open");
}

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

function createCard(cardData) {
  // clone template
  const cardElement = cardTemplate.cloneNode(true);

  //like button
  const likeButton = cardElement.querySelector('#like-button');

  //cards like event
  likeButton.addEventListener('click', function () {
    likeButton.classList.toggle('elements__card-button_active');
  });
  //trash button
  const cardDelete = cardElement.querySelector('.elements__trash-button');

  //cards delete event
  cardDelete.addEventListener('click', function () {
    cardElement.remove();
  });

  // card image preview
  const imagePreview = document.querySelector('#image_preview');

  // card image
  const imageEl = cardElement.querySelector('.elements__card-image');

  //image preview popup
  imageEl.addEventListener('click', function () {
    const popupImage = imagePreview.querySelector(".popup__image")
    const popupImageTitle = imagePreview.querySelector(".popup__image-title")
    popupImageTitle.textContent = cardData.name;
    popupImage.src = cardData.link;
    popupImage.alt = cardData.name;
    openPopup(imagePreview);
  });
  //image preview close button
  previewCloseButton.addEventListener("click", function() {
    closePopup(imagePreview);
  });
//image preview close w/esc button
  document.addEventListener('keydown', function(e) {
    const key = e.key;
    if (key === "Escape") {
      closePopup(imagePreview);
    };
  });
//image preview close w/click background

  

  // find card title
  const titleEl = cardElement.querySelector('.elements__card-title');

  // replace img src
  imageEl.src = cardData.link;

  // replace img alt
  imageEl.alt = cardData.name;

  // replace title
  titleEl.textContent = cardData.name;

  // append to list
  return cardElement;
};

function renderCard(cardData) {
  const cardElement = createCard(cardData);
  cardListEl.prepend(cardElement);
};

initialCards.forEach(renderCard);

//cards add form



addCardButton.addEventListener('click', function () {
  openPopup(addCardPopup);
});

addCloseButton.addEventListener('click', function () {
  closePopup(addCardPopup);
});


//create new card
  addCardForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const linkInputValue = event.target.link.value;
    renderCard({
      name: titleInputValue.value,
      link: linkInputValue,
    });
    closePopup(addCardPopup);
    addCardForm.reset();
  });
  