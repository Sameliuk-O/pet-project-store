import { combineReducers } from '@reduxjs/toolkit';

import loginReducer from './loginSlice';
import registrationReducer from './registrationSlice';
import { allCategoryApi } from '../services/AllCategoryServices';
import { loginApi } from '../services/LoginServices';
import { productApi } from '../services/ProductServices';

const rootReducer = combineReducers({
  login: loginReducer,
  registration: registrationReducer,
  [loginApi.reducerPath]: loginApi.reducer,
  [productApi.reducerPath]: productApi.reducer,
  [allCategoryApi.reducerPath]: allCategoryApi.reducer,
});

export default rootReducer;
