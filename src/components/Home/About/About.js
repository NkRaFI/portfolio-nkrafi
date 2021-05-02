import React from 'react';
import './About.css';
import resume from '../../../images/resume-NkRafi.pdf';

const About = () => {
    return (
        <div id="about" className="row my-5 mx-auto">
            <h2 className="mt-5 mb-5 text-center">About Me</h2>
            <div className="col-12 col-md-6 mb-3 text-center">
                <h4 className="my-3">Why Me?</h4>
                <p className=""> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius expedita quia quam rerum ab vero, totam maiores iure dolore numquam quasi dolores perspiciatis illo? Odit autem alias, rerum nostrum nobis aspernatur quibusdam, dicta ullam libero atque, illo repellendus ipsum eaque in omnis incidunt consectetur nulla ratione nesciunt. Architecto, laudantium ullam.</p>
                <div className="my-4">
                <a className="btn primaryBg" href={resume} download>Download Resume</a>
                </div>
            </div>
            <div className="col-12 col-md-6 mb-3">
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