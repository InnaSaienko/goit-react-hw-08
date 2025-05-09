import React, {lazy, Suspense} from 'react';
import Loader from "../Loader/Loader.jsx";
import {Routes, Route} from "react-router-dom";


const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage.jsx"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage.jsx"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage/RegistrationPage.jsx"));

const RouterSet = () => {


    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/register" element={<RegistrationPage />} />
            </Routes>
        </Suspense>
    )
};

export default RouterSet;