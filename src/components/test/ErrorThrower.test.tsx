import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorThrower from '../ErrorThrower';

describe('ErrorThrower', () => {
  it('renders without throwing an error initially', () => {
    render(<ErrorThrower />);
    expect(screen.getByText('Componente que pode lançar erro')).toBeInTheDocument();
    expect(screen.getByText('Lançar Erro')).toBeInTheDocument();
  });

  it('throws an error when the button is clicked', () => {
    const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    render(<ErrorThrower />);
    
    expect(() => {
      fireEvent.click(screen.getByText('Lançar Erro'));
    }).toThrow('Erro proposital lançado pelo ErrorThrower');

    consoleErrorMock.mockRestore();
  });
});