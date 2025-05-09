import React, {useId} from 'react';
import {Field} from "formik";

const CustomInput = ({name}) => {
    const id = useId();
    const isPasswordField = (name === 'password');

    return (
        <Field name={name}>
            {({ field, meta }) => (
                <div>
                    <label htmlFor={id} className="label">{name.charAt(0).toUpperCase() + name.slice(1)}</label>
                    <input
                        id={id}
                        type={isPasswordField ? 'password' : 'text'}
                        className="input"
                        placeholder={`Enter your ${name}`}
                        {...field}
                    />
                    {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
                </div>
            )}
        </Field>
    );
};

export default CustomInput;