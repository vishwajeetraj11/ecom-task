import suggestionStyles from "./suggestions.module.scss";
import { latestTrendsImages, popularSuggestions } from "../../shared/faker";
import { useEffect } from "react";

interface Props {}

const Suggestions = (props: Props) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const suggestionsContainer = document.getElementById(
        "searchSuggestionContainer"
      );
      if (
        suggestionsContainer &&
        !suggestionsContainer.contains(event.target as Node)
      ) {
        suggestionsContainer.style.display = "none";
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
      <p>Latest Trends</p>
      <div className={suggestionStyles.latestTrendsContainer}>
        {latestTrendsImages.map(({ image, title }) => {
          return (
            <div className="" key={image}>
              <img src={image} />
              <p>{title}</p>
            </div>
          );
        })}
      </div>
      <p className={suggestionStyles.popularSuggestionsLabel}>
        Popular Suggestions
      </p>
      {popularSuggestions.map((suggestion) => (
        <p className={suggestionStyles.suggestionItem} key={suggestion}>
          {suggestion}
        </p>
      ))}
    </div>
  );
};

export default Suggestions;
