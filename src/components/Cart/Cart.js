import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartForm from "./CartForm/CartForm";
import { removeFromCart } from "../../features/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = ({ onHide }) => {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const items = cartItems.map((item) => (
    <div key={item.title}>
      <h3>{item.title}</h3>
      <button onClick={() => dispatch(removeFromCart(item.id))}>X</button>
      <CartForm book={item} />
    </div>
  ));
  return (
    <Fragment>
      <div>{items}</div>
      <p> Total price: {totalPrice}</p>
      <button disabled={!cartItems.length} onClick={() => navigate('/checkout')}>Ok</button>
      <button onClick={onHide}>Cancel</button>
    </Fragment>
  );
};
export default Cart;
