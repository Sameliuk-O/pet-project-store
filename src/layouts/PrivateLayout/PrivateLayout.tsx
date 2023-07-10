import { NavLink, useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../hooks';
import { setLoginUser } from '../../store/loginSlice';

const PrivateLayout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    console.log(1234);
    dispatch(setLoginUser({ auth: false, token: '', username: '' }));
    navigate('/login');
  };

  return (
    <div className="flex justify-around border-b-2 border-solid border-slate-300 bg-slate-200 p-5">
      <NavLink to="/">STORE</NavLink>
      <NavLink to="/login" onClick={handleLogOut}>
        Log out
      </NavLink>
    </div>
  );
};

export default PrivateLayout;
