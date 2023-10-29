import searchResultsStyles from "./searchResults.module.scss";
import SearchCard from "../searchCard";
import { customFaker } from "../../shared/faker";

const SearchResults = () => {
  const searchResults = Array.from(Array(100).keys()).map(() => ({
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
  }));
  return (
    <div className={searchResultsStyles.searchResultsContainer}>
      {searchResults.map((result) => (
        <SearchCard key={result.id} {...result} />
      ))}
    </div>
  );
};

export default SearchResults;
