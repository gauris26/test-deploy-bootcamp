import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const welcomeMessage = screen.getByText(/Bienvenido a mi Aplicacion React con Typescript/i);
  expect(welcomeMessage).toBeInTheDocument();
});

test('toggles message when button is clicked', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /Mostrar Mensaje/i });
  
  // Simular el clic en el botón
  fireEvent.click(button);
  
  // Verificar que el mensaje aparece
  const message = screen.getByText(/Felicidades! Tu aplicacion se encuentra desplegada y corriendo/i);
  expect(message).toBeInTheDocument();
  
  // Simular otro clic para ocultar el mensaje
  fireEvent.click(button);
  expect(message).not.toBeInTheDocument();
});