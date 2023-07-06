import { useState } from "react";
import SubCategoryList from "../SubCategory/SubCategoryList";
import { useSearchParams } from "react-router-dom";

const Category = ({ id, name }) => {
  const [isPress, setIsPress] = useState(false);

  const [queryParams, setQueryParams] = useSearchParams();

  const showSubCategoryHandler = () => {
    setIsPress(!isPress);
    setQueryParams({ categoryId: id });
  };

  return (
    <li key={id}>
      <div onClick={showSubCategoryHandler}>
        {name}
        <button>▼</button>
      </div>
      {isPress && <SubCategoryList parentId={id} />}
    </li>
  );
};
export default Category;
