import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the gelato brand heading', () => {
  render(<App />);
  const heading = screen.getByText(/la bella gelato/i);
  expect(heading).toBeInTheDocument();
});
