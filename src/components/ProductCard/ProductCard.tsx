import { useNavigate } from 'react-router-dom';

import { IProduct } from 'interface';

import { Rating } from '../Rating';

const ProductCard: React.FC<IProduct> = ({ ...el }: IProduct) => {
  const navigate = useNavigate();
  return (
    <li
      className="flex cursor-pointer flex-col space-y-2 border-b-2 border-r-2 p-5 hover:bg-slate-50"
      onClick={() => navigate(`/store/${el.category}/${el.id}`)}
    >
      <img alt={el.title} className="m-auto max-h-40" src={el.image} />
      <p className="pt-3">{el.title.slice(0, 20)}...</p>
      <div>
        <Rating rating={el.rating.rate} />
      </div>
      <div className="align-bottom">
        <span className="float-right">${el.price}</span>
      </div>
    </li>
  );
};

export default ProductCard;
