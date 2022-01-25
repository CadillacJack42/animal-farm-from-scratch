import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello and welcome to cadillac jacks animal farm/i);
  expect(linkElement).toBeInTheDocument();
});
