import './App.scss';
import Menu from '../Components/Menu/Menu.jsx';
import Poster from '../Components/Poster/Poster.jsx';
import Title from '../Components/Title/Title.jsx';
import { useSpring, animated } from 'react-spring';

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

  return (
    <div className='App'>
      <Menu></Menu>
      <Poster FotoAnimation={FotoAnimation} H1Animation={H1Animation} H2Animation={H2Animation} name='Margarita Berjón' description='Frontend UX developer'></Poster>
      <main className='main-container'>
        <animated.div style={TitleLeftAnimation}>
          <Title title='Sobre mí' left='left'></Title>
        </animated.div>
        <animated.div style={TitleRightAnimation} className='right-title'>
          <Title title='Conocimientos' right='right'></Title>
        </animated.div>
      </main>
    </div>
  );
}

export default App;
