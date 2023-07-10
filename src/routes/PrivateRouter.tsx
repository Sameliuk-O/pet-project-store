import { Navigate, Route, Routes } from 'react-router-dom';

import HomePage from '../page/HomePage/HomePage';

const PrivateRouter = () => {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />;
      <Route element={<Navigate to="/" replace />} path="/*" />
    </Routes>
  );
};

export default PrivateRouter;
