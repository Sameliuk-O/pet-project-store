import { Route, Routes } from 'react-router-dom';

import LoginPage from '../page/LoginPage/LoginPage';
import RegistrationPage from '../page/RegistrationPage/RegistrationPage';

const PublicRouter = () => {
  return (
    <Routes>
      <Route element={<RegistrationPage />} path="/registration" />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<LoginPage />} path="*" />
    </Routes>
  );
};

export default PublicRouter;
