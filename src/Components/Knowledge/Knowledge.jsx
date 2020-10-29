import React from 'react';
import './Knowlege.scss';

function Knowledge() {
  const knowledges = ['Inglés', 'HTML', 'CSS', 'SASS', 'JS', 'React', 'SCRUM', 'GIT', 'Sketch', 'Invision'];

  return (
    <div className='knowledge-container'>
      {knowledges.map((knowledge, i) => (
        <div className='knowledge-circle' key={i}>
          <p>{knowledge}</p>
        </div>
      ))}
    </div>
  );
}

export default Knowledge;
