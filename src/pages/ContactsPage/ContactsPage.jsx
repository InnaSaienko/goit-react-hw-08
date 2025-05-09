import React, {useEffect} from 'react';
import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import SearchBox from "../../components/SearchBox/SearchBox.jsx";
import ContactList from "../../components/ContactList/ContactList.jsx";
import {useDispatch} from "react-redux";
import {fetchContacts} from "../../redux/contacts/operations.js";

const ContactsPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
            <ContactForm/>
            <SearchBox/>
            <ContactList/>
        </>
    );
};

export default ContactsPage;