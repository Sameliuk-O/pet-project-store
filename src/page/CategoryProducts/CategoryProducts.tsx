import { useLocation } from 'react-router-dom';

// import { useGetProductSameCategoryQuery } from '../../services/ProductSameCategory';

const CategoryProducts: React.FC = () => {
  const categoryPath = useLocation();
  console.log('categoryPath', categoryPath);
  // const { data } = useGetProductSameCategoryQuery(categoryPath);
  // console.log(data);
  return <div>1</div>;
};

export default CategoryProducts;
