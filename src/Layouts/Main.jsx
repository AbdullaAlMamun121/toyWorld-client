import React from 'react';
import Header from '../pages/SharedComponents/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/SharedComponents/Footer/Footer';
import NavigationBar from '../pages/SharedComponents/NavigationBar/NavigationBar';

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;