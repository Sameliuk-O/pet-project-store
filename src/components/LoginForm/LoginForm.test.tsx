import { screen } from '@testing-library/react';
import { rest } from 'msw';

import { renderWithProviders } from 'utils/test-utils';

import { LoginForm } from './index';
import { server } from '../../mocks/server';

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

const apiData = {
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXIiOiJqb2huZCIsImlhdCI6MTY4OTkyMDIwNH0.ypJ3NLqL0Tph9WFPYU7tYFChmwHg8DiQW-4yQCinjT0',
};

const apiUsers = [
  {
    address: {
      city: 'kilcoole',
      geolocation: {
        lat: '-37.3159',
        long: '81.1496',
      },
      number: 7682,
      street: 'new road',
      zipcode: '12926-3874',
    },
    email: 'john@gmail.com',
    id: 1,
    name: {
      firstname: 'john',
      lastname: 'doe',
    },
    password: 'm38rmF$',
    phone: '1-570-236-7033',
    username: 'johnd',
  },
];

describe('Login page', () => {
  server.use(
    rest.post(`/login`, (req, res, ctx) => {
      return res(ctx.json(apiData));
    }),
    rest.get(`/users`, (req, res, ctx) => {
      return res(ctx.json(apiUsers));
    })
  );
  test('Text login in page', async () => {
    renderWithProviders(<LoginForm />);
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });
});
