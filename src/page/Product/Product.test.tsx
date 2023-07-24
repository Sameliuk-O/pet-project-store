import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Product from './Product';
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
beforeEach(() => {
  renderWithProviders(<Product />, { wrapper: BrowserRouter });
});

jest.mock('services/productServices.ts', () => ({
  useGetProductCardQuery: jest.fn(),
}));

describe('Product', () => {
  const useGetProductCardQueryMock = useGetProductCardQuery as jest.Mock;
  useGetProductCardQueryMock.mockReturnValue({
    data: mockProduct,
    refetch: jest.fn(),
  });
  test('in display', async () => {
    const title = screen.getByText('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops');
    await expect(title).toBeInTheDocument();
  });
});
