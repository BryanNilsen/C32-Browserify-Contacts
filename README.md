# Browserify Contacts Exercise

## Prerequisites for Everyone

Run this first

```sh
npm i -g cross-env
```

## Project Setup

1. Clone this repository.
1. `cd browserify-contacts/src/lib`
1. `npm install`
1. `npm start`

The `npm start` command will run grunt for you.

The web server will be started, and the JavaScript code in the `src/scripts` directory will be compiled into `public/bundle.js`.

1. Open Chome and make sure your developer tools are open.
1. Open [http://localhost:8080](http://localhost:8080) in your browser.

## Practice: Contact List

Build four components:

1. A **ContactCollection** component that loads existing contacts from a `json-server` API, and saves new ones.
1. A **Contact** component that displays a person's name, phone number, and address.
1. A **ContactList** component that displays all contacts. It should import the **Contact** component and the **ContactCollection** component.
1. A **ContactForm** component that listens for when the submit button is pressed. When it is triggered, a new contact should be POSTed to the API. It should import the **ContactCollection** component.

In `main.js`, import the **ContactList** component and the **ContactForm** component.

The user should see the contact form at the top of the view, and the list of contacts underneath it.

> **Bonus:** Are there any other modules that could be made? Do any modules have more than one possible responsibility? Perhaps something that is a general utility function.
