import { BrowserRouter, Route, Routes } from 'react-router';
import AuthLayout from './components/layouts/auth-layout';
import LoginPage from './pages/auth/login';
import RegisterPage from './pages/auth/register';
import AdminLayout from './components/layouts/admin-layout';
import ResetPasswordPage from './pages/auth/reset-password';
import ForgetPasswordPage from './pages/auth/forget-password';
import UpdateProfilePage from './pages/auth/update-profile';
import ChangePasswordPage from './pages/auth/change-password';
import NotFound from './pages/not-found';
import AdminDashboard from './pages/admin-view/dashboard';
import CreateBlog from './pages/admin-view/create-blog';
import CreateProject from './pages/admin-view/create-project';
import CheckAuth from './components/common/check-auth';
import { useAppSelector } from './redux/hooks';
import UpdateProject from './pages/admin-view/update-project';
import { AllProjects } from './pages/admin-view/all-projects';
import { AllBlogs } from './pages/admin-view/all-blogs';
import UpdateBlog from './pages/admin-view/update-blog';

const App = () => {
  const { isAuthenticated } = useAppSelector((state) => state?.auth);
  return (
    <BrowserRouter>
      <Routes>
        {/* ===== for root =====*/}
        <Route path="/" element={<LoginPage />} />

        {/* ===== for auth=====*/}
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route index element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="reset-password" element={<ResetPasswordPage />} />
          <Route path="forget-password" element={<ForgetPasswordPage />} />
        </Route>

        {/* ===== for admin =====*/}
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="create-blog" element={<CreateBlog />} />
          <Route path="all-blogs" element={<AllBlogs />} />
          <Route path="update-blog/:id" element={<UpdateBlog />} />

          <Route path="create-project" element={<CreateProject />} />
          <Route path="all-projects" element={<AllProjects />} />
          <Route path="update-project/:id" element={<UpdateProject />} />

          <Route path="update-profile" element={<UpdateProfilePage />} />
          <Route path="change-password" element={<ChangePasswordPage />} />
        </Route>

        {/* ===== for not found =====*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
