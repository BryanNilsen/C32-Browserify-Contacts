/*
    Author: Bryan Nilsen
    Name: apiManager.js
    Purpose: all interaction with database:
      - get all contacts
      - save new contact
*/

const baseURL = "http://localhost:8088/contacts";

const API = {
  getContacts: function() {
    return fetch(baseURL).then(results => results.json());
  },
  saveContact: function(contactObject) {
    return fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contactObject)
    }).then(response => response.json());
  }
};

export default API;
