import React, { useEffect, useState } from 'react';

import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

import { addProduct } from 'store/productSlice';

import { Loading } from '../../components/Loading';
import Notification from '../../components/Notification/Notification';
import { Rating } from '../../components/Rating';
import { useAppDispatch, useAppSelector, useLastPath, useNotification } from '../../hooks';
import { IGetProduct } from '../../interface';
import { useAddProductCartMutation, useGetProductCardQuery } from '../../services/productServices';
import HomeSvg from '../../svg/homepage-icon.svg';

const Product: React.FC = () => {
  const productPath = useLastPath();
  const date = dayjs().format('YYYY-MM-DD');
  const dispatch = useAppDispatch();
  const [requestAddProductCart, { isLoading, error }] = useAddProductCartMutation();
  const productData = useGetProductCardQuery(productPath);
  const { id } = useAppSelector((state) => state.currentUser);
  const productsInCart = useAppSelector((state) => state.productCart);
  const [counter, setCounter] = useState(1);
  const [isProductInCart, setIsProductInCart] = useState(false);
  const { notification, showNotification } = useNotification();
  const handleClick = async () => {
    if (productData.data) {
      const res: {
        data?: IGetProduct;
        error?: FetchBaseQueryError | SerializedError;
      } = await requestAddProductCart({
        date: date,
        products: { productId: productData.data.id, quantity: counter },
        userId: id,
      });
      if (res && res.data) {
        await dispatch(
          addProduct([
            {
              date: date,
              productInfo: {
                image: productData.data.image,
                price: productData.data.price,
                title: productData.data.title,
              },
              products: { productId: productData.data.id, quantity: counter },
              userId: id,
            },
          ])
        );
      } else {
        console.log(res.error);
      }
    } else {
      console.log(error);
    }
  };

  useEffect(() => {
    const element = productsInCart?.product.find(
      (el) => el.products.productId === productData?.data?.id
    );
    if (element) {
      setIsProductInCart(true);
    }
  }, [productsInCart?.product]);

  const increase = () => {
    setCounter((count) => count + 1);
  };

  const decrease = () => {
    if (counter > 1) {
      setCounter((count) => count - 1);
    } else {
      showNotification(`${error}`, 5000);
    }
  };

  return (
    <div className="min-w-[80%]">
      {productData.isLoading ? (
        <Loading />
      ) : (
        <div className="mx-10 ">
          <div className="flex pl-5 pt-5">
            <Link to="/">
              <img alt="home page" className="py-1 pr-1" src={HomeSvg} />
            </Link>
            <Link
              className="text-gray-400 underline"
              to={`/store/category/${productData.data?.category}`}
            >
              / {productData.data?.category}
            </Link>
          </div>
          <div className="flex">
            <div className="p-5">
              <div className="p-10">
                <img
                  alt={productData.data?.title}
                  className="m-auto max-h-96"
                  src={productData.data?.image}
                />
              </div>
            </div>
            <div className="ml-10 p-10">
              <h1 className="pt-16 text-xl font-bold">{productData.data?.title}</h1>
              <p className="max-w-sm pt-16 text-slate-500">{productData.data?.description}</p>
              <div className="pt-5">
                <Rating rating={productData.data?.rating.rate} />
              </div>
              <div className="flex justify-center pt-10">
                <button
                  className="mr-10 rounded-lg bg-sky-400 px-10 py-1 text-gray-50 hover:bg-sky-500"
                  onClick={decrease}
                >
                  -
                </button>
                <p className="py-1">{counter}</p>
                <button
                  className="ml-10 rounded-lg bg-sky-400 px-10 py-1 text-gray-50 hover:bg-sky-500"
                  onClick={increase}
                >
                  +
                </button>
              </div>
              <div className="flex justify-center pt-5">
                {isProductInCart ? (
                  <div>
                    <p>Product already in cart</p>
                  </div>
                ) : (
                  <button
                    className="rounded-lg bg-sky-400 p-3 px-20 text-gray-50 hover:bg-sky-500"
                    onClick={handleClick}
                  >
                    {isLoading ? (
                      <div className="h-5 w-5 animate-spin rounded-full border-y-4 border-blue-500" />
                    ) : (
                      `Buy now ${Number(productData.data?.price) * counter}$`
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
          {notification && <Notification value={notification} />}
        </div>
      )}
    </div>
  );
};

export default Product;