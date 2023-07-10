import React from 'react';

import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import RoutesComponent from './routes/RoutesComponent';
import store, { persistor } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <RoutesComponent />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
