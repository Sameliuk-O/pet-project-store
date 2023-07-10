import { IProduct } from '../../interface/IProduct';

const ProductCard: React.FC<IProduct> = ({
  category,
  description,
  id,
  image,
  price,
  rating,
  title,
}: IProduct) => {
  console.log(category, description, id, image, price, rating, title);
  return (
    <li className={'flex flex-col space-y-4 border-b-2 border-r-2 p-5 hover:bg-slate-50'}>
      <img alt={title} className={'min-h-40 m-auto max-h-40'} src={image} />
      <p className={'pt-3'}>{title.slice(0, 20)}...</p>
      <div className={'align-bottom'}>
        <span className={'float-right'}>{price}$</span>
      </div>
    </li>
  );
};

export default ProductCard;
