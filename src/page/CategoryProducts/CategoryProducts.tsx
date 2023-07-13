import { toast } from 'react-toastify';

import { ProductCard } from 'components/ProductCard';
import { useLastPath } from 'hooks';
import { useGetProductSameCategoryQuery } from 'services/productServices';

import { Loading } from '../../components/Loading';

const CategoryProducts: React.FC = () => {
  const categoryPath = useLastPath();
  const { data, isLoading, error } = useGetProductSameCategoryQuery(categoryPath);

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
    <div className="min-w-[80%]">
      {isLoading ? (
        <Loading />
      ) : (
        <ul className="mx-10 my-5 grid grid-cols-5">
          {data?.map((el) => (
            <ProductCard
              category={el.category}
              description={el.description}
              id={el.id}
              image={el.image}
              key={el.id}
              price={el.price}
              rating={el.rating}
              title={el.title}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryProducts;
