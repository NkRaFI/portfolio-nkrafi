import React from 'react';
import { Link } from 'react-router-dom';
import projectData from '../../../projectData/projectData.json';
import ProjectCard from './ProjectCard';

const ProjectSection = () => {
    const projects = projectData.slice(0, 3);
    return (
        <div className="container mx-auto">
            <h2 className="my-5 text-center pt-4">My Projects</h2>
            <div className="row mx-auto">
                {
                    projects.map(project => <ProjectCard project={project} key={project.id}></ProjectCard>)
                }
            </div>
            <div className="text-center my-5">
                <Link to="/projects">
                    <button className="btn primaryBg px-5">Explore More</button>
                </Link>
            </div>
        </div>
    );
};

export default ProjectSection;