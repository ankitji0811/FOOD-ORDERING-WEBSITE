import { useDispatch } from "react-redux";
import { ITEM_IMG_URL } from "../utils";
import { deleteItem, incrementQty, decrementQty } from "../utils/cartSlice";
import toast, { Toaster } from "react-hot-toast";

const CartItem = (props) => {
  // console.log(props);
  const { item } = props;

  // console.log(item);

  const dispatch = useDispatch();

  const { name, defaultPrice, price, imageId } = item?.card?.info;
  const handleToastDelete = () => {
    toast.error("Item deleted");
  };
  const handleToastIncre = () => {
    toast.success("Item added");
  };

  return (
    <div className="flex justify-between items-center py-3">
      <Toaster position="top-center" reverseOrder={false} />
      <div>
        {" "}
        <div className="font-semibold">{name}</div>
        <div className="font-semibold">
          Rs.{price / 100 || defaultPrice / 100}
        </div>
        <div className="text-sm font-semibold">Qty : {item?.qty}</div>
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
            handleToastDelete();
          }}
        >
          🗑️
        </button>
        <div>
          <div
            className="cursor-pointer"
            onClick={() => {
              dispatch(incrementQty(item));
              handleToastIncre();
            }}
          >
            ➕
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              if (item.qty > 1) {
                dispatch(decrementQty(item));
                handleToastDelete();
              } else {
                dispatch(deleteItem(item));
                handleToastDelete();
              }
            }}
          >
            ➖
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
