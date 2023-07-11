import { Link } from 'react-router-dom';

import { Rating } from 'components/Rating/Rating';

import useLastPath from '../../hooks/useLastPath';
import { useGetProductCardQuery } from '../../services/ProductServices';
import HomeSvg from '../../svg/homepage-icon.svg';

const Product = () => {
  const productPath = useLastPath();

  const { data } = useGetProductCardQuery(productPath);
  return (
    <div>
      <div className="flex pl-5 pt-5">
        <Link to="/">
          <img alt="home page" className="py-1 pr-1" src={HomeSvg} />
        </Link>
        <Link className="text-gray-400 underline" to={`/store/category/${data?.category}`}>
          / {data?.category}
        </Link>
      </div>
      <div className="flex">
        <div className="p-5">
          <div className="p-24 pt-16">
            <img alt={data?.title} className="m-auto max-h-96" src={data?.image} />
          </div>
        </div>
        <div className="ml-10">
          <h1 className="pt-16 text-xl font-bold">{data?.title}</h1>
          <p className="max-w-sm pt-16 text-slate-500">{data?.description}</p>
          <div className="pt-5">
            <Rating rating={data?.rating.rate} />
          </div>
          <div className="flex justify-center pt-5">
            <button className="rounded-lg bg-sky-400 p-3 text-gray-50 hover:bg-sky-500">
              Buy now {data?.price}$
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
