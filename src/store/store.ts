import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import rootReducer from './rootReducer';
import { loginApi } from '../services/LoginServices';

const store = configureStore({
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([loginApi.middleware]);
  },
  reducer: rootReducer,
});

setupListeners(store.dispatch);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
