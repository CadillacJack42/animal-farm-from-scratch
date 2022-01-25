import React from 'react';
import './Animal.css';
import './Header.css';

export default function Header(props) {
  return (<header className='head'>
    <h1>{props.greeting}</h1>
  </header>);
}
