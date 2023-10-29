import { AiFillStar, AiOutlineStar } from "react-icons/ai";

type Props = {
  rating: number;
};

const Rating = ({ rating }: Props) => {
  const ratingsFilledStars = Array.from(Array(rating).keys());
  const ratingsEmptyStars = Array.from(Array(5 - rating).keys());
  return (
    <>
      {ratingsFilledStars.map((_) => (
        <AiFillStar key={_} />
      ))}
      {ratingsEmptyStars.map((_) => (
        <AiOutlineStar key={_} />
      ))}
    </>
  );
};

export default Rating;
