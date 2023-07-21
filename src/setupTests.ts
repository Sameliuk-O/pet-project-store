import '@testing-library/jest-dom';
import { server } from './mocks/server';
import { authApi } from './services/authServices';
import { userServices } from './services/usersServices';
import setupStore from './store/store';

const store = setupStore({});

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
  store.dispatch(authApi.util.resetApiState());
  store.dispatch(userServices.util.resetApiState());
});

afterAll(() => server.close());
