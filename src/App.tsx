import React from 'react';

import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import RoutesComponent from './routes/RoutesComponent';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RoutesComponent />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
