import { useAllCategoryQuery } from '../../services/AllCategoryServices';

const Category = () => {
  const { data } = useAllCategoryQuery();
  console.log(data);
  return (
    <div>
      <p>Category</p>
      <div>1</div>
    </div>
  );
};

export default Category;
