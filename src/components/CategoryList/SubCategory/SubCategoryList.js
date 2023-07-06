import { useGetCategoriesQuery } from "../../../features/categoriesApiSlice";

const SubCategoryList = ({ parentId }) => {
  const { data, isLoading } = useGetCategoriesQuery(parentId);

  if (isLoading) return <div>Loading ....</div>;
  else
    return (
      <ul>
        {data.map((s) => (
          <li key={s.id}>{s.name}</li>
        ))}
      </ul>
    );
};

export default SubCategoryList;
