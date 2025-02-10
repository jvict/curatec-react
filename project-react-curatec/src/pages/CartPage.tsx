import React from 'react';
import ShoppingCart from '../components/ShoppingCart';
import { useCartStore } from '../store/cartStore';

const CartPage: React.FC = () => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddRandomItem = () => {
    const id = Math.floor(Math.random() * 1000);
    addItem({
      id,
      name: `Produto ${id}`,
      price: Math.random() * 100,
    });
  };

  return (
    <div>
      <h1>Página do Carrinho</h1>
      <button onClick={handleAddRandomItem}>Adicionar Item Aleatório</button>
      <ShoppingCart />
    </div>
  );
};

export default CartPage;