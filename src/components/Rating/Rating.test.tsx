import React from 'react';

import { render } from '@testing-library/react';

import Rating from './Rating';

test('check rating div', () => {
  const { container } = render(<Rating rating="1" />);
  const divElement = container.querySelector('div');
  expect(divElement).toBeInTheDocument();
});

test('check rating div 0', () => {
  const { container } = render(<Rating rating="0" />);
  const divElement = container.querySelector('div');
  expect(divElement).toBeInTheDocument();
});
