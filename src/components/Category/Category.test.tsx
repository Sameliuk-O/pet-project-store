import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Category } from './index';
import { server } from '../../mocks/server';
import { renderWithProviders } from '../../utils/test-utils';

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

const categoryApi = ['electronics', 'jewelery', "men's clothing", "women's clothing"];

describe('Category', () => {
  server.use(
    rest.get(`/products/categories`, (req, res, ctx) => {
      return res(ctx.json(categoryApi));
    })
  );

  const setup = async () => {
    const utils = renderWithProviders(
      <BrowserRouter>
        <Routes>
          <Route element={<Category />} path="*"></Route>
        </Routes>
      </BrowserRouter>
    );
    return {
      ...utils,
    };
  };

  test('Category in display', async () => {
    await setup();
    screen.debug();
    await waitFor(() => {
      expect(screen.getByText('Electronics') as HTMLLinkElement).toBeInTheDocument();
      expect(screen.getByText('Jewelery') as HTMLLinkElement).toBeInTheDocument();
      expect(screen.getByText("Men's clothing") as HTMLLinkElement).toBeInTheDocument();
      expect(screen.getByText("Women's clothing") as HTMLLinkElement).toBeInTheDocument();
    });
  });
  test('Category link', async () => {
    await waitFor(() => {
      setup();
      const categoryName = screen.getByText('Electronics') as HTMLLinkElement;
      userEvent.click(categoryName);
      expect(window.location.href).toBe('http://localhost/store/category/electronics');
    });
  });
});
