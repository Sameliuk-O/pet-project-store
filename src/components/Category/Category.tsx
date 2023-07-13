import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useLastPath } from 'hooks';
import { useGetAllCategoryQuery } from 'services/productServices';

const Category: React.FC = () => {
  const { data, error } = useGetAllCategoryQuery();
  const categoryPath = useLastPath();
  const decodedString = decodeURIComponent(categoryPath.replace(/\+/g, ' '));

  if (error && 'error' in error && error.error) {
    toast.error(`${error?.error}`, {
      autoClose: 5000,
      closeOnClick: true,
      draggable: true,
      hideProgressBar: false,
      pauseOnHover: true,
      position: 'bottom-right',
      progress: undefined,
      theme: 'light',
    });
  }

  return (
    <div className="h-full">
      <p className="pb-2 text-lg text-sky-500">Category</p>
      <ul>
        {data?.map((el, index) => (
          <div key={el + index}>
            {el === decodedString ? (
              <li className="pb-1 underline decoration-sky-500">
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
