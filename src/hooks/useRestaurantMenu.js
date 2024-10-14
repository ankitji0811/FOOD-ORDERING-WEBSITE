import { useEffect, useState } from "react";
import { RESTURANT_MENU_API } from "../utils";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState([]);
  const [resMenu, setResMenu] = useState([]);

  const fetchMenu = async () => {
    const data = await fetch(RESTURANT_MENU_API + resId);
    const json = await data.json();

    // setResMenu(
    //   json.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
    //     .itemCards
    // );

    // console.log(
    //   json?.data?.cards
    //     ?.find((card) =>
    //       card?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    //         (menu) =>
    //           menu?.card?.card?.["@type"] ===
    //           "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    //       )
    //     )
    //     ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    //       (card) =>
    //         card?.card?.card?.["@type"] ===
    //         "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    //     )
    // );

    // console.log(json.data.cards);

    const categories = json?.data?.cards
      ?.find((card) =>
        card?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
          (menu) =>
            menu?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
      )
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (card) =>
          card?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

    // console.log(categories);

    setResMenu(categories);

    // console.log(categories[0].card.card.itemCards);

    // console.log(categories[0].card.card.itemCards[0].card.info.name);

    setResInfo(
      json?.data?.cards.find((item) =>
        item.card.card?.["@type"]?.includes(
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
        )
      )?.card?.card?.info
    );
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return { resInfo, resMenu };
};

export default useRestaurantMenu;
