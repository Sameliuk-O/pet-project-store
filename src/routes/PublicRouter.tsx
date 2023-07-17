import { Navigate, Route, Routes } from 'react-router-dom';

import LoginPage from 'page/Login/LoginPage';

import Landing from '../page/Landing/Landing';
const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<LoginPage />} path="/login" />
      <Route element={<Navigate to="/login" replace />} path="/*" />
      <Route element={<Landing />} path="/landing" />
    </Routes>
  );
};

export default App;
