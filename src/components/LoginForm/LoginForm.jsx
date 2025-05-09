import React from 'react';
import {Form, Formik} from "formik";
import * as Yup from "yup";
import CustomInput from "./CustomInput.jsx";
import {useDispatch} from "react-redux";
import {login} from "../../redux/auth/operations.js";
import s from "../ContactForm/ContactForm.module.css";

export const LoginForm = () => {
    const regEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i;
    const dispatch = useDispatch();

    const initialValues = {
        email: "",
        password: "",
    };
    const applySchema = Yup.object().shape({
        email: Yup.string().matches(regEmail, 'Is not email!').required(),
    });

    const onSubmit = async (values, options) => {
        console.log(values, options)
        try {
            await dispatch(login({email: values.email, password: values.password}));
            alert(`User is ${values.email} logged`);
            options.resetForm();
        } catch (e) {
            const error = {};

            if (e.email) {
                return error.email = e.email.message;
            } else {
                error.password = e.password.message;
            }
            options.setErrors(error);
        }
    }

    return (
        <div className="form-wrapper">
            <h2 style={{ textAlign: 'center' }}>Registration of a new user</h2>
            <Formik validationSchema={applySchema} initialValues={initialValues} onSubmit={onSubmit}>
                <Form className={s.form}>
                    {Object.keys(initialValues).map((key) => {
                        return <CustomInput key={key} name={key}/>
                    })}
                    <button type="submit" className={s.button}>Login</button>
                </Form>
            </Formik>
        </div>
    )
}
