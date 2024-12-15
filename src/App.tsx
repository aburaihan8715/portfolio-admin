import { BrowserRouter, Route, Routes } from 'react-router';
import AppLayout from './components/layouts/AppLayout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import DashboardLayout from './components/layouts/DashboardLayout';
import AdminHomePage from './pages/dashboard/admin/AdminHomePage';
import VendorHomePage from './pages/dashboard/vendor/VendorHomePage';
import CustomerHomePage from './pages/dashboard/customer/CustomerHomePage';
import ResetPasswordPage from './pages/auth/ResetPasswordPage';
import ForgetPasswordPage from './pages/auth/ForgetPasswordPage';
import UpdateProfilePage from './pages/auth/UpdateProfilePage';
import ChangePasswordPage from './pages/auth/ChangePasswordPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import PaymentOptionsPage from './pages/payment/PaymentOptions';
import StripePayment from './pages/payment/StripePayment';
import ProtectedRoute from './components/layouts/ProtectedRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* ===== For AppLayout =====*/}
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="product-details/:id"
            element={<ProductDetailsPage />}
          />
          <Route
            path="cart"
            element={
              <ProtectedRoute role="customer">
                <CartPage />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="reset-password" element={<ResetPasswordPage />} />
        <Route path="forget-password" element={<ForgetPasswordPage />} />
        <Route path="payment-options" element={<PaymentOptionsPage />} />
        <Route path="stripe-payment" element={<StripePayment />} />

        {/*===== For DashboardLayout =====*/}
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route path="admin/home" element={<AdminHomePage />} />
          <Route path="vendor/home" element={<VendorHomePage />} />
          <Route path="customer/home" element={<CustomerHomePage />} />

          <Route path="update-profile" element={<UpdateProfilePage />} />
          <Route path="change-password" element={<ChangePasswordPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
