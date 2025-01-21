import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router';

interface ICheckAuth {
  isAuthenticated: boolean | undefined;
  children: ReactNode;
}

function CheckAuth({ isAuthenticated, children }: ICheckAuth) {
  const location = useLocation();
  const { pathname } = location;

  // Redirect authenticated users away from the root or auth routes
  if (
    isAuthenticated &&
    (pathname === '/' || pathname.startsWith('/auth'))
  ) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  // Redirect unauthenticated users away from admin routes
  if (!isAuthenticated && pathname.startsWith('/admin')) {
    return <Navigate to="/" replace />;
  }

  // Render the children if no redirects are needed
  return <>{children}</>;
}

export default CheckAuth;
