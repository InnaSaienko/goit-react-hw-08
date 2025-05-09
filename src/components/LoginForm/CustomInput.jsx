import React, {useId} from 'react';
import s from "../ContactForm/ContactForm.module.css";
import {Field} from "formik";

const CustomInput = ({name}) => {
    const id = useId();
    const isPasswordField = (name === 'password');

    return (
        <Field name={name}>
            {({ field, meta }) => (
                <div className={s.input_group}>
                    <label htmlFor={id} className={s.label}>{name.charAt(0).toUpperCase() + name.slice(1)}</label>
                    <input
                        id={id}
                        type={isPasswordField ? 'password' : 'text'}
                        className={s.field}
                        placeholder={`Enter your ${name}`}
                        {...field}
                    />
                    {meta.touched && meta.error ? <div className={s.errorMessage}>{meta.error}</div> : null}
                </div>
            )}
        </Field>
    );
};

export default CustomInput;