import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import '../../node_modules/react-toastify/dist/ReactToastify.min.css';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';

const Layout = () => {
    return (
        <div className="App">
            <Header title="Grocery List" />
            <Nav />
            <Outlet />
            <Footer />
            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='dark'
            />
        </div>
    )
}

export default Layout