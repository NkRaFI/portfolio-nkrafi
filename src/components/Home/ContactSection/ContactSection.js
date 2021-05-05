import React from 'react';
import { Link } from 'react-router-dom';
import github from '../../../images/github-icon.png';
import facebook from '../../../images/facebook-icon.png';
import linkedIn from '../../../images/linkedin-icon.png';

const ContactSection = () => {
    return (
        <div className="text-center my-5 py-5">
            <h2 className="my-3">Get In Touch</h2>
            <div className="d-flex justify-content-center">
                <a href="https://github.com/NkRaFI" className="nav-item" target="_blank" rel="noreferrer">
                    <img style={{ width: '25px', margin: '15px' }} src={github} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/nk-rafi/" className="nav-item" target="_blank" rel="noreferrer">
                    <img style={{ width: '25px', margin: '15px' }} src={linkedIn} alt="" />
                </a>
                <a href="https://www.facebook.com/nasorullah.khan.5" className="nav-item" target="_blank" rel="noreferrer">
                    <img style={{ width: '25px', margin: '15px' }} src={facebook} alt="" />
                </a>
            </div>
            <p>Feel free to contact me anytime. I'll response to you as soon as possible.</p>
            <div className="text-center">
                <p>Email: nkrafi11@gmail.com</p>
                <p>Phone: +880 1830534466</p>
            </div>
            <Link to="/contact">
                <button className="btn primaryBg px-4">Send a message</button>
            </Link>
        </div>
    );
};

export default ContactSection;