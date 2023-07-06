import CartIcon from "../../Navigation/CartIcon/CartIcon";
import { useSelector } from "react-redux";
import styles from "./CartButton.module.css";

const CartButton = ({ onShow }) => {
  const { totalAmount } = useSelector((state) => state.cart);

  return (
    <div className={styles.button} onClick={onShow}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={styles.count}>{totalAmount}</span>
    </div>
  );
};

export default CartButton;
