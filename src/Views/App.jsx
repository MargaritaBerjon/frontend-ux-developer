import React, { useState, useEffect } from 'react';
import './App.scss';
import getProjects from '../Services/getProjects.js';
import Menu from '../Components/Menu/Menu.jsx';
import Poster from '../Components/Poster/Poster.jsx';
import Title from '../Components/Title/Title.jsx';
import AboutMe from '../Components/AboutMe/AboutMe.jsx';
import Knowledge from '../Components/Knowledge/Knowledge.jsx';
import ProjectsMenu from '../Components/Projects/ProjectsMenu.jsx';
import FrontProjects from '../Components/Projects/FrontProjects.jsx';
import UXProjects from '../Components/Projects/UXProjects.jsx';
import Contact from '../Components/Contact/Contact.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [isFrontVisible, setIsFrontVisible] = useState([]);

  useEffect(() => {
    getProjects().then((projects) => {
      setProjects(projects);
    });
  }, []);

  return (
    <div className='App'>
      <Menu></Menu>
      <Poster name='Margarita Berjón' description='Frontend UX developer'></Poster>
      <main className='main-container'>
        <ScrollAnimation animateIn='fadeInLeft animate__fadeInLeft'>
          <Title title='Sobre mí'></Title>
          <AboutMe aboutme='Marketiniana digital reconvertida a frontend UX developer y con muchas ganas de continuar aprendiendo. Mis conocimientos en marketing, desarrollo y experiencia de usuario me aportan una visión completa del proceso de diseño de productos digitales. Me encantaría entrar a formar parte de una empresa en la que poder aplicar todos mis conocimientos y, al mismo tiempo, que me permita crecer y desarrollarme como frontend developer.'></AboutMe>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeInRight animate__fadeInRight' className='right-title'>
          <Title title='Conocimientos'></Title>
        </ScrollAnimation>
        <Knowledge></Knowledge>
        <ScrollAnimation animateIn='fadeInLeft animate__fadeInLeft'>
          <Title title='Proyectos'></Title>
          <ProjectsMenu changeProjects={setIsFrontVisible}></ProjectsMenu>
        </ScrollAnimation>
        {isFrontVisible ? <FrontProjects projects={projects} frontendContainer='frontend-container'></FrontProjects> : <UXProjects></UXProjects>}
        <ScrollAnimation animateIn='fadeInRight animate__fadeInRight' className='right-title'>
          <Title title='Contacto'></Title>
        </ScrollAnimation>
        <Contact></Contact>
      </main>
      <Footer copy='© Magarita Berjón' year='2020'></Footer>
    </div>
  );
}

export default App;
