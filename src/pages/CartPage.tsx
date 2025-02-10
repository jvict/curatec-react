import React from 'react';
import ShoppingCart from '../components/ShoppingCart';
import { useCartStore } from '../store/cartStore';
import ErrorBoundary from '../components/ErrorBoundaty';
import ErrorThrower from '../components/ErrorThrower';

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
      <ErrorBoundary>
        <button onClick={handleAddRandomItem}>Adicionar Item Aleatório</button>
        <ShoppingCart />
      </ErrorBoundary>
      <ErrorBoundary fallback={(error:any) => (
        <div>
          Erro no componente ErrorThrower: {error?.message}
          <br />
          Por favor, recarregue a página.
        </div>
      )}>
        <ErrorThrower />
      </ErrorBoundary>
    </div>
  );
};

export default CartPage;