import React from 'react';
import './footer.css';

export default function Footer(props) {
  return <h3 className='foot'>&copy; {props.email} 2021-2022</h3>;
}
