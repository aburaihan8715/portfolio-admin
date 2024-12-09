import { Home, LucideMenu, LucideX, PlusSquare } from 'lucide-react';
import ActiveLink from '../ui/ActiveLink';
import { useState } from 'react';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      {/* 01 For Desktop */}
      <nav className="hidden lg:block">
        {/* ADMIN ROUTES */}
        <ul className="flex flex-col gap-4">
          <li className="flex">
            <ActiveLink className="flex items-center gap-2" to="/">
              <Home className="text-2xl md:text-base" />
              <span className="hidden md:block">Home</span>
            </ActiveLink>
          </li>
          <li className="flex">
            <ActiveLink
              className="flex items-center gap-2"
              to="/dashboard/admin"
            >
              <Home className="text-2xl md:text-base" />
              <span className="hidden md:block">Admin Home</span>
            </ActiveLink>
          </li>
          <li className="flex">
            <ActiveLink
              className="flex items-center gap-2"
              to="/dashboard/create-room"
            >
              <PlusSquare className="text-2xl md:text-base" />
              <span className="hidden md:block">Create Room</span>
            </ActiveLink>
          </li>
          <li className="flex">
            <ActiveLink
              className="flex items-center gap-2"
              to="/dashboard/create-slot"
            >
              <PlusSquare className="text-2xl md:text-base" />
              <span className="hidden md:block">Create Slot</span>
            </ActiveLink>
          </li>
          <li className="flex">
            <ActiveLink
              className="flex items-center gap-2"
              to="/dashboard/make-admin"
            >
              <PlusSquare className="text-2xl md:text-base" />
              <span className="hidden md:block">Make Admin</span>
            </ActiveLink>
          </li>
        </ul>

        {/* USER ROUTES */}
        <ul className="flex flex-col gap-4">
          <li className="flex">
            <ActiveLink className="flex items-center gap-2" to="/">
              <Home className="text-2xl md:text-base" />
              <span className="hidden md:block">Home</span>
            </ActiveLink>
          </li>
          <li className="flex">
            <ActiveLink
              className="flex items-center gap-2"
              to="/dashboard/user"
            >
              <Home className="text-2xl md:text-base" />
              <span className="hidden md:block">User Home</span>
            </ActiveLink>
          </li>
          <li className="flex">
            <ActiveLink
              className="flex items-center gap-2"
              to="/dashboard/my-bookings"
            >
              <PlusSquare className="text-2xl md:text-base" />
              <span className="hidden md:block">My Bookings</span>
            </ActiveLink>
          </li>
        </ul>
      </nav>

      {/* 01 For Mobile */}
      <nav className="lg:hidden">
        <div className="flex px-2 bg-[#e9effd] h-[80px] items-center justify-between fixed top-0 w-full z-20">
          <div onClick={() => setOpen(!open)} className="">
            {open && (
              <button className="flex items-center justify-center w-10 h-10 text-3xl border text-primary border-primary">
                <LucideMenu />
              </button>
            )}

            {!open && (
              <button className="flex items-center justify-center w-10 h-10 text-3xl border text-primary border-primary">
                <LucideX />
              </button>
            )}
          </div>
        </div>

        <nav className="">
          <ul
            className={`flex bg-yellow-50/90 fixed top-[80px] z-20 h-full flex-col gap-2 font-semibold text-[#212529] pt-5 pl-8 w-[180px] -translate-x-[100%] transition-transform duration-500 ${
              !open && 'translate-x-0'
            }`}
          >
            <li>
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/shops">Shops</ActiveLink>
            </li>

            <li>
              <ActiveLink to={`/dashboard`}>Dashboard</ActiveLink>
            </li>
          </ul>
        </nav>
      </nav>
    </>
  );
};

export default Sidebar;
