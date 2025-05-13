import React from 'react';
import AppBar from "./AppBar/AppBar.jsx";

const Layout = ({children}) => {
    return (
        <>
            <header className="layout">
                <AppBar/>
            </header>
            <main>
                {children}
            </main>
        </>
    );
};

export default Layout;