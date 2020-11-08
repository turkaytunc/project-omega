import { render } from '@testing-library/react';
import App from '../App';

test('renders without crash', () => {
  render(<App />);
});

test('renders save button', () => {
  const { container } = render(<App />);
  expect(container.textContent).toMatch(/Save/gi);
});
