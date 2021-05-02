import React from 'react';
import projectData from '../../projectData/projectData.json'
import ProjectCard from '../Home/ProjectSection/ProjectCard';
import Navbar from '../Navbar/Navbar';

const Projects = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container mx-auto">
                <h2 className="my-5 text-center pt-4">My Projects</h2>
                <div className="row mx-auto">
                    {
                        projectData.map(project => <ProjectCard project={project} key={project.id}></ProjectCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;