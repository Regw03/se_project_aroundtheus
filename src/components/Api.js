export default class Api {
  constructor(options) {
    // constructor body
    this.getInitialCards = this.getInitialCards;
    this.addCards = this.addCards;
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
}

// other methods for working with the API

// fetch("https://around-api.en.tripleten-services.com/v1", {
//   headers: {
//     authorization: "b38ed4d6-3275-4538-846d-7ec5d56fd185",
//   },
// })
//   .then((res) => res.json())
//   .then((result) => {
//     console.log(result);
//   });
