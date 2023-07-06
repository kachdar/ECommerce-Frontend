import { useEffect, useState } from "react";
import apiUrl from "../../../config/axios-api";
import { baseUrl } from "../../../config/fetch-api";

const BookCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/Category/0`)
      .then((res) => res.json())
      .then(setCategories);

    // apiUrl.get("Category").then((res) => {
    //     console.log(res);
    //     setCategories(res?.data)
    // });
  }, []);

  const selectChangeHandler = (e) => {
    console.log(e.target.value);
    };

  return (
    <select onChange={selectChangeHandler}>
      {categories.map((c) => (
        <option key={c.id} value={c.id}>{c.name}</option>
      ))}
    </select>
  );
};

export default BookCategory;
