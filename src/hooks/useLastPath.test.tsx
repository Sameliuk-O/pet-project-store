import { useLocation } from 'react-router-dom';

import { useLastPath } from './useLastPath';

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn(),
}));

beforeEach(() => {
  const mockLocation = {
    pathname: '/store/category/electronics',
  };

  const useLocationMock = useLocation as jest.Mock;

  useLocationMock.mockReturnValue(mockLocation);
});

describe('use last path', () => {
  test('use', () => {
    const lastPath = useLastPath();
    expect(lastPath).toBe('electronics');
  });
});
