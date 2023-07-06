import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import Login from "./pages/Login/Login";
import Error from "./pages/Error/Error";
import BookItem from "./pages/BookItem/BookItem";
import Register from "./pages/Register/Register";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import Checkout from "./pages/Checkout/Checkout";
import OrderPlaced from "./pages/OrderPlaced/OrderPlaced";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="" element={<PrivateRoute />}>
            <Route path="/profile" element={<UserDashboard />} />
            <Route path="/order-placed" element={<OrderPlaced />} />
          </Route>
          <Route path="checkout" element={<Checkout />} />
          <Route path="search/books/:bookId" element={<BookItem />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer />
    </Fragment>
  );
};

export default App;
