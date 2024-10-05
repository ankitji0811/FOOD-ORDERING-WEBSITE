import { useEffect, useState } from "react";
import { RESTURANT_API } from "../utils";
import RestaurantCard from "../components/RestaurantCard";
import Item from "../components/Item";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Home = () => {
  const [itemList, setitemList] = useState([]);
  const [topChains, setTopChains] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const fetchData = async () => {
    try {
      const data = await fetch(RESTURANT_API);
      const json = await data?.json();
      setTopChains(
        json?.data?.cards?.find((item) =>
          item?.card?.card?.id?.includes("top_brands")
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );

      setListOfRestaurants(
        json?.data?.cards?.find((item) =>
          item?.card?.card?.id?.includes("restaurant_grid_listing")
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );

      setFilteredRestaurants(
        json?.data?.cards?.find((item) =>
          item?.card?.card?.id?.includes("restaurant_grid_listing")
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );

      setitemList(
        json.data.cards.find((item) => item.card.card.id.includes("what")).card
          .card.gridElements.infoWithStyle.info
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  let box = document.querySelector(".itemcontainer");

  const handleItemPrev = () => {
    box.scrollLeft = box.scrollLeft - 350;
  };

  const handleItemNext = () => {
    box.scrollLeft = box.scrollLeft + 350;
  };

  let resturantBox = document.querySelector(".resturant-container");

  const handlePrev = () => {
    resturantBox.scrollLeft = resturantBox.scrollLeft - 250;
  };
  const handleNext = () => {
    resturantBox.scrollLeft = resturantBox.scrollLeft + 250;
  };

  return (
    <div className="max-w-6xl mx-auto py-4">
      {/* First Crousel */}
      {itemList.length > 0 && (
        <div className="flex flex-col border-b border-gray-500">
          <div className="flex justify-between items-center">
            <div className="font-bold text-2xl text-gray-900 ">
              What&apos;s on your mind?
            </div>
            <div className="flex gap-x-2">
              <button
                className="bg-gray-200 p-2 rounded-full"
                onClick={handleItemPrev}
              >
                <FaArrowLeft />
              </button>
              <button
                className="bg-gray-200 p-2 rounded-full"
                onClick={handleItemNext}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>

          <div className="itemcontainer flex gap-x-8 mb-10 overflow-x-hidden scroll-smooth ">
            {itemList?.map((item) => (
              <Item key={item?.id} itemData={item} />
            ))}
          </div>
        </div>
      )}

      {/* Top Chain Crousel */}

      {topChains.length > 0 && (
        <div className="flex flex-col border-b border-gray-500 mt-2">
          <div className="flex justify-between items-center mb-1">
            <div className="font-bold text-2xl text-gray-900 ">
              Top restaurant chains in Indore
            </div>
            <div className="flex gap-x-2">
              <button
                className="bg-gray-200 p-2 rounded-full"
                onClick={handlePrev}
              >
                <FaArrowLeft />
              </button>
              <button
                className="bg-gray-200 p-2 rounded-full"
                onClick={handleNext}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>

          <div className="resturant-container flex gap-x-9 mt-4 overflow-x-hidden scroll-smooth mb-14 ">
            {topChains.map((restaurant) => (
              <RestaurantCard
                key={restaurant.info.id}
                restaurantData={restaurant}
              />
            ))}
          </div>
        </div>
      )}

      {/* All Restaurants */}

      {listOfRestaurants.length > 0 && (
        <div className="flex flex-col max-w-6xl mx-auto my-3 border-b border-gray-500">
          <h2 className="font-bold text-2xl text-gray-900 ">
            {" "}
            Resturants with online food delivery in Raipur
          </h2>

          <div className="flex flex-wrap my-8 gap-7">
            {filteredRestaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.info.id}
                restaurantData={restaurant}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
