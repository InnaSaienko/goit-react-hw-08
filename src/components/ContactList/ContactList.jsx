import React from 'react';
import Contact from "../Contact/Contact.jsx";
import s from "./ContactList.module.css"
import {useSelector} from "react-redux";
import {selectError, selectFilteredContacts, selectLoading} from "../../redux/contacts/slice.js";

const ContactList = () => {
    const filteredContacts = useSelector(selectFilteredContacts);
    const isLoading = useSelector(selectLoading);
    const error = useSelector(selectError);

    return (
        <div style={{marginTop: '10px'}}>
            {isLoading && !error && <b>Request in progress...</b>}
            <div className={s.list}>
                {filteredContacts.length === 0 ? (
                    <p>No users available</p>
                ) : (
                    filteredContacts.map((contact) => (
                        <Contact key={contact.id} contact={contact}/>
                    ))
                )
                }
            </div>
        </div>
    )
        ;
}

export default ContactList;