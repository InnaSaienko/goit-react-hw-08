import React from 'react';
import s from "./AppBar.module.css";
import AuthNav from "../AuthNav/AuthNav.jsx";
import Navigation from "../Navigation/Navigation.jsx";
import {useSelector} from "react-redux";
import {selectIsLoggedIn} from "../../../redux/auth/selectors.js";
import UserMenu from "../../UserMenu/UserMenu.jsx";

const AppBar = () => {
    const isLogged = useSelector(selectIsLoggedIn);

    return (
        <div className={s.appBar}>
            <Navigation />
            {isLogged ? <UserMenu /> : <AuthNav />}
        </div>
    );
};

export default AppBar;