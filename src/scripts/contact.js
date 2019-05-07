/*
    Author: Bryan Nilsen
    Name: contact.js
    Purpose: accept contact object and render HTML element to DOM
*/

function contactFactory(contactObject) {
  const outputSection = document.getElementById("output");
  const contactCard = document.createElement("div");
  const contactDetails = `
  <h1>${contactObject.firstName} ${contactObject.lastName}</h1>
  <p>${contactObject.phoneNumber}</p>
  <ul>
    <li>${contactObject.address}</li>
    <li>${contactObject.city}, ${contactObject.state} ${contactObject.zip}</li>
  </ul>
  `;
  contactCard.innerHTML = contactDetails;

  outputSection.appendChild(contactCard);
}

export default contactFactory;
