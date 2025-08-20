import { render, screen } from '@testing-library/react';
import App from './App';

test('renders sidebar menu', () => {
  render(<App />);
  const homeLink = screen.getByText(/Trang chủ/i);
  expect(homeLink).toBeInTheDocument();
});
