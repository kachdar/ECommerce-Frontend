import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Navigation.module.css";
import Cart from "../Cart/Cart";
import CartButton from "./CartButton/CartButton";
import Modal from "../shared/Modal/Modal";

import { logout, setCredentials } from "../../features/authSlice";

const Navigation = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showCartHandler = () => {
    setIsCartVisible(true);
  };
  const hideCartHandler = () => {
    setIsCartVisible(false);
  };

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <Fragment>
      <div className={styles.header}>
        <Link to="/" className={styles.logo}>
          BookShop
        </Link>

        <nav className={styles.nav}>
          <Link to="/search" className={styles.nav__link}>
            Shop
          </Link>
          <Link to="/contacts" className={styles.nav__link}>
            Contacts
          </Link>
          <CartButton onShow={showCartHandler} />

          {isCartVisible && (
            <Modal onHide={hideCartHandler}>
              <Cart onHide={hideCartHandler} />
            </Modal>
          )}

          {token && (
            <Link to="/profile" className={styles.logo}>
              <FaUser />
            </Link>
          )}

          {token && (
            <button onClick={logoutHandler}>
              <FaSignOutAlt />
              Logout
            </button>
          )}

          {!token && (
            <Link to="/login" className={styles.logo}>
              <img src="assets/images/login.png" alt="Login" />
            </Link>
          )}
        </nav>
      </div>
    </Fragment>
  );
};
export default Navigation;
