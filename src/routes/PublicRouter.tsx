import { Navigate, Route, Routes } from 'react-router-dom';

import LoginPage from 'page/LoginPage/LoginPage';
const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<LoginPage />} path="/login" />
      <Route element={<Navigate to="/login" replace />} path="/*" />
    </Routes>
  );
};

export default App;
