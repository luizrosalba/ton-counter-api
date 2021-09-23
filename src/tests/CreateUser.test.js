import { render, screen } from '@testing-library/react';
import CreateUser from '../pages/CreateUser';

test('check if component rendered correctly', () => {
  render(<CreateUser />);
  const nameInput = screen.getByText(/Nome de Usuário:/i);
  expect(nameInput).toBeInTheDocument();
  const passwordInput = screen.getByText(/Senha:/i);
  expect(passwordInput).toBeInTheDocument();
  const emailInput = screen.getByText(/E-mail:/i);
  expect(emailInput).toBeInTheDocument();
  const cpfInput = screen.getByText(/CPF:/i);
  expect(cpfInput).toBeInTheDocument();
});
