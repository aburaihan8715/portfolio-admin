import { Link, Outlet } from 'react-router';
import BrandLogo from '../ui/BrandLogo';
import Sidebar from '../common/sidebar';

const AdminLayout = () => {
  return (
    <>
      <div className="flex">
        <div>
          <div className="sticky bottom-0 top-0 md:h-screen md:flex-1">
            <div className="h-screen bg-gradient-to-r from-violet-200 to-pink-200 md:p-5 md:pl-10">
              <Link className="hidden md:block" to="/">
                <BrandLogo />
              </Link>
              <div className="mt-5">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[80px] flex-1 overflow-auto p-5 sm:mt-0 md:flex-[4]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;