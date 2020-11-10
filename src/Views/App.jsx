import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
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
import ScrollAnimation from 'react-animate-on-scroll';

function App() {
  const [projects, setProjects] = useState([]);
  const [isFrontVisible, setIsFrontVisible] = useState([]);

  useEffect(() => {
    getProjects().then((projects) => {
      setProjects(projects);
    });
  }, []);

  //Poster Animations
  const FotoAnimation = useSpring({
    from: { transform: 'translateY(-500px)', opacity: '20%' },
    to: { transform: 'translateY(0px)', opacity: '100%' },
    config: { mass: 1, tension: 170, friction: 26, clamp: false, precision: 0.01, velocity: -1, duration: 2000 },
  });

  const H1Animation = useSpring({
    from: { transform: 'translateX(-500px)', opacity: '20%' },
    to: { transform: 'translateX(0px)', opacity: '100%' },
    config: { mass: 1, tension: 170, friction: 26, clamp: false, precision: 0.01, velocity: -1, duration: 2000 },
  });

  const H2Animation = useSpring({
    from: { transform: 'translateX(500px)', opacity: '20%' },
    to: { transform: 'translateX(0px)', opacity: '100%' },
    config: { mass: 1, tension: 170, friction: 26, clamp: false, precision: 0.01, velocity: -1, duration: 2000 },
  });

  //Title animations
  const TitleLeftAnimation = useSpring({
    from: { transform: 'translateX(-500px)', opacity: '20%' },
    to: { transform: 'translateX(0px)', opacity: '100%' },
    config: { mass: 1, tension: 170, friction: 26, clamp: false, precision: 0.01, velocity: -1, duration: 2000 },
    delay: 2015,
  });

  const TitleRightAnimation = useSpring({
    from: { transform: 'translateX(500px)', opacity: '20%' },
    to: { transform: 'translateX(0px)', opacity: '100%' },
    config: { mass: 1, tension: 170, friction: 26, clamp: false, precision: 0.01, velocity: -1, duration: 2000 },
    delay: 2015,
  });

  //knowlege Animation
  const knowlegeAnimation = useSpring({
    from: { transform: 'rotateY(1800deg)', opacity: '0%' },
    to: { transform: 'rotateY(0deg)', opacity: '100%' },
    config: { mass: 1, tension: 170, friction: 26, clamp: false, precision: 0.01, velocity: -1, duration: 2000 },
    delay: 3030,
  });

  return (
    <div className='App'>
      <Menu></Menu>
      <Poster FotoAnimation={FotoAnimation} H1Animation={H1Animation} H2Animation={H2Animation} name='Margarita Berjón' description='Frontend UX developer'></Poster>
      <main className='main-container'>
        <animated.div style={TitleLeftAnimation}>
          <Title title='Sobre mí' left='left'></Title>
        </animated.div>
        <AboutMe aboutme='Marketiniana digital reconvertida a frontend UX developer y con muchas ganas de continuar aprendiendo. Mis conocimientos en marketing, desarrollo y experiencia de usuario me aportan una visión completa del proceso de diseño de productos digitales. Me encantaría entrar a formar parte de una empresa en la que poder aplicar todos mis conocimientos y, al mismo tiempo, que me permita crecer y desarrollarme como frontend developer.'></AboutMe>
        <animated.div style={TitleRightAnimation} className='right-title'>
          <Title title='Conocimientos' right='right'></Title>
        </animated.div>
        <Knowledge knowlegeAnimation={knowlegeAnimation}></Knowledge>
        <animated.div style={TitleLeftAnimation}>
          <Title title='Proyectos' left='left'></Title>
          <ProjectsMenu changeProjects={setIsFrontVisible}></ProjectsMenu>
        </animated.div>
        {isFrontVisible ? <FrontProjects projects={projects} frontendContainer='frontend-container'></FrontProjects> : <UXProjects></UXProjects>}
      </main>
    </div>
  );
}

export default App;
