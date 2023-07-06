// import { setLoginUser } from '../../../store/loginSlice';
import { AppDispatch } from '../../../store/store';
import { ILoginUser } from '../types';

const loginUserRequest = async (dispatch: AppDispatch, data: ILoginUser) => {
  try {
    console.log('data request', data);
    const response = await fetch('https://fakestoreapi.com/auth/login', {
      body: JSON.stringify({
        password: 'mor_2314',
        username: '83r5^_',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error('Error:', error);
  }
};

export default loginUserRequest;
