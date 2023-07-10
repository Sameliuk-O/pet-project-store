import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

import persistedReducer from './rootReducer';
import { allCategoryApi } from '../services/AllCategoryServices';
import { loginApi } from '../services/LoginServices';
import { productApi } from '../services/ProductServices';

const store = configureStore({
  middleware: (getDefaultMiddleware) => {
    const customMiddleware = [
      loginApi.middleware,
      productApi.middleware,
      allCategoryApi.middleware,
    ];

    const middlewareConfig = {
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    };

    return getDefaultMiddleware(middlewareConfig).concat(customMiddleware);
  },
  reducer: persistedReducer,
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
