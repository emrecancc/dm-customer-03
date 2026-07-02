import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../Dashboard';

test('Dashboard renders correctly', () => {
  jest.useFakeTimers('modern');
  jest.setSystemTime(new Date('2024-01-14'));
  const { asFragment } = render(<Dashboard />);
  expect(asFragment()).toMatchSnapshot();
});