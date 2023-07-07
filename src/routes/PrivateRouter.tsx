import { Route, Routes } from 'react-router-dom';

import PrivateLayout from '../layouts/PrivateLayout/PrivateLayout';
import SideLayout from '../layouts/SideLayout/SideLayout';
import HomePage from '../page/HomePage/HomePage';

const PrivateRouter = () => {
  return (
    <>
      <PrivateLayout />
      <div className={'flex justify-around'}>
        <SideLayout />
        <Routes>
          <Route element={<HomePage />} path="/" />;
          <Route element={<HomePage />} path="*" />;
        </Routes>
      </div>
    </>
  );
};

export default PrivateRouter;
