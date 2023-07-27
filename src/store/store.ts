import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

import rootReducer from './rootReducer';
import persistedReducer from './rootReducer';
import { authApi } from '../services/authServices';
import { productServices } from '../services/productServices';
import { userServices } from '../services/usersServices';

const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    middleware: (getDefaultMiddleware) => {
      const customMiddleware = [
        authApi.middleware,
        productServices.middleware,
        userServices.middleware,
      ];
      const middlewareConfig = {
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      };

      return getDefaultMiddleware(middlewareConfig).concat(customMiddleware);
    },
    preloadedState,
    reducer: persistedReducer,
  });
};

setupListeners(setupStore({}).dispatch);

export const persistor = persistStore(setupStore({}));
export default setupStore;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
