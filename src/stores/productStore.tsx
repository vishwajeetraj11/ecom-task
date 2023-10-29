import { create } from "zustand";

interface IProductStore {
  query: string;
  setQuery: (query: string) => void;
  wishlist: string[];
  setWishlist: (wishlist: string[]) => void;
}

const useProductStore = create<IProductStore>((set) => ({
  query: "",
  setQuery: (query: string) => set({ query }),
  wishlist: [],
  setWishlist: (wishlist: string[]) => set({ wishlist }),
}));

export default useProductStore;
