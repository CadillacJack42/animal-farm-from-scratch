import React from 'react';
import './Animal.css';


export default function Animal(props) {
  return (
    <div style={{ top:props.top, left:props.left }} className='position-of'>
      <img src={`./animals/${props.type}.svg`} className='image-size'></img>
      <p>{props.name}</p>
      <p>{props.says}</p>
    </div>
  );
}
