import { create } from "zustand";

interface IProductStore {
  query: string;
  setQuery: (query: string) => void;
  wishlist: string[];
  setWishlist: (wishlist: string[]) => void;
  isSuggestionVisible: boolean;
  setSuggestionVisible: (isVisible: boolean) => void;
  activeFilters: { brand: string[]; price: string[]; rating: string[] };
  setActiveFilters: (activeFilters: {
    brand?: string[];
    price?: string[];
    rating?: string[];
  }) => void;
}

const useProductStore = create<IProductStore>((set, get) => ({
  query: "",
  setQuery: (query: string) => set({ query }),
  wishlist: [],
  setWishlist: (wishlist: string[]) => set({ wishlist }),
  isSuggestionVisible: false,
  setSuggestionVisible: (isVisible: boolean) =>
    set({ isSuggestionVisible: isVisible }),
  activeFilters: { brand: [], price: [], rating: [] },
  setActiveFilters: (activeFilters: {
    brand?: string[];
    price?: string[];
    rating?: string[];
  }) => {
    const { brand, price, rating } = activeFilters;
    const currentActiveFilters = get().activeFilters;

    set({
      activeFilters: {
        brand: brand ?? currentActiveFilters.brand,
        price: price ?? currentActiveFilters.price,
        rating: rating ?? currentActiveFilters.rating,
      },
    });
  },
}));

export default useProductStore;
