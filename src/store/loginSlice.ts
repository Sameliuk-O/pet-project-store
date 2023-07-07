import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
  auth: boolean;
  token: string;
  username: string;
}

const initialState: LoginState = {
  auth: false,
  token: '',
  username: '',
};

const loginSlice = createSlice({
  initialState,
  name: 'login',
  reducers: {
    setLoginUser: (state, action: PayloadAction<LoginState>) => {
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.auth = action.payload.auth;
    },
  },
});

export const { setLoginUser } = loginSlice.actions;
export default loginSlice.reducer;
