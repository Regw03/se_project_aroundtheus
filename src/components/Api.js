class Api {
  constructor(options) {
    // constructor body
  }

   getInitialCards() {

   return fetch("https://around-api.en.tripleten-services.com/v1", {

     headers: {
       authorization: " 4b5610a4-d4fb-4ac3-a0cf-5cf08fc2641b",
     },

   })
   
   .then((res) => {

     if (res.ok) {
       return res.json();
     }

   });

 }
 

  // other methods for working with the API
}

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",

  headers: {
    authorization: "4b5610a4-d4fb-4ac3-a0cf-5cf08fc2641b",
    "Content-Type": "application/json",
  },

});
