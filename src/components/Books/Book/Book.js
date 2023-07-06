import styles from "./Book.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../features/cartSlice";

const Book = ({ book }) => {
  const { id, title, author, description, price, imageURL } = book;
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const isInCart = cartItems.some((x) => x.id === id);

  const addToCartHandler = () => {
    const item = { ...book, quantity: 1 };
    dispatch(addToCart(item));
  };

  return (
    <div className={styles.movie}>
      <Link to={`books/${id}`}>
        <img src={imageURL} alt={title} />
      </Link>
      <div className={styles["movie-info"]}>
        <h3>{title}</h3>
        <h4>{author}</h4>
        <span>Price: {price}</span>
      </div>
      {!isInCart && <button onClick={addToCartHandler}>Add to cart</button>}
      {isInCart && <button>Go To Cart</button>}
      <div className={styles.overview}>
        <h3>Overview:</h3>
        {description}
      </div>
    </div>
  );
};
export default Book;
