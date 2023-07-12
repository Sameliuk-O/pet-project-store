import { Navigate, Route, Routes } from 'react-router-dom';

import PrivateLayout from 'layouts/PrivateLayout/PrivateLayout';
import SideLayout from 'layouts/SideLayout/SideLayout';
import User from 'page/User/User';

import CategoryProducts from '../page/CategoryProducts/CategoryProducts';
import HomePage from '../page/HomePage/HomePage';
import Product from '../page/Product/Product';

const PrivateRouter = () => {
  return (
    <>
      <PrivateLayout />
      <div className="flex h-screen">
        <SideLayout />
        <Routes>
          <Route element={<HomePage />} path="/" />;
          <Route element={<CategoryProducts />} path="/store/category/:parameter" />;
          <Route element={<Product />} path="/store/:productId" />
          <Route element={<User />} path="/user" />
          <Route element={<Navigate to="/" replace />} path="/*" />
        </Routes>
      </div>
    </>
  );
};

export default PrivateRouter;
