import { useAppSelector } from '@/redux/hooks';
import { ReactNode } from 'react';
import { Navigate } from 'react-router';

type TProtectedRoute = {
  children: ReactNode;
  role: string | undefined;
};

const CheckAuth = ({ children, role }: TProtectedRoute) => {
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

export default CheckAuth;

// import { ReactNode } from 'react';
// import { useAppDispatch, useAppSelector } from '../../redux/hooks';
// import { logout } from '../../redux/features/auth/authSlice';
// import { Navigate } from 'react-router-dom';

// type TProtectedRoute = {
//   children: ReactNode;
//   role: string | undefined;
// };

// const ProtectedRoute = ({ children, role }: TProtectedRoute) => {
//   const { user } = useAppSelector((state) => state.auth);

//   const dispatch = useAppDispatch();

//   if (!user) {
//     return <Navigate to="/login" replace={true} />;
//   }

//   if (role !== undefined && role !== user?.role) {
//     dispatch(logout());
//     return <Navigate to="/login" replace={true} />;
//   }

//   return children;
// };

// export default ProtectedRoute;
