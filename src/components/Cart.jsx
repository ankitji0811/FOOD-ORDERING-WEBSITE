import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../utils/cartSlice";
import toast, { Toaster } from "react-hot-toast";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const totalQty = cartItems.reduce((total, item) => total + item.qty, 0);

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total +
      item.qty *
        (item.card.info.price / 100 || item.card.info.defaultPrice / 100),
    0
  );

  const handleClearCart = () => {
    toast.error("Cart is empty");
  };
  return (
    <div className="w-6/12 mx-auto py-4 flex flex-col justify-center ">
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="font-bold text-xl text-center mt-5">Cart</h1>
      <div>
        {cartItems.length === 0 ? (
          <h1 className="text-center font-bold text-red-600 mt-3">
            Cart is Empty ❌❌
          </h1>
        ) : (
          cartItems.map((item) => (
            <CartItem key={item?.card?.info?.id} item={item} />
          ))
        )}
      </div>

      <div className="border-b border-black"></div>

      {totalQty !== 0 ? (
        <div className="text-xs font-semibold">TotalQty: {totalQty} </div>
      ) : (
        ""
      )}

      {totalPrice !== 0 ? (
        <div className="font-semibold">
          Total RoundeOff: {Math.floor(totalPrice)}.00{" "}
        </div>
      ) : (
        ""
      )}

      {cartItems.length !== 0 && (
        <button
          className="font-bold bg-red-600 text-black px-3 py-1 rounded-md mt-5 "
          onClick={() => {
            dispatch(clearCart());
            handleClearCart();
          }}
        >
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default Cart;
