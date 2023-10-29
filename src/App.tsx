import { useShallow } from "zustand/react/shallow";
import "./App.scss";
import SearchInput from "./components/search";
import SearchFilters from "./components/searchFilters";
import SearchResults from "./components/searchResults";
import useProductStore from "./stores/productStore";

function App() {
  const { filteredResults } = useProductStore(
    useShallow((state) => ({ filteredResults: state.filteredResults }))
  );

  return (
    <main
      style={
        filteredResults.length === 0
          ? {
              backgroundImage: "url(bg.jpg)",
            }
          : {}
      }
    >
      <img
        width="92"
        src="https://assets-global.website-files.com/622778f0460ef2a7b46117c1/632c38d0a82442dc8dfe0f53_zevi-logo-_2_.webp"
        className="brandLogo"
      />
      <SearchInput />
      {filteredResults.length > 0 && (
        <>
          <h3 className={"searchResultsLabel"}>Search Results</h3>
          <div className="searchFilterResultContainer">
            <SearchFilters />
            <SearchResults />
          </div>
        </>
      )}
    </main>
  );
}

export default App;
