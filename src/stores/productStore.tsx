import { create } from "zustand";

interface IProductStore {
  query: string;
  setQuery: (query: string) => void;
}

const useProductStore = create<IProductStore>((set) => ({
  query: "",
  setQuery: (query: string) => set({ query }),
}));

export default useProductStore;
