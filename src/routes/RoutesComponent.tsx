import { Route, Routes } from 'react-router-dom';

import RegistrationPage from 'page/RegistrationPage/RegistrationPage';

import HomePage from '../page/HomePage/HomePage';
import LoginPage from '../page/LoginPage/LoginPage';
const RoutesComponent = () => {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<RegistrationPage />} path="/registration" />
      <Route element={<LoginPage />} path="/login" />
    </Routes>
  );
};

export default RoutesComponent;
