import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ShoppingCart from '../ShoppingCart';

jest.mock('../store/cartStore', () => ({
  useCartStore: jest.fn(() => ({
    items: [
      { id: 1, name: 'Produto 1', price: 10 },
      { id: 2, name: 'Produto 2', price: 20 },
    ],
    removeItem: jest.fn(),
  })),
}));

describe('ShoppingCart', () => {
  it('renders the shopping cart title', () => {
    render(<ShoppingCart />);
    expect(screen.getByText('Carrinho de Compras')).toBeInTheDocument();
  });

  it('renders cart items', () => {
    render(<ShoppingCart />);
    expect(screen.getByText('Produto 1')).toBeInTheDocument();
    expect(screen.getByText('Produto 2')).toBeInTheDocument();
  });

  it('calculates and displays the total price', () => {
    render(<ShoppingCart />);
    expect(screen.getByText('Total: R$30.00')).toBeInTheDocument();
  });
});