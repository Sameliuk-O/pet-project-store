import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import { ProductCard } from './index';
import { renderWithProviders } from '../../utils/test-utils';

const productCardMock = {
  category: 'electronics',
  description:
    'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system',
  id: 9,
  image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
  price: '64',
  rating: { count: 203, rate: '3.3' },
  title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0 ',
};

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

beforeEach(() => {
  renderWithProviders(
    <ProductCard
      category={productCardMock.category}
      description={productCardMock.description}
      id={productCardMock.id}
      image={productCardMock.image}
      key={0}
      price={productCardMock.price}
      rating={productCardMock.rating}
      title={productCardMock.title}
    />,
    {
      wrapper: BrowserRouter,
    }
  );
});

describe('Product Card', () => {
  test('in display', () => {
    const productImage = screen.getByRole('img');
    const price = screen.getByText('64$');
    const title = screen.getByText(/WD 2TB Elements Port/i);
    const text = title.textContent;

    expect(productImage).toHaveAttribute(
      'src',
      'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg'
    );
    expect(price).toBeInTheDocument();
    expect(text).toHaveLength(23);
  });
  test('on click in product card', async () => {
    const list = screen.getByTestId('listId');
    expect(list).toBeInTheDocument();
    await userEvent.click(list);
    await waitFor(() => {
      expect(mockedUsedNavigate).toHaveBeenCalled();
      mockedUsedNavigate.mockRestore();
    });
  });
});
