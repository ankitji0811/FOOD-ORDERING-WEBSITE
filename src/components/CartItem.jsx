import { useDispatch } from "react-redux";
import { ITEM_IMG_URL } from "../utils";
import { deleteItem } from "../utils/cartSlice";

const CartItem = (props) => {
  const { item } = props;

  console.log(item);

  const dispatch = useDispatch();

  const { name, defaultPrice, price, imageId } = item?.card?.info;

  return (
    <div className="flex justify-between items-center py-3">
      <div>
        {" "}
        <div className="font-semibold">{name}</div>
        <div className="font-semibold">
          Rs.{price / 100 || defaultPrice / 100}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img
          className="w-24 h-20 rounded-xl flex items-center"
          src={ITEM_IMG_URL + imageId}
          alt={name}
        />
        <button
          onClick={() => {
            dispatch(deleteItem(item));
          }}
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default CartItem;
