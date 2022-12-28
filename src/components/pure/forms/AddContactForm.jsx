import React, {useRef} from 'react';

const AddContactForm = ({addContact}) => {
    const name = useRef('');
    const email = useRef('');

    function onAddContact(e){
        e.preventDefault();

        const contact = {
            name: name.current.value,
            email: email.current.value,
            status: true
        };

        addContact(contact);

        name.current.value = '';
        name.current.value = '';
    }
    
    return (
        <form onSubmit={ onAddContact } className="w-50 m-auto">
          <h2 className="text-center">Add Contact: </h2>
          <input ref={name} name="name" placeholder="Contact name" className="form-control mb-2" />
          <input ref={email} name="email" type="email" placeholder="Contact Email" />
          <button type="submit" className="btn btn-seccess w-100">Add</button>
        </form>
    );
}

export default AddContactForm;
