import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { ShoppingBox } from './index';
import { renderWithProviders } from '../../utils/test-utils';

beforeEach(() => {
  renderWithProviders(<ShoppingBox counter={1} />, {
    wrapper: BrowserRouter,
  });
});

describe('Shopping box', () => {
  test('in display', () => {
    const counter = screen.getByText('1');
    const imageBox = screen.getByRole('img');
    screen.debug();
    expect(counter).toBeInTheDocument();
    expect(imageBox).toBeInTheDocument();
  });

  // test('on click open popup', () => {
  //   const openPopup = screen.getByTestId('openPopup');
  //   fireEvent.click(openPopup);
  // });
});
