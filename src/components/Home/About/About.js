import React, { useEffect } from 'react';
import './About.css';
import resume from '../../../images/NASORULLAH KHAN- Resume.pdf';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])

    return (
        <div id="about" className="row my-5 mx-auto">
            <h2 className="mt-5 mb-5 text-center">About Me</h2>
            <div className="col-12 col-md-6 mb-3 text-center" data-aos="slide-right">
                <h4 className="my-3">Why Me?</h4>
                <p className=""> I'm a dedicated web developer with experience in modern web technologies. Always love the opportunity of learning and adopting new web technologies and skills. My expertise is Javascript, ES6, React.js, Node.js, Express.js, REST API, MongoDB, Git, etc. My goal is to provide a clean and proper functional web application for a better user experience with values. I prefer to work as a front-end web developer, but open to work as a backed developer also.</p>
                <div className="my-4">
                <a className="btn primaryBg" href={resume} download>Download Resume</a>
                </div>
            </div>
            <div className="col-12 col-md-6 mb-3" data-aos="slide-left">
                <h4 className="text-center my-3">Skills</h4>
                <div className="skills">
                    <button>Javascript</button> <button>ES6</button> 
                    <button>React.js</button> <button>Material-UI</button>
                    <button>Bootstrap</button> <button>Node.js</button>
                    <button>Express.js</button> <button>MongoDB</button>
                    <button>Redux</button> <button>REST API</button>
                    <button>Firebase</button> <button>Git</button>
                    <button>Github</button> <button>Webpack</button>
                    <button>Heroku</button> <button>VS code</button>
                    <button>UI/UX</button> <button>Adobe Illustrator</button>
                </div>
            </div>
        </div>
    );
};

export default About;