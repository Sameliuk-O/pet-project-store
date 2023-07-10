import { Link } from 'react-router-dom';

import useLastPath from '../../hooks/useLastPath';
import { useAllCategoryQuery } from '../../services/AllCategoryServices';

const Category = () => {
  const { data } = useAllCategoryQuery();
  const categoryPath = useLastPath();
  const decodedString = decodeURIComponent(categoryPath.replace(/\+/g, ' '));

  return (
    <div>
      <p className="pb-2 text-lg text-sky-500">Category</p>
      <ul>
        {data?.map((el, index) => (
          <div>
            {el === decodedString ? (
              <li className="pb-1 underline decoration-sky-500" key={el + index}>
                <Link className="text-sky-500" to={`/store/category/${el}`}>
                  {el.charAt(0).toUpperCase() + el.slice(1)}
                </Link>
              </li>
            ) : (
              <li className="pb-1 " key={el + index}>
                <Link to={`/store/category/${el}`}>{el.charAt(0).toUpperCase() + el.slice(1)}</Link>
              </li>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Category;
