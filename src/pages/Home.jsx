import RestaurantCard from "../components/RestaurantCard";
import Item from "../components/Item";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import useRestaurant from "../hooks/useRestaurant";
import { HomeShimmer } from "../components/Shimmer";

const Home = () => {
  const {
    itemList,
    setFilteredRestaurants,
    topChains,
    listOfRestaurants,
    filteredRestaurants,
    searchText,
    setSearchText,
  } = useRestaurant();

  let box = document.querySelector(".itemcontainer");

  const handleItemPrev = () => {
    box.scrollLeft = box.scrollLeft - 350;
  };

  const handleItemNext = () => {
    box.scrollLeft = box.scrollLeft + 350;
  };

  let resturantBox = document.querySelector(".resturant-container");

  const handlePrev = () => {
    resturantBox.scrollLeft = resturantBox.scrollLeft - 350;
  };
  const handleNext = () => {
    resturantBox.scrollLeft = resturantBox.scrollLeft + 350;
  };

  return listOfRestaurants.length === 0 ? (
    <HomeShimmer/>
  ) : (
    <div className="max-w-6xl mx-auto py-4 -z-10">
      {/* First Crousel */}
      {itemList && (
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

      {topChains && topChains.length > 0 && (
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

          <div className="resturant-container flex gap-x-9 mt-4 overflow-x-hidden scroll-smooth mb-20 z-0">
            {topChains.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={"restaurant/" + restaurant.info.id}
              >
                <RestaurantCard restaurantData={restaurant} />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* All Restaurants */}

      {listOfRestaurants && (
        <div className="flex flex-col max-w-6xl mx-auto my-3 border-b border-gray-500">
          <h2 className="font-bold text-2xl text-gray-900 ">
            {" "}
            Resturants with online food delivery in Raipur
          </h2>

          <div className="flex mt-3 gap-x-2">
            <button
              className="py-1 px-2 border border-solid rounded-2xl font-semibold shadow-sm"
              onClick={() => {
                setFilteredRestaurants(listOfRestaurants);
              }}
            >
              All
            </button>
            <button
              className="py-1 px-2 border border-solid rounded-2xl font-semibold shadow-sm"
              onClick={() => {
                const avgRating = listOfRestaurants.filter(
                  (restaurant) => restaurant.info.avgRating >= 4
                );
                setFilteredRestaurants(avgRating);
              }}
            >
              Ratings 4.0+
            </button>
            <button
              className="py-1 px-2 border border-solid rounded-2xl font-semibold shadow-sm"
              onClick={() => {
                const fastDelivery = listOfRestaurants.filter(
                  (restaurant) => restaurant.info.sla.slaString.slice(0, 2) < 21
                );
                {
                  console.log(fastDelivery);
                }
                setFilteredRestaurants(fastDelivery);
              }}
            >
              Fast Delivery
            </button>
            <div className="flex gap-x-1 border rounded-2xl border-solid outline-none shadow-sm">
              <input
                type="text"
                placeholder="Search fav restaurants"
                className="px-1 rounded-2xl  outline-none placeholder:text-black placeholder:font-semibold"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button
                className="py-1 px-3  rounded-2xl font-semibold border border-solid bg-orange-400 "
                onClick={() => {
                  const searchList = listOfRestaurants.filter((restaurant) =>
                    restaurant.info.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase())

                      
                  );

                  setFilteredRestaurants(searchList);
                }}
              >
                Search
              </button>
            </div>
          </div>

          <div className="flex flex-wrap my-8 gap-7">
            {filteredRestaurants.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={"/restaurant/" + restaurant.info.id}
              >
                <RestaurantCard restaurantData={restaurant} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
