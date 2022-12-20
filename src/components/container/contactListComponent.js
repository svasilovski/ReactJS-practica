import React from 'react';
import { Contacto } from '../../models/contacto.class';
import ContactosComponent from '../pure/contactosComponent';


const ContactListComponent = () => {
    const contact = new Contacto("Samuel", "Vasilovski", "nombre.apellido@gmail.com", false);

    return (
        <div>
            <h1>Lista de contactos: </h1>
            <ContactosComponent contacto={ contact }></ContactosComponent>
        </div>
    );
};

export default ContactListComponent;
