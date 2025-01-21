import { Outlet } from 'react-router';
import AdminNavigation from '../admin-view/navigation';

const AdminLayout = () => {
  return (
    <>
      <div className="flex">
        <div className="sticky top-0 z-50 h-screen border-r md:w-[280px]">
          <AdminNavigation />
        </div>

        <div className="mt-[80px] flex-1 overflow-auto p-5 sm:mt-0 md:flex-[4]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
