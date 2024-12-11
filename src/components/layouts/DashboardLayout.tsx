import { Link, Outlet } from 'react-router';
import BrandLogo from '../ui/BrandLogo';
import Sidebar from './SideBar';

const DashboardLayout = () => {
  return (
    <>
      <div className="flex">
        <div>
          <div className="sticky top-0 bottom-0 md:h-screen md:flex-1">
            <div className="h-screen bg-[#e9effd] md:p-5 md:pl-10">
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

export default DashboardLayout;
