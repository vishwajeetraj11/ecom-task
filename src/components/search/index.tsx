import { CiSearch } from "react-icons/ci";
import useProductStore from "../../stores/productStore";
import searchStyles from "./search.module.scss";
import Suggestions from "../suggestions";

interface Props {}

const SearchInput = (props: Props) => {
  const {
    query,
    setQuery,
    setSuggestionVisible,
    isSuggestionVisible,
    setFilteredResults,
    searchResults,
  } = useProductStore();

  const onSearch = () => {
    const filteredResults = searchResults
      .filter(
        (result) =>
          result.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
      )
      .slice(0, 20);
    setFilteredResults(filteredResults);
    setSuggestionVisible(false);
  };

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
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch();
            }
          }}
        />
        <CiSearch
          onClick={() => onSearch()}
          className="cursor-pointer"
          size={30}
        />
      </div>
      {isSuggestionVisible && <Suggestions />}
    </div>
  );
};

export default SearchInput;
