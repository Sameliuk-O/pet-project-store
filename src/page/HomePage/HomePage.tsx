import ProductCard from 'components/ProductCard/ProductCard';

import { useAllProductQuery } from '../../services/ProductServices';

const HomePage = () => {
  const { data } = useAllProductQuery();

  return (
    <div>
      <ul className={'mx-10 my-5 grid grid-cols-5 '}>
        {data?.length ? (
          data.map((el) => (
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
          ))
        ) : (
          <div> 1</div>
        )}
      </ul>
    </div>
  );
};

export default HomePage;
