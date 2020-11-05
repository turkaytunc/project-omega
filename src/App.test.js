import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello Etiya link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello Etiya/i);
  expect(linkElement).toBeInTheDocument();
});
