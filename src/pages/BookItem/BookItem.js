import { useParams } from "react-router-dom";
import { useGetBookDetailsQuery } from "../../features/productsApiSlice";

const BookItem = () => {
  const { bookId } = useParams();
  const { data, isLoading, isError } = useGetBookDetailsQuery(bookId);

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Something went wrong...</div>;
  else return <h1>{data.title}</h1>;
};
export default BookItem;
