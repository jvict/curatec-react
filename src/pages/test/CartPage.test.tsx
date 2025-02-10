import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CartPage from '../CartPage';

jest.mock('../store/cartStore', () => ({
  useCartStore: jest.fn(() => ({
    addItem: jest.fn(),
    items: [],
    removeItem: jest.fn(),
  })),
}));

describe('CartPage', () => {
  it('renders the cart page title', () => {
    render(<CartPage />);
    expect(screen.getByText('Página do Carrinho')).toBeInTheDocument();
  });

  it('renders the "Adicionar Item Aleatório" button', () => {
    render(<CartPage />);
    expect(screen.getByText('Adicionar Item Aleatório')).toBeInTheDocument();
  });

  it('calls addItem when "Adicionar Item Aleatório" is clicked', () => {
    const mockAddItem = jest.fn();
    jest.spyOn(require('../store/cartStore'), 'useCartStore').mockImplementation(() => ({
      addItem: mockAddItem,
      items: [],
      removeItem: jest.fn(),
    }));

    render(<CartPage />);
    fireEvent.click(screen.getByText('Adicionar Item Aleatório'));

    expect(mockAddItem).toHaveBeenCalled();
  });

  it('renders the ErrorThrower component', () => {
    render(<CartPage />);
    expect(screen.getByText('Componente que pode lançar erro')).toBeInTheDocument();
  });
});