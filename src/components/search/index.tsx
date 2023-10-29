import { CiSearch } from "react-icons/ci";
import useProductStore from "../../stores/productStore";
import searchStyles from "./search.module.scss";
import Suggestions from "../suggestions";

interface Props {}

const SearchInput = (props: Props) => {
  const { query, setQuery } = useProductStore();
  return (
    <div className={searchStyles.searchContainer}>
      <div className={searchStyles.search}>
        <input
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <CiSearch className="" size={30} />
      </div>
      {query && <Suggestions />}
    </div>
  );
};

export default SearchInput;
