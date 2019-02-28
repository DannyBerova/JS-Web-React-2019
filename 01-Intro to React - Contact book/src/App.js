import React from "react";
import ReactDOM from "react-dom";

import "./App.css";
import contactsData from "./data/contacts.json";

const header = <header>&#9993; Contact Book</header>;
const footer = <footer>Contact Book SPA &copy; 2018</footer>;

const contactsCollection = [];
let currentContact;
let contactListView;

const initializeContacts = () => {
    if (contactsCollection.length === 0) {
        let index = 0;
        contactsData.forEach(contact => {
            contact.id = index++;
            contactsCollection.push(contact);
        });

        contactsCollection.sort((a, b) =>
            fullName(a).localeCompare(fullName(b))
        );

        currentContact = contactsCollection[0];
    }
};

const updateContactDetails = contact => {
    currentContact = contact;
    ReactDOM.render(App(), document.getElementById("root"));
};

const fullName = contact => `${contact.firstName} ${contact.lastName}`;

const contactView = contact => (
    <div
        className="contact"
        data-id={contact.id}
        key={contact.id}
        onClick={() => updateContactDetails(contact)}
    >
        <span className="avatar small">&#9787;</span>
        <span className="title">{fullName(contact)}</span>
    </div>
);

const contactDetailsView = contact => {
    if (!contact) return;

    return (
        <div className="content">
            <div className="info">
                <div className="col">
                    <span className="avatar">&#9787;</span>
                </div>
                <div className="col">
                    <span className="name">{contact.firstName}</span>
                    <span className="name">{contact.lastName}</span>
                </div>
            </div>
            <div className="info">
                <span className="info-line">&phone; {contact.phone}</span>
                <span className="info-line">&#9993; {contact.email}</span>
            </div>
        </div>
    );
};

const App = () => {
    initializeContacts();
    contactListView = contactListView || contactsCollection.map(contactView);

    return (
        <div className="container">
            {header}
            <div id="book">
                <div id="list">
                    <h1>Contacts</h1>
                    <div className="content">{contactListView}</div>
                </div>
                <div id="details">
                    <h1>Details</h1>
                    {contactDetailsView(currentContact)}
                </div>
            </div>
            {footer}
        </div>
    );
};

export default App;
