import React from 'react';
import myPicture from '../../../images/profile-picture-orange.png';
import Navbar from '../../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <header className="header-container darkBg">
            <Navbar></Navbar>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center my-4">
                        <div className="intro">
                            <h1 className="primaryColor headerName">Nk Rafi</h1>
                            <p className="text-secondary">Web Developer | Programmer | UI/UX Designer </p>
                            <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse blanditiis nulla ut sapiente voluptate unde molestiae provident autem. Nobis, necessitatibus!</p>
                            <button className="btn primaryBg">Contact Me</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center my-4">
                        <img src={myPicture} alt="" className="img-fluid p-3 p-md-5" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;