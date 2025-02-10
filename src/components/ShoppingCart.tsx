import React, { useMemo } from 'react';
import { useCartStore } from '../store/cartStore';
import CartItem from './CartItem';

const ShoppingCart: React.FC = () => {
  const { items, removeItem } = useCartStore();

  const totalPrice = useMemo(() => {
    console.log('Calculating total price');
    return items.reduce((total : any , item: any ) => total + item.price, 0);
  }, [items]);

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      {items.map((item:any) => (
        <CartItem key={item.id} {...item} onRemove={removeItem} />
      ))}
      <h3>Total: R${totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default ShoppingCart;