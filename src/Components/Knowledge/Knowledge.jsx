import React from 'react';
import './Knowlege.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

function Knowledge(props) {
  const knowledges = ['Inglés', 'UX', 'HTML', 'CSS', 'SASS', 'JS', 'React', 'SCRUM', 'GIT', 'Sketch', 'Invision'];

  return (
    <div className='knowledge-container'>
      {knowledges.map((knowledge, i) => (
        <ScrollAnimation animateIn='animate__flipInY' animateOnce={true} className='knowledge-circle' key={i} style={props.knowlegeAnimation}>
          <p>{knowledge}</p>
        </ScrollAnimation>
      ))}
    </div>
  );
}

export default Knowledge;
