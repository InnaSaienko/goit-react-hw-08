import React from 'react';
import clsx from 'clsx';
import s from "../Navigation/Navigation.module.css";
import {NavLink} from "react-router-dom";

const setActiveClass = ({ isActive }) => {
    return clsx(s.link, isActive && { [s.active] : true});
};
const AuthNav = () => {

    return (
        <header className={s.header} id={`AuthNav`}>
            <NavLink className={setActiveClass} to="/login">Login</NavLink>
            <NavLink className={setActiveClass} to="/register">Register</NavLink>
        </ header>
    );
};

export default AuthNav;