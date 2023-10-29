import React from "react";
import searchCardStyles from "./searchCard.module.scss";

type Props = {
  title: string;
  image: string;
  discountedPrice: number;
  price: number;
  rating: number;
  ratingsCount: number;
  id: string;
};

const SearchCard = ({
  discountedPrice,
  image,
  price,
  rating,
  ratingsCount,
  title,
}: Props) => {
  return (
    <div className={searchCardStyles.searchCardContainer}>
      <div className={searchCardStyles.searchCardImageContainer}>
        <img src={image} className={searchCardStyles.searchCardImage} />
        <div className={searchCardStyles.searchCardViewProduct}>
          <p>view product</p>
        </div>
      </div>
      <p className={searchCardStyles.searchCardTitle}>{title}</p>
      <div className={searchCardStyles.searchCardPriceContainer}>
        <p className={searchCardStyles.searchCardDiscountedPrice}>
          Rs {discountedPrice}
        </p>
        <p className={searchCardStyles.searchCardPrice}>Rs {price}</p>
      </div>
      <div className={searchCardStyles.searchCardRatingContainer}>
        {/* <Rating /> */}
        <p className={searchCardStyles.searchCardRatingsCount}>
          {`(${ratingsCount})`}
        </p>
      </div>
    </div>
  );
};

export default SearchCard;
