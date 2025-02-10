import React from 'react';

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  onRemove: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = React.memo(({ id, name, price, onRemove }) => {
  console.log(`CartItem ${id} rendered`);
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0' }}>
      <h3>{name}</h3>
      <p>Preço: R${price.toFixed(2)}</p>
      <button onClick={() => onRemove(id)}>Remover</button>
    </div>
  );
});

export default CartItem;