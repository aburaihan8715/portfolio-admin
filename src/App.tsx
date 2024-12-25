import { BrowserRouter, Route, Routes } from 'react-router';
import AppLayout from './components/layouts/app-layout';

import LoginPage from './pages/app-view/login';
import RegisterPage from './pages/app-view/register';
import AdminLayout from './components/layouts/admin-layout';

import ResetPasswordPage from './pages/app-view/reset-password';
import ForgetPasswordPage from './pages/app-view/forget-password';
import UpdateProfilePage from './pages/app-view/update-profile';
import ChangePasswordPage from './pages/app-view/change-password';

import NotFound from './pages/not-found';

import AdminDashboard from './pages/admin-view/dashboard';

import UnauthPage from './pages/unauth';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* ===== for app view =====*/}
        <Route path="/" element={<AppLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="reset-password" element={<ResetPasswordPage />} />
          <Route path="forget-password" element={<ForgetPasswordPage />} />
          <Route path="update-profile" element={<UpdateProfilePage />} />
          <Route path="change-password" element={<ChangePasswordPage />} />
        </Route>

        {/* ===== for admin =====*/}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route>

        {/* ===== for unauth=====*/}
        <Route path="/unauth" element={<UnauthPage />} />

        {/* ===== for not found =====*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
