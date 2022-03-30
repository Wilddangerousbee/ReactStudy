import React from 'react';
import reactDOM from 'react-dom';

const element = (
  <div>
    <h1>My Todo List</h1>
    <ul>
      <li>Lern React</li>
      <li>Build Awesome App</li>
    </ul>
  </div>
);

reactDOM.render(element, 
  document.getElementById("root"));
