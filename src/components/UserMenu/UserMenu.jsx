import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectName} from "../../redux/auth/selectors.js";
import {logout} from "../../redux/auth/operations.js";
import {NavLink} from "react-router-dom";
import s from "../Layout/Navigation/Navigation.module.css";

const UserMenu = () => {
    const dispatch = useDispatch();
    const userName = useSelector(selectName);

    const handleLogOut = () => {
        dispatch(logout());
    };
    return (
        <div className={s.userMenu}>
            <div>{userName}</div>
            <NavLink onClick={handleLogOut} className={s.link} to="/">Log Out< /NavLink>
        </div>
    );
};

export default UserMenu;