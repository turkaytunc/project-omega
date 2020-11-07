import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders without crash', () => {
  render(<App />);
});

test('renders Leanne link', () => {
  const { container } = render(<App />);
  expect(container.textContent).toMatch(/Get Posts/gi);
});
