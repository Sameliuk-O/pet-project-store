import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import loginReducer from './loginSlice';
import { allCategoryApi } from '../services/AllCategoryServices';
import { loginApi } from '../services/LoginServices';
import { productSameCategory } from '../services/ProductSameCategory';
import { productCard } from '../services/ProductServices';
import { productsApi } from '../services/ProductsServices';

const rootReducer = combineReducers({
  login: loginReducer,
  [loginApi.reducerPath]: loginApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [allCategoryApi.reducerPath]: allCategoryApi.reducer,
  [productSameCategory.reducerPath]: productSameCategory.reducer,
  [productCard.reducerPath]: productCard.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer;
