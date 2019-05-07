/*
    Author: Bryan Nilsen
    Name: contactForm.js
    Purpose: create and render form for adding new contacts
      - include event listener to save new contact
*/

import API from "./apiManager";
import contactList from "./contactList";

function renderContactForm() {
  const formOutputDiv = document.getElementById("contactForm");
  const formFieldset = document.createElement("fieldset");
  const fieldset = `
  <label for="firstName">First Name</label>
  <input type="text" name="firstName" id="firstName"></br>
  <label for="lastName">Last Name</label>
  <input type="text" name="lastName" id="lastName"></br>
  <label for="phoneNumber">Phone Number</label>
  <input type="text" name="phoneNumber" id="phoneNumber"></br>
  <label for="address">Address</label>
  <input type="text" name="address" id="address"></br>
  <label for="city">City</label>
  <input type="text" name="city" id="city"></br>
  <label for="state">State</label>
  <input type="text" name="state" id="state"></br>
  <label for="zip">Zip Code</label>
  <input type="text" name="zip" id="zip"></br>
  `;
  formFieldset.innerHTML = fieldset;
  formOutputDiv.appendChild(formFieldset);
  const formSubmitBtn = document.createElement("button");
  formSubmitBtn.textContent = "Submit Contact Info";
  formSubmitBtn.addEventListener("click", () => {
    const formData = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      address: document.getElementById("address").value,
      city: document.getElementById("city").value,
      state: document.getElementById("state").value,
      zip: document.getElementById("zip").value,
      phoneNumber: document.getElementById("phoneNumber").value
    };
    console.log(formData);
    API.saveContact(formData).then(contactList);
  });
  formOutputDiv.appendChild(formSubmitBtn);
}

export default renderContactForm;
