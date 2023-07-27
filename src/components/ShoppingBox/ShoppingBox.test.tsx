import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import { ShoppingBox } from './index';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { deleteProduct } from '../../store/productSlice';
import setupStore from '../../store/store';
import { renderWithProviders } from '../../utils/test-utils';

jest.mock('hooks', () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn(),
}));

const mockProductCard = {
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

beforeEach(() => {
  renderWithProviders(<ShoppingBox counter={1} />, {
    wrapper: BrowserRouter,
  });

  const useAppSelectorUserMock = useAppSelector as jest.Mock;
  useAppSelectorUserMock.mockReturnValue(mockProductCard);
});

describe('Shopping box', () => {
  const useDispatchMocked = useAppDispatch as jest.Mock;
  const mockDeleteProduct = jest.fn();
  useDispatchMocked.mockReturnValue(mockDeleteProduct);

  test('in display', () => {
    const counter = screen.getByText('1');
    const imageBox = screen.getByRole('img');
    expect(counter).toBeInTheDocument();
    expect(imageBox).toBeInTheDocument();
  });

  test('on click open popup', async () => {
    const store = setupStore();
    store.dispatch(deleteProduct(3));
    const openPopup = screen.getByTestId('openPopup');
    await userEvent.click(openPopup);
    const closePopup = screen.getByRole('button', { name: 'X' });
    expect(closePopup).toBeInTheDocument();
    const deleteButton = screen.getByRole('button', { name: 'Delete' });
    expect(deleteButton).toBeInTheDocument();
    await waitFor(() => {
      userEvent.click(deleteButton);
      userEvent.click(closePopup);
      expect(closePopup).not.toBeInTheDocument();
    });
  });
});
