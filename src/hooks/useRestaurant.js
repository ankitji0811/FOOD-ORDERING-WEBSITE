import { useEffect, useState } from "react";
import { RESTURANT_API } from "../utils";

const useRestaurant = () => {
  const [itemList, setitemList] = useState([]);
  const [topChains, setTopChains] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

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
        json?.data?.cards?.find((item) =>
          item?.card?.card?.id?.includes("what")
        )?.card?.card?.gridElements?.infoWithStyle?.info
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    itemList,
    topChains,
    listOfRestaurants,
    setFilteredRestaurants,
    filteredRestaurants,
    searchText,
    setSearchText
  };
};

export default useRestaurant;
