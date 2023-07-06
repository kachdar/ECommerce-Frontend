import styles from "./CartForm.module.css";
import { useDispatch } from "react-redux";
import { addToCart, decreaseAmout } from "../../../features/cartSlice";

const CartForm = ({ book }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => dispatch(decreaseAmout(book.id))}
        disabled={book.quantity === 1}
      >
        -
      </button>
      <span>{book.quantity}</span>
      <button onClick={() => dispatch(addToCart(book))}>+</button>
    </div>
  );
};

export default CartForm;
