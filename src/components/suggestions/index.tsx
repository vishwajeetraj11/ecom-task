import suggestionStyles from "./suggestions.module.scss";
import { latestTrendsImages, popularSuggestions } from "../../shared/faker";

interface Props {}

const Suggestions = (props: Props) => {
  return (
    <div className={suggestionStyles.suggestionsContainer}>
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
