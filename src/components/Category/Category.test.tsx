import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import { useGetAllCategoryQuery } from 'services/productServices';
import { renderWithProviders } from 'utils/test-utils';

import { Category } from './index';
import { server } from '../../mocks/server';
const categoryApi = ['electronics', 'jewelery', "men's clothing", "women's clothing"];

beforeEach(() => {
  renderWithProviders(<Category />, { wrapper: BrowserRouter });
});
beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});
jest.mock('hooks', () => ({
  useLastPath: jest.fn().mockReturnValue('string'),
}));

jest.mock('services/productServices.ts', () => ({
  useGetAllCategoryQuery: jest.fn(),
}));

describe('Category', () => {
  const useGetAllCategoryQueryMock = useGetAllCategoryQuery as jest.Mock;
  useGetAllCategoryQueryMock.mockReturnValue({ data: categoryApi });
  test('Category in display', async () => {
    screen.debug();
    await waitFor(() => {
      screen.debug();
      expect(screen.getByText('Electronics') as HTMLLinkElement).toBeInTheDocument();
      expect(screen.getByText('Jewelery') as HTMLLinkElement).toBeInTheDocument();
      expect(screen.getByText("Men's clothing") as HTMLLinkElement).toBeInTheDocument();
      expect(screen.getByText("Women's clothing") as HTMLLinkElement).toBeInTheDocument();
    });
  });
  test('Category link', async () => {
    await waitFor(() => {
      const categoryName = screen.getByText('Electronics') as HTMLLinkElement;
      userEvent.click(categoryName);
      expect(window.location.href).toBe('http://localhost/store/category/electronics');
    });
  });
});
