import { Fragment } from "react";
import suggestionStyles from "./suggestions.module.scss";

interface Props {}

import { Faker, en } from "@faker-js/faker";

const customFaker = new Faker({ locale: [en] });

const Suggestions = (props: Props) => {
  const images = [1, 2, 3, 4, 5].map(() => ({
    image: customFaker.image.urlLoremFlickr({
      category: "fashion",
      height: 300,
      width: 200,
    }),
    title: customFaker.lorem.word(5),
  }));
  const popularSuggestions = [1, 2, 3, 4, 5].map(() =>
    customFaker.commerce.productAdjective()
  );
  return (
    <div className={suggestionStyles.suggestionsContainer}>
      <p>Latest Trends</p>
      <div className={suggestionStyles.latestTrendsContainer}>
        {images.map(({ image, title }) => {
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
