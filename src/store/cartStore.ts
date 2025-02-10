import {create} from 'zustand';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartStore {
  items: Product[];
  addItem: (item: Product) => void;
  removeItem: (id: number) => void;
}

export const useCartStore = create<CartStore>((set: any) => ({
  items: [],
  addItem: (item: any) => set((state: any) => ({ items: [...state.items, item] })),
  removeItem: (id: any ) => set((state: any ) => ({ items: state.items.filter((item:any) => item.id !== id) })),
}));