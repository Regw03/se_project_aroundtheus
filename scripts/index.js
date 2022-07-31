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
const addCard = document.querySelector('.profile__add-button');
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
//add popup
const addCardPopup = document.querySelector('#add-popup');

/* -------------------------------------------------------------------------- */
/*                                 //card form                                */
/* -------------------------------------------------------------------------- */

// add button form
const addButtonForm = document.querySelector('#add-form');

/* -------------------------------------------------------------------------- */
/*                                // form data                                */
/* -------------------------------------------------------------------------- */
//edit form data
const nameInputValue = popupEditForm.querySelector('.popup__input-name');
const professionInputValue = popupEditForm.querySelector('.popup__input-profession',);

//card add form data
const titleInputValue = addButtonForm.querySelector('#add_title');

const linkInputValue = addButtonForm.querySelector('#add_link');

/* -------------------------------------------------------------------------- */
/*                              // card template                              */
/* -------------------------------------------------------------------------- */

const cardTemplate = document.querySelector('#card-template').content.firstElementChild;
const cardListEl = document.querySelector('.elements__card-grid');

/* -------------------------------------------------------------------------- */
/*                            //  profile edit form                           */
/* -------------------------------------------------------------------------- */

//edit popup is open event
profileEditButton.addEventListener('click', function () {
  nameInputValue.value = profileTitle.textContent;
  professionInputValue.value = profileProfession.textContent;
  profileEditPopup.classList.add('popup_is-open');
});

//edit popup close event
profileEditClose.addEventListener('click', function () {
  profileEditPopup.classList.remove('popup_is-open');
});

//profile save event
popupEditForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameInputValue = event.target.name.value;
  const professionInputValue = event.target.profession.value;
  profileTitle.textContent = nameInputValue;
  profileProfession.textContent = professionInputValue;
  profileEditPopup.classList.remove('popup_is-open');
});

/* -------------------------------------------------------------------------- */
/*                              // cards ellement                             */
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

  // find card image popup
  const imageEl = cardElement.querySelector('.elements__card-image');
  imageEl.addEventListener('click', function () {
    imagePreview.classList.add('popup_is-open');
  });
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

addCard.addEventListener('click', function () {
  nameInputValue.value = profileTitle.textContent;
  professionInputValue.value = profileProfession.textContent;
  addCardPopup.classList.add('popup_is-open');
});

addCloseButton.addEventListener('click', function () {
  addCardPopup.classList.remove('popup_is-open');
});


//create new card
  addButtonForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const titleInputValue = event.target.name.value;
    const linkInputValue = event.target.link.value;
    renderCard({
      name: titleInputValue,
      link: linkInputValue,
    });
    addCardPopup.classList.remove('popup_is-open');
  });
  