import { AiFillStar } from "react-icons/ai";

type Props = {
  rating: number;
};

const Rating = ({ rating }: Props) => {
  const ratingsFilledStars = Array.from(Array(rating).keys());
  const ratingsEmptyStars = Array.from(Array(5 - rating).keys());
  return (
    <>
      {ratingsFilledStars.map((_) => (
        <AiFillStar fill="#fbbf24" key={_} />
      ))}
      {ratingsEmptyStars.map((_) => (
        <AiFillStar fill="#d1d5db" key={_} />
      ))}
    </>
  );
};

export default Rating;
