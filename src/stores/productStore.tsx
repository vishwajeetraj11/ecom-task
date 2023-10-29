import { create } from "zustand";
import { customFaker } from "../shared/faker";

export interface IProduct {
  title: string;
  image: string;
  discountedPrice: number;
  price: number;
  rating: number;
  ratingsCount: number;
  id: string;
}
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
  searchResults: IProduct[];
  setSearchResults: (searchResults: IProduct[]) => void;
  filteredResults: IProduct[];
  setFilteredResults: (filteredResults: IProduct[]) => void;
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
    const { activeFilters: currentActiveFilters, searchResults } = get();
    const filteredResults = searchResults.filter((result) => {
      // const isPriceMatch = price?.includes(result.discountedPrice.toString());
      let isRatingMatch;
      if (rating && rating?.length > 0) {
        isRatingMatch = rating?.includes(result.rating.toString() + "-star");
      }
      let isPriceMatch;
      if (price && price?.length > 0) {
        if (price.includes("under-500")) {
          isPriceMatch = result.discountedPrice < 500;
        } else if (price.includes("100-to-3000")) {
          isPriceMatch =
            result.discountedPrice >= 100 && result.discountedPrice < 3000;
        }
      }
      if (
        typeof isRatingMatch === "undefined" &&
        typeof isPriceMatch === "undefined"
      ) {
        return true;
      } else if (typeof isRatingMatch === "undefined") {
        return isPriceMatch;
      } else if (typeof isPriceMatch === "undefined") {
        return isRatingMatch;
      }
    });
    set({
      filteredResults: filteredResults.slice(0, 20),
      activeFilters: {
        brand: brand ?? currentActiveFilters.brand,
        price: price ?? currentActiveFilters.price,
        rating: rating ?? currentActiveFilters.rating,
      },
    });
  },
  searchResults: Array.from(Array(1000).keys()).map(() => ({
    title: customFaker.commerce.productName(),
    image: customFaker.image.urlLoremFlickr({
      category: "hoodie",
      height: 250,
      width: 200,
    }),
    discountedPrice: customFaker.number.int({ min: 100, max: 800 }),
    price: customFaker.number.int({ min: 200, max: 1000 }),
    rating: customFaker.number.int({ min: 1, max: 5 }),
    ratingsCount: customFaker.number.int({ min: 20, max: 200 }),
    id: customFaker.string.uuid(),
  })),
  setSearchResults: (searchResults: IProduct[]) => set({ searchResults }),
  filteredResults: [],
  setFilteredResults: (filteredResults: IProduct[]) => set({ filteredResults }),
}));

export default useProductStore;
