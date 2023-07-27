import { useState } from 'react';

import { PopUpBasket } from 'components/BasketPopUp';

import Shopping from '../../svg/shopping.svg';

interface ICounter {
  counter: number;
}

const ShoppingBox: React.FC<ICounter> = ({ counter }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <div className="cursor-pointer">
      <div className="relative mr-10" onClick={openPopup}>
        <img alt="shopping" className="pt-3" src={Shopping} />
        <p className="absolute -right-3 top-0.5 rounded-lg bg-slate-300 px-1.5 py-0.5 text-xs opacity-30">
          {counter ? counter : 0}
        </p>
      </div>
      {isPopupOpen && (
        <>
          <div className="fixed left-52 top-32 z-[1000] h-2/3 w-3/4 rounded-lg bg-stone-50 shadow-lg shadow-black drop-shadow-2xl">
            <PopUpBasket onClose={closePopup} />
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingBox;
