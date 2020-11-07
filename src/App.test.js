import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Leanne link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Leanne Graham/i);
  expect(linkElement).toBeInTheDocument();
});
