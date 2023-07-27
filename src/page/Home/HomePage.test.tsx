import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import HomePage from './HomePage';
import { useGetAllProductQuery } from '../../services/productServices';
import { renderWithProviders } from '../../utils/test-utils';

jest.mock('services/productServices.ts', () => ({
  useGetAllProductQuery: jest.fn(),
}));

const productsMock = [
  {
    category: "men's clothing",
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    id: 1,
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    price: 109.95,
    rating: {
      count: 120,
      rate: 3.9,
    },
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  },
];

describe('Home page', () => {
  const useGetAllProductQueryMock = useGetAllProductQuery as jest.Mock;
  useGetAllProductQueryMock.mockReturnValue({
    data: productsMock,
    isError: false,
    isLoading: false,
  });

  test('in screen product', () => {
    renderWithProviders(<HomePage />, {
      wrapper: BrowserRouter,
    });
    const title = screen.getByText('Fjallraven - Foldsac...');
    const text = title.textContent;
    const productImage = screen.getByRole('img');
    const price = screen.getByText('109.95$');
    expect(text).toHaveLength(23);
    expect(price).toBeInTheDocument();
    expect(productImage).toHaveAttribute(
      'src',
      'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
    );
  });

  test('in screen loading', () => {
    useGetAllProductQueryMock.mockReturnValueOnce({
      data: [],
      isError: false,
      isLoading: true,
    });
    renderWithProviders(<HomePage />, {
      wrapper: BrowserRouter,
    });

    const loading = screen.getByTestId('loadingTestId');
    expect(loading).toBeInTheDocument();
  });
});
