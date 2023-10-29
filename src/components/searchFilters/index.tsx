import React from "react";
import searchFiltersStyles from "./searchFilters.module.scss";
import Accordion from "../accordion";
import { CheckboxWithLabel } from "../checkbox";
import Rating from "../Rating";

const SearchFilters = () => {
  const [accordionStates, setActiveAccordionStates] = React.useState({
    brand: true,
    price: true,
    rating: true,
  });

  const brandFilters = [{ name: "mango" }, { name: "h&m" }];
  const priceFilters = [{ name: "under 500" }, { name: "100 to 3000" }];
  const ratingFilters = [
    { rating: <Rating rating={5} />, name: "rating-5-star" },
    { rating: <Rating rating={4} />, name: "rating-4-star" },
    { rating: <Rating rating={3} />, name: "rating-3-star" },
    { rating: <Rating rating={2} />, name: "rating-2-star" },
    { rating: <Rating rating={1} />, name: "rating-1-star" },
  ];

  return (
    <div className={searchFiltersStyles.searchFiltersContainer}>
      <Accordion
        toggleAccordion={() =>
          setActiveAccordionStates((prev) => ({ ...prev, brand: !prev.brand }))
        }
        title="brand"
        isOpen={accordionStates.brand}
      >
        {brandFilters.map((brand) => (
          <CheckboxWithLabel
            key={brand.name}
            id={`${"brand"}-${brand.name}`}
            label={brand.name}
            name="brand"
          />
        ))}
      </Accordion>

      <Accordion
        toggleAccordion={() =>
          setActiveAccordionStates((prev) => ({ ...prev, price: !prev.price }))
        }
        title="price range"
        isOpen={accordionStates.price}
      >
        {priceFilters.map((price) => (
          <CheckboxWithLabel
            key={price.name}
            id={`${"price"}-${price.name}`}
            label={price.name}
            name="price"
          />
        ))}
      </Accordion>

      <Accordion
        toggleAccordion={() =>
          setActiveAccordionStates((prev) => ({
            ...prev,
            rating: !prev.rating,
          }))
        }
        title="ratings"
        isOpen={accordionStates.rating}
      >
        {ratingFilters.map((rating) => (
          <CheckboxWithLabel
            name="rating"
            key={rating.name}
            label={rating.rating}
            id={rating.name}
          />
        ))}
      </Accordion>
    </div>
  );
};

export default SearchFilters;
