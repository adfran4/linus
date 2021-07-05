import React from 'react';
import { render } from '@testing-library/react';
import { Loader } from '../components';

test('render a Loader component', () => {
  const { getByText } = render(<Loader isActive />);

  expect(getByText('Sending...')).toBeDefined();
});



