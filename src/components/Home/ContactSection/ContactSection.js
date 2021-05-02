import React from 'react';
import { Link } from 'react-router-dom';

const ContactSection = () => {
    return (
        <div className="text-center my-5 py-5">
            <h2 className="my-3">Get In Touch</h2>
            <p>Feel free to contact me anytime. I'll response to you as soon as possible.</p>
            <div className="d-flex justify-content-center my-3">
                <p className="me-5">📧 Email: nkrafi11@gmail.com</p>
                <p>📱 Phone: +880 1830534466</p>
            </div>
            <Link to="/contact">
                <button className="btn primaryBg px-5">Contact Me</button>
            </Link>
        </div>
    );
};

export default ContactSection;