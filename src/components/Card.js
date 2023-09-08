export default class Card {
  constructor(cardData, cardSelector, handleImageClick, handleDeleteClick, handleLikeClick) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._handleImageClick = handleImageClick;
    this._cardSelector = cardSelector;
    this._handleDeleteClick = handleDeleteClick;
    this._cardId = cardData._id;
    this._handleLikeClick = handleLikeClick;
    this._isLiked = cardData.isLiked;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".elements__card")
      .cloneNode(true);
  }

  getView() {
    this._cardElement = this._getTemplate();
    this._setEventListeners();
    this._toggleLike();
    // replace img src
    this._cardElement.querySelector(".elements__card-image").src = this._link;

    // replace img alt
    this._cardElement.querySelector(".elements__card-image").alt = this._name;

    // replace title
    this._cardElement.querySelector(".elements__card-title").textContent =
      this._name;

    return this._cardElement;
  }

  handleDelete = () => {
    this._cardElement.remove();
  };

  _setEventListeners() {
    //like button
    this.likeButton = this._cardElement.querySelector("#like-button");

    //cards like event
    this.likeButton.addEventListener("click", () => this._handleLikeClick(this._cardId));

    //cards delete event
    this._cardElement
      .querySelector(".elements__trash-button")
      .addEventListener("click",() => this._handleDeleteClick(this._cardId));

    //image preview popup
    this._cardElement
      .querySelector(".elements__card-image")
      .addEventListener("click", () => {
        this._handleImageClick({ name: this._name, link: this._link });
      });
  }
  
  handleLike = (isLiked) => {
    this._isLiked = isLiked
    this._toggleLike();
  }

  _toggleLike = () => {
    
    if (this._isLiked) {
        this.likeButton.classList.add("elements__card-button_active");
    } else {
        this.likeButton.classList.remove("elements__card-button_active");
    }
  };
};


