import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

import persistedReducer from './rootReducer';
import { addProductCart } from '../services/AddProductCart';
import { allCategoryApi } from '../services/AllCategoryServices';
import { getAllUser } from '../services/GetAllUser';
import { userCart } from '../services/GetUserCart';
import { loginApi } from '../services/LoginServices';
import { productSameCategory } from '../services/ProductSameCategory';
import { productCard } from '../services/ProductServices';
import { productsApi } from '../services/ProductsServices';

const store = configureStore({
  middleware: (getDefaultMiddleware) => {
    const customMiddleware = [
      loginApi.middleware,
      productsApi.middleware,
      allCategoryApi.middleware,
      productSameCategory.middleware,
      productCard.middleware,
      addProductCart.middleware,
      getAllUser.middleware,
      userCart.middleware,
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
