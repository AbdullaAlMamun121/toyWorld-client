import React from 'react';
import Header from '../pages/SharedComponents/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/SharedComponents/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;