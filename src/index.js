import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent.js';
import SimplerComponent from './components/SimplerComponent.js';

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={console.log("I am loving Code!")} />
  </div>,
  document.getElementById('root')
);

