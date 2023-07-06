import Category from "./Category/Category";
import { useGetCategoriesQuery } from "../../features/categoriesApiSlice";

const CategoryList = () => {
  const { data, isLoading } = useGetCategoriesQuery(0);

  if (!isLoading)
    return (
      <ul>
        {data.map((c) => (
          <Category key={c.id} id={c.id} name={c.name} />
        ))}
      </ul>
    );
    
};
export default CategoryList;
