import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import User from './User';
import { renderWithProviders } from '../../utils/test-utils';

jest.mock('hooks', () => ({
  useAppSelector: jest.fn().mockReturnValue({
    address: {
      city: 'kilcoole',
      geolocation: {
        lat: '-37.3159',
        long: '81.1496',
      },
      number: 3,
      street: '7835 new road',
      zipcode: '12926-3874',
    },
    email: 'John@gmail.com',
    id: 1,
    name: {
      firstname: 'John',
      lastname: 'Doe',
    },
    password: 'm38rmF$',
    phone: '1-570-236-7033',
    username: 'johnd',
  }),
}));

beforeEach(() => {
  renderWithProviders(<User />, { wrapper: BrowserRouter });
});
describe('User', () => {
  test('screen', () => {
    const userName = screen.queryAllByText(/john doe/i);
    const email = screen.queryAllByText(/john@gmail.com/i) as HTMLElement[];
    const name = screen.getByText(/^\s*johnd\s*$/);
    const phone = screen.getByText(/1-570-236-7033/i);
    const address = screen.getByText(/kilcoole/i);
    const street = screen.getByText(/7835 new road/i);
    const number = screen.getByText(/^3$/d);
    const zipcode = screen.getByText(/12926-3874/i);

    const elementsEmail = 2;
    const elementsName = 1;
    expect(userName).toHaveLength(elementsName);
    expect(email).toHaveLength(elementsEmail);
    expect(name).toBeInTheDocument();
    expect(phone).toBeInTheDocument();
    expect(address).toBeInTheDocument();
    expect(street).toBeInTheDocument();
    expect(number).toBeInTheDocument();
    expect(zipcode).toBeInTheDocument();
  });

  test('first later in avatar', () => {
    const userFirstNameLater = screen.queryByText(/jd/i);
    expect(userFirstNameLater).toBeInTheDocument();
  });
});
