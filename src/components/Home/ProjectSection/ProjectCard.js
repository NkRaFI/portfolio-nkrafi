import React from 'react';
import githubIcon from '../../../images/github-icon.png';
import linkIcon from '../../../images/link-icon.png';

const ProjectCard = ({ project }) => {
    const { description } = project;
    return (
        <div className="col-12 col-md-4 p-3">
            <div className="text-center">
                <img style={{ height: '200px', width: '100%' }} src={project.thumbnail} alt="" />
                <div className="darkBg py-3 px-3">
                    <h4 className="primaryColor">{project.name}</h4>
                    <h6 className="text-secondary">{project.title}</h6>
                    <div className="text-start">
                        {
                            description.map((dc, i) => <li className="my-2" key={i}>{dc}</li>)
                        }
                    </div>
                    <div className="d-flex justify-content-around py-4">
                        <a href={project.liveWebsite} target="_blank" rel="noreferrer"><img style={{width:'25px'}} src={linkIcon} alt=""/></a>
                        <a href={project.github} target="_blank" rel="noreferrer"><img style={{width:'25px'}} src={githubIcon} alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;