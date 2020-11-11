import React from 'react';
import './Title.scss';

// {props.left ? 'title-container' : 'title-container' }

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
