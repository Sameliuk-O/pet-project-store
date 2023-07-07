import { combineReducers } from '@reduxjs/toolkit';

import loginReducer from './loginSlice';
import registrationReducer from './registrationSlice';
import { loginApi } from '../services/LoginServices';

const rootReducer = combineReducers({
  login: loginReducer,
  registration: registrationReducer,
  [loginApi.reducerPath]: loginApi.reducer,
});

export default rootReducer;
