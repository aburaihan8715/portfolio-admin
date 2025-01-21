import { useAppSelector } from '@/redux/hooks';
import { ReactNode } from 'react';
import { Navigate } from 'react-router';

type TProtectedRoute = {
  children: ReactNode;
  role: string | undefined;
};

const CheckAuthV2 = ({ children, role }: TProtectedRoute) => {
  const { user } = useAppSelector((state) => state.auth);

  // const isUnauthorized = role !== undefined && role !== user?.role;
  const isAuthorized = role && role === user?.role;

  // useEffect(() => {
  //   if (!isAuthorized) {
  //     dispatch(logout());
  //   }
  // }, [isAuthorized, dispatch]);

  if (!user) {
    return <Navigate to="/" replace={true} />;
  }

  if (!isAuthorized) {
    return <Navigate to="/unauth" replace={true} />;
  }

  return children;
};

export default CheckAuthV2;
