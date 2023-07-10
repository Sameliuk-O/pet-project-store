import { Navigate, Route, Routes } from 'react-router-dom';

import LoginPage from 'page/LoginPage/LoginPage';
const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default App;
