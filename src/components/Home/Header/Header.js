import React from 'react';
import { Link } from 'react-router-dom';
import myPicture from '../../../images/profile-picture-orange.png';
import Navbar from '../../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <header className="header-container darkBg">
            <Navbar></Navbar>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center my-4 my-md-0">
                        <div className="intro">
                            <h1 className="primaryColor headerName">NK RAFI</h1>
                            <p className="text-secondary">Web Developer | Programmer | UI/UX Designer </p>
                            <p className="my-4">A dedicated web developer specialized in React.js and front-end development.</p>
                            <Link to="/contact"><button className="btn primaryBg">Contact Me</button></Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center my-4 my-md-0">
                        <img src={myPicture} alt="" className="img-fluid p-3 p-md-5" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;