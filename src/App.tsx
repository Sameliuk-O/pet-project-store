import React from 'react';

import './App.css';
import { createStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import RoutesComponent from './routes/RoutesComponent';
import rootReducer from './store/rootReducer';

const store = createStore(rootReducer);
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
