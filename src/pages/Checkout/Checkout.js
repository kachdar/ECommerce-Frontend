import { useSelector, useDispatch } from "react-redux";
import { useCreateOrderMutation } from "../../features/ordersApiSlice";
import { clearCartItems } from "../../features/cartSlice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);

  const [createOrder, {isLoading}] = useCreateOrderMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addOrder = () => {
    const orderItems = cartItems.map((item) => ({
      book: item,
      quantity: item.quantity,
    }));

    const order = {
      totalPrice: totalPrice,
      orderItems: orderItems,
    };

    createOrder(order);
    dispatch(clearCartItems());
    navigate('/order-placed');
  };

  return (
    <div>
      <button onClick={addOrder}>Checkout</button>
    </div>
  );
};

export default Checkout;
