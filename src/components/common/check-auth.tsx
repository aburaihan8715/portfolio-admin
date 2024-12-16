import { logout } from '@/redux/features/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { ReactNode, useEffect } from 'react';
import { Navigate } from 'react-router';

type TProtectedRoute = {
  children: ReactNode;
  role: string | undefined;
};

const CheckAuth = ({ children, role }: TProtectedRoute) => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const isUnauthorized = role !== undefined && role !== user?.role;

  useEffect(() => {
    if (isUnauthorized) {
      dispatch(logout());
    }
  }, [isUnauthorized, dispatch]);

  if (!user) {
    return <Navigate to="/" replace={true} />;
  }

  if (isUnauthorized) {
    return <Navigate to="/" replace={true} />;
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
