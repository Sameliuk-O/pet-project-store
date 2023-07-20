import React, { PropsWithChildren } from 'react';

import { configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';

import { authApi } from '../services/authServices';
import { productServices } from '../services/productServices';
import { userServices } from '../services/usersServices';
import loginReducer from '../store/authSlice';
import productSlice from '../store/productSlice';
// As a basic setup, import your same slice reducers
import { AppStore, RootState } from '../store/store';
import userReducer from '../store/userSlice';

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      preloadedState,
      reducer: {
        auth: loginReducer,
        currentUser: userReducer,
        productCart: productSlice,
        [authApi.reducerPath]: authApi.reducer,
        [productServices.reducerPath]: productServices.reducer,
        [userServices.reducerPath]: userServices.reducer,
      },
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<object>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
