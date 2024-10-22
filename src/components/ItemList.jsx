import { useDispatch } from "react-redux";
import { Nonveg, Veg } from "../assets";
import { ITEM_IMG_URL } from "../utils";
import { addItem } from "../utils/cartSlice";
import toast, { Toaster } from "react-hot-toast";

const ItemList = (props) => {
  const { items } = props;

  //   console.log(items);

  const dispatch = useDispatch();

  const handleToast = () => {
    toast.success("Item added succesfully");
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <ul className="flex flex-col py-2">
        {items?.map((item) => (
          <li className="border-b-2 mx-5" key={item?.card?.info?.id}>
            <div className="flex justify-between items-center py-3">
              <div className="flex flex-col w-6/12">
                {item.card.info.itemAttribute.vegClassifier === "VEG" ? (
                  <img className="w-5" src={Veg} />
                ) : (
                  <img className="w-5" src={Nonveg} />
                )}

                <div className="font-semibold">{item?.card?.info?.name}</div>
                <div className="font-semibold">
                  &#8377;
                  <span>
                    {" "}
                    {(item?.card?.info?.price ||
                      item?.card?.info?.defaultPrice) / 100}
                  </span>
                </div>
                {item?.card?.info?.ratings?.aggregatedRating?.rating && (
                  <div className="text-xs text-gray-500">
                    <span className="text-green-900 font-bold">
                      {item?.card?.info?.ratings?.aggregatedRating?.rating}
                    </span>{" "}
                    (
                    {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2}
                    )
                  </div>
                )}

                <div className="text-xs text-gray-500">
                  {item?.card?.info?.description}
                </div>
              </div>
              <div className="flex flex-col p-2 relative">
                <img
                  className="w-36 h-32 rounded-xl flex items-center"
                  src={ITEM_IMG_URL + item?.card?.info?.imageId}
                  alt={item?.card?.info?.name}
                />
                <button
                  onClick={() => {
                    dispatch(addItem({ ...item, qty: 1 }));
                    handleToast();
                  }}
                  className="absolute bg-white text-xl font-semibold px-2 py-1 right-12 -bottom-0 rounded-xl shadow-lg "
                >
                  Add+
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
