import suggestionStyles from "./suggestions.module.scss";
import { latestTrendsImages, popularSuggestion } from "../../shared/faker";
import { useEffect } from "react";
import useProductStore from "../../stores/productStore";

interface Props {}
const Suggestions = (props: Props) => {
  const { setSuggestionVisible, onSearch, setQuery } = useProductStore();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const suggestionsContainer = document.getElementById(
        "searchSuggestionContainer"
      );
      const searchInput = document.getElementById("searchInput");
      if (suggestionsContainer && searchInput) {
        if (
          !suggestionsContainer.contains(event.target as Node) &&
          !searchInput.contains(event.target as Node)
        ) {
          setSuggestionVisible(false);
        } else {
          setSuggestionVisible(true);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      id="searchSuggestionContainer"
      className={suggestionStyles.suggestionsContainer}
    >
      <p className={suggestionStyles.latestTrendsLabel}>Latest Trends</p>
      <div className={suggestionStyles.latestTrendsContainer}>
        {latestTrendsImages.map(({ image, title }) => {
          return (
            <div key={image}>
              <img src={image} />
              <p>{title}</p>
            </div>
          );
        })}
      </div>
      <p className={suggestionStyles.popularSuggestionsLabel}>
        Popular Suggestions
      </p>
      {popularSuggestion.map((suggestion) => (
        <p
          onClick={() => {
            setQuery(suggestion);
            onSearch();
          }}
          className={suggestionStyles.suggestionItem}
          key={suggestion}
        >
          {suggestion}
        </p>
      ))}
    </div>
  );
};

export default Suggestions;
