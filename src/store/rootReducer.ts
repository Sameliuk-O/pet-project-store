import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import loginReducer from './loginSlice';
import { allCategoryApi } from '../services/AllCategoryServices';
import { loginApi } from '../services/LoginServices';
import { productSameCategory } from '../services/ProductSameCategory';
import { productApi } from '../services/ProductServices';

const rootReducer = combineReducers({
  login: loginReducer,
  [loginApi.reducerPath]: loginApi.reducer,
  [productApi.reducerPath]: productApi.reducer,
  [allCategoryApi.reducerPath]: allCategoryApi.reducer,
  [productSameCategory.reducerPath]: productSameCategory.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer;
