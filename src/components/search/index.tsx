import { CiSearch } from "react-icons/ci";
import useProductStore from "../../stores/productStore";
import searchStyles from "./search.module.scss";
import Suggestions from "../suggestions";
import { useState } from "react";

interface Props {}

const SearchInput = (props: Props) => {
  const { query, setQuery, setSuggestionVisible, isSuggestionVisible } =
    useProductStore();

  return (
    <div className={searchStyles.searchContainer}>
      <div className={searchStyles.search}>
        <input
          onFocus={() => {
            setSuggestionVisible(true);
          }}
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <CiSearch className="" size={30} />
      </div>
      {isSuggestionVisible && <Suggestions />}
    </div>
  );
};

export default SearchInput;
