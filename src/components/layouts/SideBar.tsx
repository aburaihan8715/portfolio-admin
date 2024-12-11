import {
  ArrowLeft,
  Home,
  LucideMenu,
  LucideX,
  PlusSquare,
  ShoppingCart,
} from 'lucide-react';
import ActiveLink from '../ui/ActiveLink';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router';

const menuItems = (
  <>
    <li className="flex">
      <ActiveLink className="flex items-center gap-2" to="/">
        <ArrowLeft className="text-2xl md:text-base" />
        <span className="">Home</span>
      </ActiveLink>
    </li>
    <li className="flex">
      <ActiveLink
        className="flex items-center gap-2"
        to="/dashboard/admin/home"
      >
        <Home className="text-2xl md:text-base" />
        <span className="">Admin Home</span>
      </ActiveLink>
    </li>
    <li className="flex">
      <ActiveLink
        className="flex items-center gap-2"
        to="/dashboard/create-room"
      >
        <PlusSquare className="text-2xl md:text-base" />
        <span className="">Create Room</span>
      </ActiveLink>
    </li>
    <li className="flex">
      <ActiveLink
        className="flex items-center gap-2"
        to="/dashboard/create-slot"
      >
        <PlusSquare className="text-2xl md:text-base" />
        <span className="">Create Slot</span>
      </ActiveLink>
    </li>
    <li className="flex">
      <ActiveLink
        className="flex items-center gap-2"
        to="/dashboard/make-admin"
      >
        <PlusSquare className="text-2xl md:text-base" />
        <span className="">Make Admin</span>
      </ActiveLink>
    </li>
  </>
);

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      {/* 01 For Desktop */}
      <nav className="hidden lg:block">
        {/* ADMIN ROUTES */}
        <ul className="flex flex-col gap-4">{menuItems}</ul>

        {/* USER ROUTES */}
        {/* <ul className="flex flex-col gap-4">
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
        </ul> */}
      </nav>

      {/* 01 For Mobile */}
      <nav className="lg:hidden">
        <div className="fixed top-0 z-20 flex h-[80px] w-full items-center justify-between bg-[#e9effd] px-2">
          <div onClick={() => setOpen(!open)} className="">
            {open && (
              <button className="flex items-center justify-center w-10 h-10 text-3xl border border-primary text-primary">
                <LucideMenu />
              </button>
            )}

            {!open && (
              <button className="flex items-center justify-center w-10 h-10 text-3xl border border-primary text-primary">
                <LucideX />
              </button>
            )}
          </div>

          <div className="flex gap-5">
            {/* cart */}
            <div className="mt-2">
              <Link className="" to="/cart">
                <div className="relative mr-2">
                  <ShoppingCart className="text-base text-[#212529]" />
                  <span className="absolute -top-2 left-4 flex h-5 w-5 items-center justify-center rounded-full bg-primary font-semibold text-[#f8f9fa]">
                    {`0`}
                  </span>
                </div>
              </Link>
            </div>

            <div>
              <Button>Logout</Button>
            </div>
          </div>
        </div>

        <nav className="">
          <ul
            className={`fixed top-[80px] z-20 flex h-full w-[180px] -translate-x-[100%] flex-col gap-2 overflow-y-auto bg-yellow-50/90 pl-8 pt-5 font-semibold text-[#212529] transition-transform duration-500 ${
              !open && 'translate-x-0'
            }`}
          >
            {menuItems}
          </ul>
        </nav>
      </nav>
    </>
  );
};

export default Sidebar;
