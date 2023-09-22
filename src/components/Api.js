export default class Api {
  constructor(options) {
    // constructor body
    this.getInitialCards = this.getInitialCards;
    this.addCards = this.addCards;
    this.editProfile = this.editProfile;
    this.likeButton = this.likeButton;
    this.addLike = this.addLike;
    this.removeLike = this.removeLike;
  }

  async getInitialCards() {
    const res = await fetch(
      "https://around-api.en.tripleten-services.com/v1/cards",
      {
        headers: {
          authorization: "b38ed4d6-3275-4538-846d-7ec5d56fd185",
        },
      }
    );
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Error: ${res.status}`);
  }

  async addCards({ name, link }) {
    const res = await fetch(
      "https://around-api.en.tripleten-services.com/v1/cards",
      {
        method: "POST",
        headers: {
          authorization: "b38ed4d6-3275-4538-846d-7ec5d56fd185",
          "Content-Type": "application/JSON",
        },
        body: JSON.stringify({ name, link }),
      }
    );
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Error: ${res.status}`);
  }

  async getUserInfo() {
    const res = await fetch(
      "https://around-api.en.tripleten-services.com/v1/users/me",
      {
        headers: {
          authorization: "b38ed4d6-3275-4538-846d-7ec5d56fd185",
          "Content-Type": "application/JSON",
        },
      }
    );
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Error: ${res.status}`);
  }

  async editProfile({ name, about }) {
    const res = await fetch(
      "https://around-api.en.tripleten-services.com/v1/users/me",
      {
        method: "PATCH",
        headers: {
          authorization: "b38ed4d6-3275-4538-846d-7ec5d56fd185",
          "Content-Type": "application/JSON",
        },
        body: JSON.stringify({ name, about }),
      }
    );
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Error: ${res.status}`);
  }

  async deleteCard({ cardId }) {
    const res = await fetch(
      "https://around-api.en.tripleten-services.com/v1/cards/" + cardId,
      {
        method: "DELETE",
        headers: {
          authorization: "b38ed4d6-3275-4538-846d-7ec5d56fd185",
          "Content-Type": "application/JSON",
        },
      }
    );
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Error: ${res.status}`);
  }

  async addLike(cardId) {
    const res = await fetch(
      "https://around-api.en.tripleten-services.com/v1/cards/" + cardId + "/likes",
      {
        method: "PUT",
        headers: {
          authorization: "b38ed4d6-3275-4538-846d-7ec5d56fd185",
          "Content-Type": "application/JSON",
        },
      }
    );
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Error: ${res.status}`);
  }

  async removeLike(cardId) {
    const res = await fetch(
      "https://around-api.en.tripleten-services.com/v1/cards/" + cardId + "/likes",
      {
        method: "DELETE",
        headers: {
          authorization: "b38ed4d6-3275-4538-846d-7ec5d56fd185",
          "Content-Type": "application/JSON",
        },
      }
    );
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Error: ${res.status}`);
  }


  async changeAvatar( {link} ) {
    const res = await fetch(
      "https://around-api.en.tripleten-services.com/v1/users/me/avatar",
      {
        method: "PATCH",
        headers: {
          authorization: "b38ed4d6-3275-4538-846d-7ec5d56fd185",
          "Content-Type": "application/JSON",
        },
        body: JSON.stringify({ avatar: link }),
      }
    );
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Error: ${res.status}`);
    }
}




