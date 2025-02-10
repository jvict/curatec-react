import create from 'zustand';

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

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (id) => set((state) => ({ items: state.items.filter(item => item.id !== id) })),
}));