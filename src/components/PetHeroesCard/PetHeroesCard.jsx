import { FaStar } from "react-icons/fa6";

const PetHeroesCard = ({ review }) => {
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure className="">
        <img src={review.image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{review.name}</h2>
        <p>{review.review}</p>
        <p className="flex gap-1 text-yellow-500">
          {[...Array(review.rating)].map(() => (
            <FaStar />
          ))}
        </p>
      </div>
    </div>
  );
};

export default PetHeroesCard;
