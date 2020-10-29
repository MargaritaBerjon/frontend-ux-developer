import React from 'react';
import './Knowlege.scss';
import { a } from 'react-spring';

function Knowledge(props) {
  const knowledges = ['Inglés', 'UX', 'HTML', 'CSS', 'SASS', 'JS', 'React', 'SCRUM', 'GIT', 'Sketch', 'Invision'];

  return (
    <div className='knowledge-container'>
      {knowledges.map((knowledge, i) => (
        <a.div className='knowledge-circle' key={i} style={props.knowlegeAnimation}>
          <p>{knowledge}</p>
        </a.div>
      ))}
    </div>
  );
}

export default Knowledge;
