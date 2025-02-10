import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorBoundary from '../ErrorBoundaty';

// Componente que sempre lança um erro
const ErrorComponent: React.FC = () => {
  throw new Error('Test error');
};

describe('ErrorBoundary', () => {
  it('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <div>Test Child</div>
      </ErrorBoundary>
    );
    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  it('renders fallback UI when there is an error', () => {
    const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText('Oops, algo deu errado.')).toBeInTheDocument();
    expect(screen.getByText('Desculpe pela inconveniência. Por favor, tente recarregar a página.')).toBeInTheDocument();

    consoleErrorMock.mockRestore();
  });

  it('renders custom fallback when provided', () => {
    const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    render(
      <ErrorBoundary fallback={<div>Custom Error UI</div>}>
        <ErrorComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText('Custom Error UI')).toBeInTheDocument();

    consoleErrorMock.mockRestore();
  });
});