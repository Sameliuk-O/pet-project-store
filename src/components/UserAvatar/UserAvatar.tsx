import { NavLink } from 'react-router-dom';

import { useAppSelector } from '../../hooks';

const UserAvatar: React.FC = () => {
  const userName = useAppSelector((state) => state.auth.username);
  const firstLaterUserName = userName.charAt(0).toUpperCase();

  return (
    <NavLink to={'/user'}>
      <div className="rounded-full bg-amber-400 px-5 py-3">
        <p className="first-letter:uppercase">{firstLaterUserName}</p>
      </div>
    </NavLink>
  );
};

export default UserAvatar;
