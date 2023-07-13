import { ProductCard } from 'components/ProductCard';
import { useLastPath } from 'hooks';
import { useGetProductSameCategoryQuery } from 'services/productServices';

const CategoryProducts: React.FC = () => {
  const categoryPath = useLastPath();
  const { data } = useGetProductSameCategoryQuery(categoryPath);

  return (
    <div>
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
    </div>
  );
};

export default CategoryProducts;
