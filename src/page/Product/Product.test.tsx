import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import product from './Product';
import Product from './Product';
import { useAppDispatch } from '../../hooks';
import { useGetProductCardQuery } from '../../services/productServices';
import { renderWithProviders } from '../../utils/test-utils';

const mockProduct = {
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
};

const mockProductCard = {
  product: [
    {
      date: '2023-07-24',
      productInfo: {
        image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
        price: 55.99,
        title: 'Mens Cotton Jacket',
      },
      products: {
        productId: 3,
        quantity: 1,
      },
      userId: 1,
    },
  ],
};

jest.mock('services/productServices.ts', () => ({
  useGetProductCardQuery: jest.fn(),
}));

jest.mock('hooks', () => ({
  useAppDispatch: jest.fn(),
}));

jest.mock('hooks', () => ({
  useLastPath: jest.fn().mockReturnValue('string'),
}));
beforeEach(() => {
  const useGetProductCardQueryMock = useGetProductCardQuery as jest.Mock;
  useGetProductCardQueryMock.mockReturnValueOnce({
    data: mockProduct,
  });
  renderWithProviders(<Product />, { wrapper: BrowserRouter });
});

describe('Product', () => {
  const useDispatchMocked = useAppDispatch as jest.Mock;
  useDispatchMocked.mockReturnValue(jest.fn());
  screen.debug();
  test('in display', async () => {
    const title = screen.getByText('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops');
    await expect(title).toBeInTheDocument();
  });
});
