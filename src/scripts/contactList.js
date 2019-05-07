/*
    Author: Bryan Nilsen
    Name: contactList.js
    Purpose: get all contacts from API, then run them through contact factory for output to DOM
*/

import API from "./apiManager";
import contactFactory from "./contact";

function contactList() {
  document.getElementById("output").innerHTML = "";
  API.getContacts().then(parsed => {
    parsed.forEach(contact => {
      contactFactory(contact);
    });
  });
}

export default contactList;
