import { createSlice } from '@reduxjs/toolkit';

interface RegistrationState {
  address: {
    city: string;
    geolocation: {
      lat: string;
      long: string;
    };
    number: number;
    street: string;
    zipcode: string;
  };
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  password: string;
  phone: string;
  userName: string;
}

const initialState: RegistrationState = {
  address: {
    city: '',
    geolocation: {
      lat: '',
      long: '',
    },
    number: 0,
    street: '',
    zipcode: '',
  },
  id: 0,
  name: {
    firstName: '',
    lastName: '',
  },
  password: '',
  phone: '',
  userName: '',
};

const registrationSlice = createSlice({
  initialState,
  name: 'registrationUser',
  reducers: {
    setRegistrationUser: (state, action) => {
      state.userName = action.payload.userName;
    },
  },
});

export const { setRegistrationUser } = registrationSlice.actions;
export default registrationSlice.reducer;
