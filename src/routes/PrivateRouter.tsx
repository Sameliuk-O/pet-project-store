import { Navigate, Route, Routes } from 'react-router-dom';

import PrivateLayout from 'layouts/PrivateLayout/PrivateLayout';
import SideLayout from 'layouts/SideLayout/SideLayout';

import CategoryProducts from '../page/CategoryProducts/CategoryProducts';
import HomePage from '../page/HomePage/HomePage';

const PrivateRouter = () => {
  return (
    <>
      <PrivateLayout />
      <div className="flex justify-around">
        <SideLayout />
        <Routes>
          <Route element={<HomePage />} path="/" />;
          <Route element={<CategoryProducts />} path="/store/category/:parameter" />;
          <Route element={<Navigate to="/" replace />} path="/*" />
        </Routes>
      </div>
    </>
  );
};

export default PrivateRouter;
