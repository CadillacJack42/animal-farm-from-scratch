import React from 'react';
import AnimalList from './AnimalList';
import './Main.css';

import background from './background.png';

export default function Main(props) {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      <AnimalList animals={props.animalsArr} />
    </main>);
}
