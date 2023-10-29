import searchResultsStyles from "./searchResults.module.scss";
import SearchCard from "../searchCard";
import { customFaker } from "../../shared/faker";
import { useState } from "react";
import useProductStore from "../../stores/productStore";

const SearchResults = () => {
  const { filteredResults, setSearchResults } = useProductStore();

  return (
    <div className={searchResultsStyles.searchResultsContainer}>
      {filteredResults.map((result) => (
        <SearchCard key={result.id} {...result} />
      ))}
    </div>
  );
};

export default SearchResults;
