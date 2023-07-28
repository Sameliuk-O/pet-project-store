import { useEffect, useState } from 'react';

import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

import { IGetProduct, IProduct } from 'interface';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { useAddProductCartMutation } from '../../services/productServices';
import { addProduct } from '../../store/productSlice';
import Shopping from '../../svg/shopping.svg';
import { Rating } from '../Rating';

const ProductCard: React.FC<IProduct> = ({ ...el }: IProduct) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useAppSelector((state) => state.currentUser);
  const productsInCart = useAppSelector((state) => state.productCart);
  const [requestAddProductCart] = useAddProductCartMutation();
  const date = dayjs().format('YYYY-MM-DD');
  const [isProductInCart, setIsProductInCart] = useState(false);

  const handleClick = async (e: React.SyntheticEvent<EventTarget>) => {
    e.stopPropagation();
    const res: {
      data?: IGetProduct;
      error?: FetchBaseQueryError | SerializedError;
    } = await requestAddProductCart({
      date: date,
      products: { productId: el.id, quantity: 1 },
      userId: id,
    });
    if (res && res.data) {
      await dispatch(
        addProduct([
          {
            date: date,
            productInfo: {
              image: el.image,
              price: el.price,
              title: el.title,
            },
            products: { productId: el.id, quantity: 1 },
            userId: id,
          },
        ])
      );
    }
  };
  useEffect(() => {
    const element = productsInCart?.product.find((elem) => elem.products.productId === el.id);
    if (element) {
      setIsProductInCart(true);
    } else {
      setIsProductInCart(false);
    }
  }, [productsInCart?.product]);

  return (
    <>
      <li
        className="flex cursor-pointer flex-col space-y-2 border-b-2 border-r-2 p-5 hover:bg-slate-50"
        onClick={() => navigate(`/store/${el.category}/${el.id}`)}
      >
        <img alt={el.title} className="m-auto max-h-40" src={el.image} />
        <p className="pt-3">{el.title.slice(0, 20)}...</p>
        <div>
          <Rating rating={el.rating.rate} />
        </div>
        <div className="flex justify-between">
          <p className="my-auto">${el.price}</p>
          <button
            className={`rounded-full bg-sky-400 p-4 hover:bg-sky-200 ${
              isProductInCart ? 'cursor-not-allowed opacity-50' : ''
            }`}
            disabled={isProductInCart}
            onClick={(e) => handleClick(e)}
          >
            {isProductInCart ? 'Bought' : <img alt="box" src={Shopping} />}
          </button>
        </div>
      </li>
    </>
  );
};

export default ProductCard;
