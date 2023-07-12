import { useAppDispatch, useAppSelector } from '../../hooks';
import { useGetAllUserQuery } from '../../services/GetAllUser';
import { setCurrentUser } from '../../store/userSlice';

const UserAvatar: React.FC = () => {
  const userName = useAppSelector((state) => state.login.username);
  const firstLaterUserName = userName.charAt(0).toUpperCase();
  const dispatch = useAppDispatch();
  const { data } = useGetAllUserQuery();
  const currentUser = () => {
    data?.map((el) => {
      if (el.username === userName) {
        dispatch(setCurrentUser(el));
      } else {
        console.log('No user found ');
      }
    });
  };

  currentUser();

  return (
    <div className="rounded-full bg-amber-400 px-5 py-2">
      <p>{firstLaterUserName}</p>
    </div>
  );
};

export default UserAvatar;
