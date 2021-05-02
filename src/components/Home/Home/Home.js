import React from 'react';
import About from '../About/About';
import BlogSection from '../BlogSection/BlogSection';
import ContactSection from '../ContactSection/ContactSection';
import Header from '../Header/Header';
import ProjectSection from '../ProjectSection/ProjectSection';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <Header></Header>
            <About></About>
            <ProjectSection></ProjectSection>
            <BlogSection></BlogSection>
            <ContactSection></ContactSection>
        </div>
    );
};

export default Home;