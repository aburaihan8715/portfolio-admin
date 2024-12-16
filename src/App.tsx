import { BrowserRouter, Route, Routes } from 'react-router';
import AppLayout from './components/app-view/layout';

import LoginPage from './pages/auth/login';
import RegisterPage from './pages/auth/register';
import AdminLayout from './components/admin-view/layout';

import ResetPasswordPage from './pages/auth/reset-password';
import ForgetPasswordPage from './pages/auth/forget-password';
import UpdateProfilePage from './pages/auth/update-profile';
import ChangePasswordPage from './pages/auth/change-password';
import ProductDetailsPage from './pages/app-view/product-details';

import PaymentOptionsPage from './pages/payment/payment-option';
import StripePayment from './pages/payment/stripe-payment';

import NotFound from './pages/not-found';
import HomePage from './pages/app-view/home';
import CartPage from './pages/app-view/cart';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* ===== for app view =====*/}
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="product-details/:id"
            element={<ProductDetailsPage />}
          />
          <Route path="cart" element={<CartPage />} />
        </Route>

        {/* ===== for admin =====*/}

        {/* ===== for auth =====*/}
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="reset-password" element={<ResetPasswordPage />} />
        <Route path="forget-password" element={<ForgetPasswordPage />} />
        <Route path="payment-options" element={<PaymentOptionsPage />} />
        <Route path="stripe-payment" element={<StripePayment />} />

        {/* ===== for vendor =====*/}
        {/* ===== for customer =====*/}
        <Route path="dashboard" element={<AdminLayout />}>
          <Route path="update-profile" element={<UpdateProfilePage />} />
          <Route path="change-password" element={<ChangePasswordPage />} />
        </Route>

        {/* not found route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
