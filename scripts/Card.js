class Card {
  constructor(cardData, cardTemplate) {
    this._name = cardData.name
    this._link = cardData.link

    this._cardTemplate = cardTemplate
  }

  _getTemplate() {
    return document
      .querySelector(this._cardTemplate)
      .content.querySelector('.card')
      .cloneNode(true)
  }

}

export default Card
