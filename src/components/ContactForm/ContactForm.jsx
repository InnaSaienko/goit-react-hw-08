import React from 'react';
import s from "./ContactForm.module.css";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useDispatch} from "react-redux";
import {nanoid} from "@reduxjs/toolkit";
import {addContact} from "../../redux/contacts/operations.js";

const initialValues = {
    name: "",
    number: "",
};

const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")
});

const ContactForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        const uniqueId = nanoid();
        const newContact = {...values, id: uniqueId};
        dispatch(addContact(newContact));
        actions.resetForm();
    };

    return (
        <div style={{marginTop: '10px'}}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                <Form className={s.form}>
                    <div className={s.input_group}>
                        <label htmlFor="name" className={s.label}/> Name
                        <Field type="text" name="name" placeholder="Name" className={s.field}/>
                        <ErrorMessage name="name" component="span" className={s.errorMessage}/>
                    </div>

                    <div className={s.input_group}>
                        <label htmlFor="number" className={s.label}/> Number
                        <Field type="text" name="number" placeholder="Number" className={s.field}/>
                        <ErrorMessage name="number" component="span" className={s.errorMessage}/>
                    </div>
                    <div className={s.input_group}>
                        <button type="submit" className={s.button}> Add Contact</button>
                    </div>


                </Form>
            </Formik>
        </div>

    );
};

export default ContactForm;