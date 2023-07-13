import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userCart } from 'services/GetUserCart';

import loginReducer from './loginSlice';
import productSlice from './productSlice';
import userReducer from './userSlice';
import { addProductCart } from '../services/AddProductCart';
import { allCategoryApi } from '../services/AllCategoryServices';
import { getAllUser } from '../services/GetAllUser';
import { loginApi } from '../services/LoginServices';
import { productSameCategory } from '../services/ProductSameCategory';
import { productCard } from '../services/ProductServices';
import { productsApi } from '../services/ProductsServices';

const rootReducer = combineReducers({
  currentUser: userReducer,
  login: loginReducer,
  productCart: productSlice,
  [loginApi.reducerPath]: loginApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [allCategoryApi.reducerPath]: allCategoryApi.reducer,
  [productSameCategory.reducerPath]: productSameCategory.reducer,
  [productCard.reducerPath]: productCard.reducer,
  [addProductCart.reducerPath]: addProductCart.reducer,
  [getAllUser.reducerPath]: getAllUser.reducer,
  [userCart.reducerPath]: userCart.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer;
