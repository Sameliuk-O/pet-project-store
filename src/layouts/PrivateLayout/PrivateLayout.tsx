import { NavLink } from 'react-router-dom';

import { UserAvatar } from 'components/UserAvatar';

import { ShoppingBox } from '../../components/ShoppingBox';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setLoginUser } from '../../store/authSlice';

const PrivateLayout = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.productCart);

  const handleLogOut = () => {
    dispatch(setLoginUser({ auth: false, token: '', username: '' }));
  };

  return (
    <div className="flex justify-between border-b-2 border-solid border-slate-300 bg-slate-200 p-5 pl-24 pr-10">
      <NavLink to="/">STORE</NavLink>
      <div className="flex">
        <ShoppingBox counter={product.product.length} />
        <UserAvatar />
        <NavLink
          className="ml-16 rounded-lg bg-sky-400 p-1 text-sm"
          to="/login"
          onClick={handleLogOut}
        >
          Log out
        </NavLink>
      </div>
    </div>
  );
};

export default PrivateLayout;
