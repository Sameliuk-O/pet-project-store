import { useEffect } from 'react';

import { NavLink } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { useGetAllUserQuery } from '../../services/GetAllUser';
import { setCurrentUser } from '../../store/userSlice';

const UserAvatar: React.FC = () => {
  const userName = useAppSelector((state) => state.login.username);
  const firstLaterUserName = userName.charAt(0).toUpperCase();
  const dispatch = useAppDispatch();
  const { data, error } = useGetAllUserQuery();
  const currentUser = () => {
    const user = data?.find((el) => el.username === userName);
    user != undefined ? dispatch(setCurrentUser(user)) : console.log(error);
  };

  useEffect(() => {
    currentUser();
  });

  return (
    <NavLink to={'/user'}>
      <div className="rounded-full bg-amber-400 px-5 py-3">
        <p className="first-letter:uppercase">{firstLaterUserName}</p>
      </div>
    </NavLink>
  );
};

export default UserAvatar;
