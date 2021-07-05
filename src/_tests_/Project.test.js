import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Project } from '../components';

const project = {
  name: 'Hamburg Tower',
  location: 'Hamburg' 
};

test('render a Project component with children', () => {
  render(<BrowserRouter>
          <Project project={project} />
        </BrowserRouter>);

  const link = screen.getByRole('link');
  const heading = screen.getAllByRole('heading');

  expect(link).toBeInTheDocument();
  expect(heading).toHaveLength(2);
});

test('render a Project with a proper content', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Project project={project} />
    </BrowserRouter>
  );

  expect(getByText(project.name)).toBeDefined();
  expect(getByText(project.location)).toBeDefined();
});
