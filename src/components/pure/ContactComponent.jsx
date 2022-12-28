import React from 'react';

const ContactComponent = ({contact, changeState, remove}) => {
    return (
        <tr className="w-100">
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>
                <button
                    style={{ backgroundColor: contact.status ? 'green' : 'red' }}
                    className="state-button"
                    onClick={() => changeState(contact)}
                >
                    {contact.status ? 'Connected' : 'Disconnected'}
                </button>
            </td>
            <td>
                <button className="bg-danger w-100" onClick={() => remove(contact)}>
                    Delete Contact
                </button>
            </td>
        </tr>
    );
}

export default ContactComponent;
