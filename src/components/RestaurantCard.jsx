import { RESTURANT_CARD_IMG_URL } from "../utils";
import { Rate } from "../assets";

const RestaurantCard = (props) => {

    const {restaurantData} = props;

  const { cloudinaryImageId, name, areaName, avgRating, cuisines } =
    restaurantData?.info;

    // console.log(restaurantData.info.sla.slaString);

  const { slaString } = restaurantData?.info?.sla

//   console.log(props.restaurantData.info);

  const { header } =
    restaurantData?.info?.aggregatedDiscountInfoV2 ||
    restaurantData?.info?.aggregatedDiscountInfoV3;

  const cutCuisines = (str) => {
    return str?.length >= 36 ? str?.slice(0, 36) + "..." : str;
  };

  const cutName = (str) => {
    return str?.length >= 23 ? str?.slice(0, 23) + "..." : str;
  };

  return (
    <div className=" max-w-64 min-w-64 min-h-72 max-h-72 cursor-pointer hover:scale-95 duration-200 overflow-visible py-3">
      <div className="mb-2 relative">
        <img
          className="max-w-64 min-w-64  min-h-44 max-h-44 rounded-2xl object-cover "
          src={RESTURANT_CARD_IMG_URL + cloudinaryImageId}
        />
        <label className="absolute bottom-0 ml-2 text-white font-bold text-2xl">
          {header}
        </label>
      </div>
      <div className="px-1">
        <h2 className="font-bold text-lg text-gray-800">{cutName(name)}</h2>
        <div className="flex gap-x-1 items-center">
          <img className="object-contain" src={Rate} />
          <span className="font-bold text-base text-gray-800">
            {avgRating} - {slaString}
          </span>
        </div>
        <div className="text-gray-600 font-semibold text-sm">
          {cutCuisines(cuisines?.join(", "))}
        </div>
        <div className="text-gray-600 font-semibold text-sm">{areaName}</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
