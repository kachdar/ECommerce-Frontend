import { useSearchParams } from "react-router-dom";
import {
  useGetBooksQuery,
  useSearchBooksQuery,
} from "../../../features/productsApiSlice";
import Book from "../Book/Book";
import styles from "./BookList.module.css";

const BookList = () => {
  const [queryParams, setQueryParams] = useSearchParams();
  const categoryId = queryParams.get("categoryId");
  const brand = queryParams.get("brand");
  const query =  "";
  // `?CategoryId=${categoryId ? categoryId: ""}&Brand=${brand ? brand : ""}`;

  const { data, isLoading, isError } = useSearchBooksQuery(query);


  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Something went wrong...</div>;
  else if (data.length === 0) return <div>There are no avaliable items</div>;
  else {
    const bookList = data.map((book) => <Book key={book.id} book={book} />);
    return <div className={styles.books}>{bookList}</div>;
  }
};
export default BookList;
