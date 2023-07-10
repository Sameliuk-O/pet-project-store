import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
import { useAppSelector } from '../hooks';
const RoutesComponent = () => {
  const auth = useAppSelector((state) => state.login.auth);
  return auth ? <PrivateRouter /> : <PublicRouter />;
};

export default RoutesComponent;
