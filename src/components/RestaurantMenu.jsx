import { Rate } from "../../public/assets/index";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import { MenuShimmer } from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const { resInfo, resMenu } = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  const handleShowItem = (currentIndex) => {
    if (currentIndex === showIndex) {
      setShowIndex(null);
    } else {
      setShowIndex(currentIndex);
    }
  };

  // console.log(resMenu);

  const {
    name,
    avgRating,
    costForTwoMessage,
    cuisines,
    locality,
    totalRatingsString,
  } = resInfo;

  return resInfo.length === 0 ? (
    <MenuShimmer />
  ) : (
    <div className="max-w-3xl mx-auto mt-10">
      <div className="flex flex-col">
        <h1 className="text-xl font-bold my-5">{name}</h1>
        <div className="shadow-2xl  border border-solid  rounded-xl  p-5">
          <div className="flex gap-x-1">
            <img className="object-contain" src={Rate} alt="Rating img" />
            <div className="font-bold">
              {avgRating} {totalRatingsString} || {costForTwoMessage}
            </div>
          </div>
          <div className="font-bold text-orange-600 underline">
            {cuisines.join(", ")}
          </div>
          <div className="font-bold">Outlet : {locality}</div>
          <div className="font-bold">{resInfo?.sla?.slaString}</div>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-center font-bold text-xl mb-5">Menu</h3>

        {resMenu.map((c, index) => (
          <RestaurantCategory
            key={c.card.card.title}
            data={c.card.card}
            showItem={index === showIndex ? true : false}
            // setShowIndex={() => setShowIndex(index)}
            handleShowItem={() => handleShowItem(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
