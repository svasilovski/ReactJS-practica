import React, { useState } from 'react';
import ContactComponent from '../pure/ContactComponent';
import AddContactForm from '../pure/forms/AddContactForm';

const ContactContainer = () => {
    const listContact = [
        { name: 'Juan Lopez', email: 'jlopez@hotmail.com', status: true },
        { name: 'Jose Duarte', email: 'jduarte@Yahoo.com', status: false },
        { name: 'Lucia Molinares', email: 'lmolinares@aol.com', status: false },
        { name: 'Carlos Casas', email: 'ccasas@google.com', status: true },
    ];

    const [newContact, setNewContact] = useState(listContact);

    function changeState(contact) {
        const index = newContact.indexOf(contact);
        const tempContact = [...newContact];
    
        tempContact[index].status = !tempContact[index].status;
        setNewContact(tempContact);
    }
    
    function remove(contact) {
        const index = newContact.indexOf(contact);
        const tempContact = [...newContact];
        tempContact.splice(index, 1);
        setNewContact(tempContact);
    }

    function addContact(contact) {
        const tempContact = [...newContact];
        tempContact.push(contact);
        setNewContact(tempContact);
    }

    return (
        <div>
            <h1>Contacts</h1>
            <table>
                <thead>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Status</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {
                        newContact.map((contact, index) => {
                            return (
                                <ContactComponent key={index} contact={contact} changeState={changeState} remove={remove} />
                            );
                        })
                    }
                </tbody>
            </table>
                
            <AddContactForm addContact={addContact}></AddContactForm>
            
        </div>
    );
}

export default ContactContainer;
