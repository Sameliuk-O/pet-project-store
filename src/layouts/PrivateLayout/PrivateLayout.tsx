import { NavLink, useNavigate } from 'react-router-dom';

import ShoppingBox from '../../components/ShoppingBox/ShoppingBox';
import UserAvatar from '../../components/UserAvatar/UserAvatar';
import { useAppDispatch } from '../../hooks';
import { setLoginUser } from '../../store/loginSlice';

const PrivateLayout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(setLoginUser({ auth: false, token: '', username: '' }));
    navigate('/login');
  };

  return (
    <div className="flex justify-between border-b-2 border-solid border-slate-300 bg-slate-200 p-5 pl-24 pr-10">
      <NavLink to="/">STORE</NavLink>
      <div className="flex">
        <ShoppingBox counter={5} />
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
