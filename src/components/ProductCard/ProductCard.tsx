import { useNavigate } from 'react-router-dom';

import { IProduct } from '../../interface/IProduct';
import { Rating } from '../Rating/Rating';

const ProductCard: React.FC<IProduct> = ({ id, image, price, rating, title }: IProduct) => {
  const navigate = useNavigate();
  return (
    <li
      className="flex flex-col space-y-2 border-b-2 border-r-2 p-5 hover:bg-slate-50"
      onClick={() => navigate(`/store/${id}`)}
    >
      <img alt={title} className="m-auto max-h-40" src={image} />
      <p className="pt-3">{title.slice(0, 20)}...</p>
      <div>
        <Rating rating={rating.rate} />
      </div>
      <div className="align-bottom">
        <span className="float-right">{price}$</span>
      </div>
    </li>
  );
};

export default ProductCard;
