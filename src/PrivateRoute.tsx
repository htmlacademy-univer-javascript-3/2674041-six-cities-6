import { Navigate } from 'react-router-dom';
import AppRoutes from '@/src/route';


type PrivateRouteProps = {
  auth: boolean;
  children: JSX.Element;
}

function PrivateRoute({ auth, children }: PrivateRouteProps): JSX.Element {
  return auth ? children : <Navigate to={AppRoutes.Login} />;
}


export default PrivateRoute;
