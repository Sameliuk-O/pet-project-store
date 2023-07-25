import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Product from './Product';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useAddProductCartMutation, useGetProductCardQuery } from '../../services/productServices';
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
  date: '2023-07-24',
  productInfo: {
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    price: 109.95,
    title: 'Mens Cotton Jacket',
  },
  products: {
    productId: 3,
    quantity: 1,
  },
  userId: 1,
};

const mockProductCardArray = {
  product: [
    {
      date: '2023-07-24',
      productInfo: {
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        price: 109.95,
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

const mockCart = [
  {
    __v: 0,
    date: '2023-07-24',
    products: { productId: 3, quantity: 1 },
    userId: 1,
  },
];

const requestAddProductCartMock = () => {
  return { ...mockCart };
};

const isLoadingMock = false;
const isErrorMock = false;
jest.mock('services/productServices.ts', () => ({
  useAddProductCartMutation: jest.fn(),
  useGetProductCardQuery: jest.fn(),
}));

jest.mock('hooks', () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn(),
  useLastPath: jest.fn().mockReturnValue('string'),
}));
beforeEach(() => {
  const useGetProductCardQueryMock = useGetProductCardQuery as jest.Mock;
  useGetProductCardQueryMock.mockReturnValue({
    data: mockProduct,
    isError: false,
    isLoading: false,
  });

  const useAddProductCartMutationMock = useAddProductCartMutation as jest.Mock;
  useAddProductCartMutationMock.mockReturnValue([
    requestAddProductCartMock,
    { isErrorMock, isLoadingMock },
  ]);

  const useAppSelectorUserIdMock = useAppSelector as jest.Mock;
  useAppSelectorUserIdMock.mockReturnValue(1);

  const useAppSelectorProductInCartMock = useAppSelector as jest.Mock;
  useAppSelectorProductInCartMock.mockReturnValue(mockProductCardArray);

  renderWithProviders(<Product />, { wrapper: BrowserRouter });
});

describe('Product', () => {
  const useDispatchMocked = useAppDispatch as jest.Mock;
  useDispatchMocked.mockReturnValue(mockProductCard);

  test('in display', () => {
    screen.debug();
    const title = screen.getByText('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops');
    const info = screen.getByText(
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday'
    );
    const plusButton = screen.getByText('+');
    const priceButton = screen.getByRole('button', { name: 'Buy now $109.95' });
    const imageProduct = screen.getByTestId('testIdImage');

    expect(title).toBeInTheDocument();
    expect(info).toBeInTheDocument();
    expect(plusButton).toBeInTheDocument();
    expect(priceButton).toBeInTheDocument();
    expect(imageProduct).toHaveAttribute(
      'src',
      'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
    );
  });
});
