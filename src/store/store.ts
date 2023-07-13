import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

import persistedReducer from './rootReducer';
// import { addProductCart } from '../services/AddProductCart';
// import { allCategoryApi } from '../services/AllCategoryServices';
import { authApi } from '../services/authServices';
import { productServices } from '../services/productServices';
import { userServices } from '../services/usersServices';
// import { productSameCategory } from '../services/ProductSameCategory';
// import { productsApi } from '../services/ProductsServices';

const store = configureStore({
  middleware: (getDefaultMiddleware) => {
    const customMiddleware = [
      authApi.middleware,
      // productsApi.middleware,
      // allCategoryApi.middleware,
      // productSameCategory.middleware,
      productServices.middleware,
      // addProductCart.middleware,
      // getAllUser.middleware,
      userServices.middleware,
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
