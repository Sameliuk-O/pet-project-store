import { useLocation } from 'react-router-dom';

const useLastPath = () => {
  const location = useLocation();
  const path = location.pathname;
  const parts = path.split('/');
  return parts[parts.length - 1];
};

export default useLastPath;
