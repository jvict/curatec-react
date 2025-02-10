import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CartItem from '../CartItem';

describe('CartItem', () => {
  const mockItem = {
    id: 1,
    name: 'Test Product',
    price: 9.99,
  };

  const mockOnRemove = jest.fn();

  it('renders the item name', () => {
    render(<CartItem {...mockItem} onRemove={mockOnRemove} />);
    expect(screen.getByText('Test Product')).toBeInTheDocument();
  });

  it('renders the item price', () => {
    render(<CartItem {...mockItem} onRemove={mockOnRemove} />);
    expect(screen.getByText('Preço: R$9.99')).toBeInTheDocument();
  });

  it('calls onRemove when the remove button is clicked', () => {
    render(<CartItem {...mockItem} onRemove={mockOnRemove} />);
    fireEvent.click(screen.getByText('Remover'));
    expect(mockOnRemove).toHaveBeenCalledWith(1);
  });
});