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
    onSearch,
  } = useProductStore();

  return (
    <div className={searchStyles.searchContainer}>
      <div className={searchStyles.search}>
        <input
          onFocus={() => {
            setSuggestionVisible(true);
          }}
          id="searchInput"
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
