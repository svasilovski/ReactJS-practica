import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';


const ContactosComponent = ({contacto}) => {
    return (
        <div>
            <div><b>Nombre:</b> { contacto.nombre }</div>
            <div><b>Apellido:</b> { contacto.apellido }</div>
            <div><b>Email:</b> { contacto.email }</div>
            <div><b>Estado:</b> { contacto.conectado ? 'Contacto En Línea' : 'Contacto No Disponible' }</div>
        </div>
    );
};


ContactosComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),
};


export default ContactosComponent;
