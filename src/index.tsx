import React from 'react';
import ReactDOM from 'react-dom';

import { createServices } from 'src/services'
import { ServiceContext } from 'src/hooks/useServices'
import { App } from './App';

const services = createServices()

ReactDOM.render(
  <ServiceContext.Provider value={services}>
      <App />
  </ServiceContext.Provider>,
  document.getElementById('root')
)
