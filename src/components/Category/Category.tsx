import { Link } from 'react-router-dom';

import { useAllCategoryQuery } from '../../services/AllCategoryServices';

const Category = () => {
  const { data } = useAllCategoryQuery();
  return (
    <div>
      <p>Category</p>
      <ul>
        {data?.map((el, index) => (
          <li key={el + index}>
            <Link to={`/store/category/${el}`}>{el}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
