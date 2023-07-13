import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userServices } from 'services/usersServices';

import loginReducer from './authSlice';
import productSlice from './productSlice';
import userReducer from './userSlice';
// import { allCategoryApi } from '../services/AllCategoryServices';
import { authApi } from '../services/authServices';
import { productServices } from '../services/productServices';

const rootReducer = combineReducers({
  auth: loginReducer,
  currentUser: userReducer,
  productCart: productSlice,
  [authApi.reducerPath]: authApi.reducer,
  // [allCategoryApi.reducerPath]: allCategoryApi.reducer,
  [productServices.reducerPath]: productServices.reducer,
  [userServices.reducerPath]: userServices.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer;
