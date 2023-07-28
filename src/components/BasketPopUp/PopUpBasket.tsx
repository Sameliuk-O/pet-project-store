import React from 'react';

import { ProductInBasket } from 'components/ProductInBasket';

import { useAppSelector } from '../../hooks';
import { IAddProductInBasket } from '../../interface';

interface PopupProps {
  onClose: () => void;
}

const PopUpBasket: React.FC<PopupProps> = ({ onClose }) => {
  const productCart = useAppSelector((state) => state.productCart);

  const calculateTotalPrice = () => {
    if (!productCart) return 0;

    let totalPrice = 0;
    productCart.product.forEach((el: IAddProductInBasket) => {
      totalPrice += Number(el.productInfo?.price) * Number(el.products.quantity);
    });
    return totalPrice.toFixed(2);
  };

  return (
    <div>
      <div>
        <button
          className="absolute -right-4 top-0 -mt-2 rounded-full bg-sky-400 p-1 px-3 text-white"
          onClick={onClose}
        >
          X
        </button>
        <div className="p-10 pt-20">
          <h1>Your shopping</h1>
          <div className="pt-10">
            <div className="max-h-96 overflow-y-auto p-10">
              {productCart && productCart.product.length > 0 ? (
                productCart.product.map((el: IAddProductInBasket) => (
                  <ProductInBasket
                    category={el.category}
                    closePopup={onClose}
                    id={el.products.productId}
                    image={el.productInfo?.image}
                    key={el.products.productId}
                    price={el.productInfo?.price}
                    quantity={el.products.quantity}
                    title={el.productInfo?.title}
                  />
                ))
              ) : (
                <p>Your basket is empty</p>
              )}
              {productCart && productCart.product.length > 0 && (
                <div className="mt-4 flex justify-around">
                  <button className="rounded-lg bg-sky-400 px-10 py-2 text-stone-50 hover:bg-blue-200 hover:text-blue-600">
                    Checkout now
                  </button>
                  <div className="py-2">
                    <strong>Total Price: {calculateTotalPrice()}</strong>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpBasket;
