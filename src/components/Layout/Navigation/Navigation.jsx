import React from 'react';
import s from "./Navigation.module.css";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectIsLoggedIn} from "../../../redux/auth/selectors.js";

const Navigation = () => {
    const isLogged = useSelector(selectIsLoggedIn);

    return (
        <header className={s.header}>
            <NavLink className={s.link} to="/">Home</NavLink>
            {isLogged && <NavLink className={s.link} to="/contacts">Contacts</NavLink>}
        </header>
    );
};

export default Navigation;