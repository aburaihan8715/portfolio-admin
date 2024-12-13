import { BrowserRouter, Route, Routes } from 'react-router';
import AppLayout from './components/layouts/AppLayout';
import HomePage from './pages/common/HomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import DashboardLayout from './components/layouts/DashboardLayout';
import AdminHomePage from './pages/dashboard/admin/AdminHomePage';
import VendorHomePage from './pages/dashboard/vendor/VendorHomePage';
import CustomerHomePage from './pages/dashboard/customer/CustomerHomePage';
import ResetPassword from './pages/auth/ResetPassword';
import ForgetPassword from './pages/auth/ForgetPassword';
import UpdateProfile from './pages/auth/UpdateProfile';
import ChangePassword from './pages/auth/ChangePassword';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* ===== For AppLayout =====*/}
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="forget-password" element={<ForgetPassword />} />

        {/*===== For DashboardLayout =====*/}
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route path="admin/home" element={<AdminHomePage />} />
          <Route path="vendor/home" element={<VendorHomePage />} />
          <Route path="customer/home" element={<CustomerHomePage />} />

          {/* common */}
          <Route path="update-profile" element={<UpdateProfile />} />
          <Route path="change-password" element={<ChangePassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
