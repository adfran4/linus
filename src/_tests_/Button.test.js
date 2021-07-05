import { fireEvent, render, screen } from '@testing-library/react';

import { Button } from '../components';

test('render a Button component with a child', () => {
  render(<Button>Click</Button>);
  const button = screen.getByText(/Click/);

  expect(button).toBeInTheDocument();
});

test('a click on the button', () => {
  const handleClick = jest.fn()
  render(<Button onClick={handleClick}>Click</Button>);

  fireEvent.click(screen.getByRole('button'));

  expect(handleClick).toHaveBeenCalled();
});
