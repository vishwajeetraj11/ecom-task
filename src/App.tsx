import "./App.scss";
import SearchInput from "./components/search";
import SearchFilters from "./components/searchFilters";
import SearchResults from "./components/searchResults";

function App() {
  return (
    <>
      <SearchInput />
      <h3 className={"searchResultsLabel"}>SearchResults</h3>
      <div className="searchFilterResultContainer">
        <SearchFilters />
        <SearchResults />
      </div>
    </>
  );
}

export default App;
