import {
    openPopup
} from './utils.js';
import {
    popupImage,
    popupImageTitle,
    imagePreview,
} from "../index.js";


class Card {
    constructor(cardData, cardSelector) {
        this._name = cardData.name
        this._link = cardData.link

        this._cardSelector = cardSelector
    };

    _getTemplate() {
        return document
            .querySelector(this._cardSelector)
            .content.querySelector('.elements__card')
            .cloneNode(true)
    };

    getView() {
        this._cardElement = this._getTemplate();
        this._setEventListeners();

        // replace img src
        this._cardElement.querySelector(".elements__card-image").src = this._link;

        // replace img alt
        this._cardElement.querySelector(".elements__card-image").alt = this._name;

        // replace title
        this._cardElement.querySelector(".elements__card-title").textContent = this._name;

        return this._cardElement;

    };

    _handleDelete = () => {
        this._cardElement.remove();
    }

    _setEventListeners() {

        //like button
         this.likeButton = this._cardElement.querySelector('#like-button');

        //cards like event
        this.likeButton.addEventListener('click', this._toggleLike);

        //cards delete event
        this._cardElement.querySelector('.elements__trash-button').addEventListener('click', this._handleDelete);

        //image preview popup
        this._cardElement.querySelector('.elements__card-image').addEventListener('click', this._togglePreview);
    };

    _toggleLike = () => {
        this.likeButton.classList.toggle('elements__card-button_active');
    };

    _togglePreview = () => {
         popupImageTitle.textContent = this._name;
         popupImage.src = this._link;
         popupImage.alt = this._name;
         openPopup(imagePreview);
    };

};

export default Card
