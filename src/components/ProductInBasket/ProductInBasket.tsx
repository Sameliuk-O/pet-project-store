import { deleteProduct } from 'store/productSlice';

import { useAppDispatch } from '../../hooks';

interface IProductInBasket {
  id: number;
  image?: string;
  price?: string;
  quantity: number;
  title?: string;
}
const ProductInBasket: React.FC<IProductInBasket> = ({ image, price, title, quantity, id }) => {
  const dispatch = useAppDispatch();
  const handleDeleteClick = (value: number) => {
    dispatch(deleteProduct(value));
  };
  return (
    <div className="grid grid-cols-7 items-center justify-between border-b-2 p-3">
      <div className="col-span-1 flex justify-center">
        <img alt={title} className="h-20 w-24" src={image} />
      </div>
      <div className="col-span-3 flex justify-center">
        <p>{title}</p>
      </div>
      <div className="col-span-1 flex justify-center">
        <p className="pr-3">
          Quantity products:
          {quantity}
        </p>
      </div>
      <div className="col-span-1 flex justify-center">
        <p>Price: {price}</p>
      </div>
      <div className="col-span-1">
        <button onClick={() => handleDeleteClick(id)}>Delete</button>
      </div>
    </div>
  );
};

export default ProductInBasket;