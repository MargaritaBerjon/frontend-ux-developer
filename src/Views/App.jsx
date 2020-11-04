import React from 'react';
import { useSpring, animated } from 'react-spring';
import './App.scss';
import Menu from '../Components/Menu/Menu.jsx';
import Poster from '../Components/Poster/Poster.jsx';
import Title from '../Components/Title/Title.jsx';
import AboutMe from '../Components/AboutMe/AboutMe.jsx';
import Knowledge from '../Components/Knowledge/Knowledge.jsx';
import Projects from '../Components/Projects/Projects.jsx';
import FrontendCard from '../Components/Projects/FrontendCard/FrontEndCard.jsx';

function App() {
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
          <Title title='Projectos' left='left'></Title>
        </animated.div>
        <Projects></Projects>
        <FrontendCard></FrontendCard>
      </main>
    </div>
  );
}

export default App;
