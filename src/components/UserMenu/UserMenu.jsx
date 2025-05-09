import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectName} from "../../redux/auth/selectors.js";
import {logout} from "../../redux/auth/operations.js";

const UserMenu = () => {
    const dispatch = useDispatch();
    const userName = useSelector(selectName);

    const handleLogOut = () => {
        dispatch(logout());
    };
    return (
        <div className="user-menu">
            <h3>Hello: {userName}</h3>
            <p>For logout you can push button</p>
            <button onClick={handleLogOut}>Log Out</button>
        </div>
    );
};

export default UserMenu;