import { render, screen } from '@testing-library/react';
import Footer from '../common/template/footer';

test('checks if NavbarBrand is rendered', () => {
  render(<Footer />);
  const conterElement = screen.getByTestId('footer-navbrand');
  expect(conterElement).toBeInTheDocument();
});

test('checks if counter shows counter number when props is passed', () => {
  render(<Footer count={1}/>);
  expect(screen.getByTestId('footer-navbrand')).toHaveTextContent(/^Contador:(\s)\d/i)
});