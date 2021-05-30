import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import Navbar from '../Navbar/Navbar';
import github from '../../images/github-icon.png';
import facebook from '../../images/facebook-icon.png';
import linkedIn from '../../images/linkedin-icon.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])

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
                <div className="d-flex justify-content-center my-3" data-aos="fade-right">
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
                <div className="col-12 col-md-4">
                    <form className="contact-form darkBg p-4 rounded" onSubmit={sendEmail} data-aos="fade-up">
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