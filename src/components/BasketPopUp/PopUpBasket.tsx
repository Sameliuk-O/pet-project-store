import React from 'react';

import { useAppSelector } from '../../hooks';
import { IAddProductInBasket } from '../../interface';
import ProductInBasket from '../ProductInBasket/ProductInBasket';

interface PopupProps {
  onClose: () => void;
}

const PopUpBasket: React.FC<PopupProps> = ({ onClose }) => {
  const productCart = useAppSelector((state) => state.productCart);

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpBasket;
