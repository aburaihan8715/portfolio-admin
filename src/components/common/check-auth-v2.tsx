import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router';

interface ICheckAuth {
  isAuthenticated: boolean;
  role: string;
  children: ReactNode;
}

function CheckAuthV2({ isAuthenticated, role, children }: ICheckAuth) {
  const location = useLocation();

  console.log(location.pathname, isAuthenticated);

  if (location.pathname === '/') {
    if (!isAuthenticated) {
      return <Navigate to="/auth/login" />;
    } else {
      if (role === 'admin') {
        return <Navigate to="/admin/dashboard" />;
      } else {
        return <Navigate to="/shop/home" />;
      }
    }
  }

  if (
    !isAuthenticated &&
    !(
      location.pathname.includes('/login') ||
      location.pathname.includes('/register')
    )
  ) {
    return <Navigate to="/auth/login" />;
  }

  if (
    isAuthenticated &&
    (location.pathname.includes('/login') ||
      location.pathname.includes('/register'))
  ) {
    if (role === 'admin') {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/shop/home" />;
    }
  }

  if (
    isAuthenticated &&
    role !== 'admin' &&
    location.pathname.includes('admin')
  ) {
    return <Navigate to="/unauth-page" />;
  }

  if (
    isAuthenticated &&
    role === 'admin' &&
    location.pathname.includes('shop')
  ) {
    return <Navigate to="/admin/dashboard" />;
  }

  return <>{children}</>;
}

export default CheckAuthV2;
