import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Rating from "../Rating";
import searchCardStyles from "./searchCard.module.scss";
import useProductStore from "../../stores/productStore";

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
  id,
}: Props) => {
  const { wishlist, setWishlist } = useProductStore();

  const isWishlisted = wishlist.find((item) => item === id);

  const onAddToWishlist = (id: string) => {
    setWishlist([...wishlist, id]);
  };

  const onRemoveFromWishlist = (id: string) => {
    const newWishlist = wishlist.filter((item) => item !== id);
    setWishlist(newWishlist);
  };

  return (
    <div className={searchCardStyles.searchCardContainer}>
      <div className={searchCardStyles.searchCardImageContainer}>
        <div className={searchCardStyles.searchCardWishlist}>
          {isWishlisted ? (
            <AiFillHeart
              onClick={() => onRemoveFromWishlist(id)}
              size={20}
              fill="#dc2626"
            />
          ) : (
            <AiOutlineHeart
              onClick={() => onAddToWishlist(id)}
              size={20}
              fill="#fff"
            />
          )}
        </div>
        <img src={image} className={searchCardStyles.searchCardImage} />
        <div className={searchCardStyles.searchCardViewProduct}>
          <p>view product</p>
        </div>
      </div>
      <p className={searchCardStyles.searchCardTitle}>{title}</p>
      <div className={searchCardStyles.searchCardPriceContainer}>
        <p className={searchCardStyles.searchCardPrice}>Rs {price}</p>
        <p className={searchCardStyles.searchCardDiscountedPrice}>
          Rs {discountedPrice}
        </p>
      </div>
      <div className={searchCardStyles.searchCardRatingContainer}>
        <Rating rating={rating} />
        <p className={searchCardStyles.searchCardRatingsCount}>
          {`(${ratingsCount})`}
        </p>
      </div>
    </div>
  );
};

export default SearchCard;
