import React from "react";
import searchFiltersStyles from "./searchFilters.module.scss";
import Accordion from "../accordion";

type Props = {};

const SearchFilters = (props: Props) => {
  const [accordionStates, setActiveAccordionStates] = React.useState({
    brand: true,
    price: true,
    rating: true,
  });
  return (
    <div className={searchFiltersStyles.searchFiltersContainer}>
      <Accordion
        toggleAccordion={() =>
          setActiveAccordionStates((prev) => ({ ...prev, brand: !prev.brand }))
        }
        title="brand"
        isOpen={accordionStates.brand}
      >
        <input type="checkbox" name="brand" id="brand-mango" />
        <label htmlFor="brand-mango">Mango</label>
        <input type="checkbox" name="brand" id="brand-h&m" />
        <label htmlFor="brand-h&m">H&M</label>
      </Accordion>

      <Accordion
        toggleAccordion={() =>
          setActiveAccordionStates((prev) => ({ ...prev, price: !prev.price }))
        }
        title="price range"
        isOpen={accordionStates.price}
      >
        <input type="checkbox" name="price" id="price-500" />
        <label htmlFor="price-500">Under 500</label>
        <input type="checkbox" name="price" id="price-3000" />
        <label htmlFor="price-3000">100 To 3000</label>
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
        <input type="checkbox" name="prcie" id="rating-5-star" />
        <label htmlFor="rating-5-star">5*</label>
        <input type="checkbox" name="rating" id="rating-4-star" />
        <label htmlFor="rating-4-star">4*</label>
        <input type="checkbox" name="rating" id="rating-3-star" />
        <label htmlFor="rating-3-star">3*</label>
        <input type="checkbox" name="rating" id="rating-2-star" />
        <label htmlFor="rating-2-star">2*</label>
        <input type="checkbox" name="rating" id="rating-1-star" />
        <label htmlFor="rating-1-star">1*</label>
      </Accordion>
    </div>
  );
};

export default SearchFilters;
