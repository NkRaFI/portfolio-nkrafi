import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import Navbar from '../Navbar/Navbar';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_l8vpk2d', 'template_6k4hm6i', e.target, 'user_cKQym7JLkxi6qJJyDrvDS')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert("Your message has been send successfully")
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className="contactForm">
            <Navbar></Navbar>
            <div className="row d-flex justify-content-center my-5 p-3">
                <h2 className="text-center mb-4">Contact Me</h2>
                <div className="col-12 col-md-4">
                    <form className="contact-form darkBg p-4 rounded" onSubmit={sendEmail}>
                        <label>Name</label>
                        <input className="form-control mb-3" type="text" name="user_name" required />
                        <label>Email</label>
                        <input className="form-control mb-3" type="email" name="user_email" required />
                        <label>Message</label>
                        <textarea className="form-control mb-4" name="message" required />
                        <input className="form-control btn primaryBg" type="submit" value="Send a message" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;