import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
  token: string;
  username: string;
}

const initialState: LoginState = {
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
    },
  },
});

export const { setLoginUser } = loginSlice.actions;
export default loginSlice.reducer;
