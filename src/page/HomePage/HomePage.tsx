// import { useLoginUserMutation } from '../../services/LoginServices';

import { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { RootState } from '../../store/store';

const HomePage = () => {
  const token = useSelector((state: RootState) => state.login);

  useEffect(() => {
    console.log(token);
  }, [token]);
  return <div>1</div>;
};

export default HomePage;
