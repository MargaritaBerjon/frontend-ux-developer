import React from 'react';
import './Title.scss';

function Title(props) {
  return (
    <div className='title-container'>
      <h1>
        {props.title}
        <hr></hr>
      </h1>
    </div>
  );
}

export default Title;
