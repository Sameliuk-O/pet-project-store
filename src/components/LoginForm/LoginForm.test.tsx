import { fireEvent, screen, waitFor } from '@testing-library/react';
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

  const setup = () => {
    const utils = renderWithProviders(<LoginForm />);
    const input = screen.getByPlaceholderText('username') as HTMLInputElement;
    const inputPassword = screen.getByPlaceholderText('password') as HTMLInputElement;
    const inputSubmit = screen.getAllByRole('button') as HTMLElement[];
    const form = screen.getByTestId('form');
    return {
      form,
      input,
      inputPassword,
      inputSubmit,
      ...utils,
    };
  };

  test('Text login in page', async () => {
    renderWithProviders(<LoginForm />);
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });

  test('Input username in screen', () => {
    renderWithProviders(<LoginForm />);
    const input = screen.getAllByPlaceholderText('username');
    waitFor(() => expect(input).toBeInTheDocument());
  });
  test('Input password in screen', () => {
    renderWithProviders(<LoginForm />);
    const input = screen.getAllByPlaceholderText('password');
    waitFor(() => expect(input).toBeInTheDocument());
  });

  test('submit form correct user name value', () => {
    const { input } = setup();

    fireEvent.change(input, { target: { value: apiUsers[0].username } });

    expect(input.value).toBe('johnd');
  });

  test('submit form correct user password value', () => {
    const { input } = setup();

    fireEvent.change(input, { target: { value: apiUsers[0].password } });

    expect(input.value).toBe('m38rmF$');
  });

  test('submit form incorrect user name and password value', async () => {
    const { input, form, inputPassword } = setup();

    fireEvent.change(input, { target: { value: '' } });
    fireEvent.change(inputPassword, { target: { value: '' } });
    fireEvent.submit(form);
    await waitFor(() => {
      expect(screen.getByText('This field has min length max 80.')).toBeInTheDocument();
      expect(screen.getByText('This field has min length 5 and max 12.')).toBeInTheDocument();
    });
  });

  test('submit form correct submit value user', () => {
    const { input } = setup();

    fireEvent.change(input, { target: { value: apiUsers[0].password } });

    expect(input.value).toBe('m38rmF$');
  });
});
