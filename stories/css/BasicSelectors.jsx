import React from 'react';
import Highlight from 'react-highlight';
import '../../node_modules/highlight.js/styles/atelier-cave-light.css';

const BasicSelectors = () => (
  <div>
    <ul>
      <li id="myID" className="myClass">ID Selector</li>
      <li className="myClass">Class Selector</li>
      <li>No selector</li>
    </ul>
    <Highlight className="html">
      {
        `
          <li id='myID' className='myClass'>ID Selector</li>
          <li className='myClass'>Class Selector</li>
          <li>No selector</li>
        `
      }
    </Highlight>
  </div>
);

export default BasicSelectors;
