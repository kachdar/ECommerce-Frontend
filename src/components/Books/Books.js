import { Fragment, useState } from "react";
import BookList from "./BookList/BookList";
import PromoText from "../PromoText/PromoText";
import CategoryList from "../CategoryList/CategoryList";
import headerImg from "../../assets/images/header-bg.jpg";
import styles from "./Books.module.css";

const Books = () => {
  const[categoryId, setCategoryId]= useState();
  const filterHandler = (id)=>{
    setCategoryId(id);
  }
  return (
    <Fragment>
      <div className={styles["header-image"]}>
        <img src={headerImg} alt="Autumn" />
      </div>
      <PromoText />
      <div className={styles["book-container"]}>
        <CategoryList onFilter={filterHandler} />
        <BookList categoryId={categoryId}/>
      </div>
    </Fragment>
  );
};
export default Books;
