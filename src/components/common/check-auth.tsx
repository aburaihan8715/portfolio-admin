import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router';

interface ICheckAuth {
  isAuthenticated: boolean;
  role: string;
  children: ReactNode;
}

function CheckAuth({ isAuthenticated, role, children }: ICheckAuth) {
  const location = useLocation();

  // NOTE: if we want to go desire page after login this code should not use
  // manage login and register
  // if (
  //   (location.pathname.includes('/login') ||
  //     location.pathname.includes('/register')) &&
  //   isAuthenticated
  // ) {
  //   if (role === 'admin') {
  //     return <Navigate to="/admin/dashboard" />;
  //   } else if (role === 'vendor') {
  //     return <Navigate to="/vendor/dashboard" />;
  //   } else if (role === 'customer') {
  //     return <Navigate to="/customer/dashboard" />;
  //   }
  // }

  // manage product details and cart

  // if (
  //   (location.pathname.includes('/product-details') ||
  //     location.pathname.includes('/cart')) &&
  //   !isAuthenticated
  // ) {
  //   return <Navigate to="/auth/login" state={{ from: location }} />;
  // }

  // mange update-profile and change-password
  if (
    (location.pathname.includes('/update-profile') ||
      location.pathname.includes('/change-password')) &&
    !isAuthenticated
  ) {
    return <Navigate to="/auth/login" state={{ from: location }} />;
  }

  // manage reset-password and forget-password
  if (
    (location.pathname.includes('/reset-password') ||
      location.pathname.includes('/forget-password')) &&
    isAuthenticated
  ) {
    if (role === 'admin') {
      return <Navigate to="/admin/dashboard" />;
    } else if (role === 'vendor') {
      return <Navigate to="/vendor/dashboard" />;
    } else if (role === 'customer') {
      return <Navigate to="/customer/dashboard" />;
    }
  }

  // manage admin
  if (location.pathname.includes('admin') && isAuthenticated) {
    if (role !== 'admin') {
      return <Navigate to="/unauth" />;
    }
  }
  if (location.pathname.includes('admin') && !isAuthenticated) {
    return <Navigate to="/auth/login" state={{ from: location }} />;
  }

  return <>{children}</>;
}

export default CheckAuth;

/*

// NOTE: optimize version

import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router';

interface ICheckAuth {
  isAuthenticated: boolean;
  role: string;
  children: ReactNode;
}

const roleDashboardMap: Record<string, string> = {
  admin: '/admin/dashboard',
  vendor: '/vendor/dashboard',
  customer: '/customer/dashboard',
};

function CheckAuth({ isAuthenticated, role, children }: ICheckAuth) {
  const location = useLocation();
  const { pathname } = location;

  console.log(pathname, isAuthenticated, role);

  // Redirect authenticated users away from login/register pages
  if (pathname.includes('/login') || pathname.includes('/register')) {
    if (isAuthenticated) {
      return <Navigate to={roleDashboardMap[role] || '/'} />;
    }
  }

  // Redirect unauthenticated users from protected profile pages
  if (
    ['/update-profile', '/change-password'].some(path =>
      pathname.includes(path)
    ) &&
    !isAuthenticated
  ) {
    return <Navigate to="/auth/login" state={{ from: location }} />;
  }

  // Redirect authenticated users from password-related pages
  if (
    ['/reset-password', '/forget-password'].some(path =>
      pathname.includes(path)
    ) &&
    isAuthenticated
  ) {
    return <Navigate to={roleDashboardMap[role] || '/'} />;
  }

  // Protect role-specific areas
  if (pathname.includes('/admin')) {
    if (!isAuthenticated) {
      return <Navigate to="/auth/login" state={{ from: location }} />;
    }
    if (role !== 'admin') {
      return <Navigate to="/unauth" />;
    }
  }

  if (pathname.includes('/vendor')) {
    if (!isAuthenticated) {
      return <Navigate to="/auth/login" state={{ from: location }} />;
    }
    if (role !== 'vendor') {
      return <Navigate to="/unauth" />;
    }
  }

  if (pathname.includes('/customer')) {
    if (!isAuthenticated) {
      return <Navigate to="/auth/login" state={{ from: location }} />;
    }
    if (role !== 'customer') {
      return <Navigate to="/unauth" />;
    }
  }

  // Protect payment routes
  if (pathname.includes('/payment') && !isAuthenticated) {
    return <Navigate to="/auth/login" state={{ from: location }} />;
  }

  return <>{children}</>;
}

export default CheckAuth;

*/
