import React from 'react';
import Navbar from '../Navbar/Navbar';

const NotFound = () => {
    return (
        <div style={{minHeight:"100vh"}}>
            <Navbar></Navbar>
            <div className="text-center my-5">
                <h3 className="text-secondary">Page Not Found <br/> 404 Error!!</h3>
            </div>
        </div>
    );
};

export default NotFound;