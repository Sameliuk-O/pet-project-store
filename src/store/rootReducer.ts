import { combineReducers } from '@reduxjs/toolkit';

import loginReducer from './loginSlice';
import { loginApi } from '../services/LoginServices';

const rootReducer = combineReducers({
  login: loginReducer,
  [loginApi.reducerPath]: loginApi.reducer,
});

export default rootReducer;
