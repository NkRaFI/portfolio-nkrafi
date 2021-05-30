import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/my-logo.png'
import github from '../../images/github-icon.png';
import linkedIn from '../../images/linkedin-icon.png';
import facebook from '../../images/facebook-icon.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark darkBg">
            <div className="container-fluid">
                <Link className="navbar-brand ms-2 ms-md-0" to="/">
                    <img style={{ width: '100px' }} src={logo} alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-2">
                            <Link className="nav-link text-white active" aria-current="page" to="/">Home</Link >
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link text-white" href="/#about">About</a >
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link text-white" to="/projects">Projects</Link >
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link text-white" to="/blogs">Blogs</Link >
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link text-white" to="/contact">Contact</Link >
                        </li>
                        <li className="nav-item mx-2">
                            <a
                                href="https://drive.google.com/file/d/1KAH4qtstvWhd2RoVQ-IBzGJsIqG60Fx9/view?usp=sharing"
                                target="_blank" rel="noreferrer"
                                className="nav-link text-white"
                            >
                                Resume
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <a href="https://github.com/NkRaFI" className="nav-item m-2" target="_blank" rel="noreferrer">
                            <img style={{ width: "20px" }} src={github} alt="" />
                        </a>
                        <a href="https://www.linkedin.com/in/nk-rafi/" className="nav-item m-2" target="_blank" rel="noreferrer">
                            <img style={{ width: "20px" }} src={linkedIn} alt="" />
                        </a>
                        <a href="https://www.facebook.com/nasorullah.khan.5" className="nav-item m-2" target="_blank" rel="noreferrer">
                            <img style={{ width: "20px" }} src={facebook} alt="" />
                        </a>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;