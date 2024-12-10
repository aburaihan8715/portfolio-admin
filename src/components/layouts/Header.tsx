import { useState } from 'react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Link } from 'react-router';
import { LuMenu, LuX } from 'react-icons/lu';
import ActiveLink from '../ui/ActiveLink';
import BrandLogo from '../ui/BrandLogo';
import { Button } from '../ui/button';
import defaultUser from '@/assets/images/defaultUser.png';

// HEADER COMPONENT
const Header = () => {
  const [open, setOpen] = useState(true);

  const role = 'admin';
  const name = 'Abu Raihan';
  const user = true;

  const menuItems = (
    <>
      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/shops">Shops</ActiveLink>
      </li>

      <li>
        <ActiveLink to={`/dashboard/${role}/home`}>Dashboard</ActiveLink>
      </li>
    </>
  );

  const handleLogout = () => {};

  return (
    <>
      {/* DESKTOP NAV */}
      <header className="sticky top-0 z-50 bg-orange-50">
        <div className="z-20 mx-auto hidden h-[80px] w-full max-w-7xl items-center justify-between md:px-5 lg:flex lg:px-10">
          {/* LOGO */}
          <Link to="/">
            <BrandLogo />
          </Link>
          <nav>
            <ul className="flex gap-4 font-semibold text-gray-700">
              {menuItems}
            </ul>
          </nav>

          {/* LOGIN,PROFILE GROUP */}
          <div className="flex items-center gap-4">
            {role && (
              <div title={name} className="flex items-center">
                <ProfilePopover role={role} />
              </div>
            )}

            {!user && (
              <div>
                <Link to={`/login`}>
                  <Button>Login</Button>
                </Link>
              </div>
            )}

            {user && (
              <div>
                <Button onClick={handleLogout}>Logout</Button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* MOBILE NAV */}
      <header className="lg:hidden">
        <div className="fixed top-0 z-20 flex h-[80px] w-full items-center justify-between bg-[#e9effd] px-2">
          <div onClick={() => setOpen(!open)} className="">
            {open && (
              <button className="flex items-center justify-center w-10 h-10 text-3xl border border-primary text-primary">
                <LuMenu />
              </button>
            )}

            {!open && (
              <button className="flex items-center justify-center w-10 h-10 text-3xl border border-primary text-primary">
                <LuX />
              </button>
            )}
          </div>

          <div className="flex items-center gap-4">
            {role && (
              <div title={name} className="flex items-center">
                <ProfilePopover role={role} />
              </div>
            )}

            {!user && (
              <div>
                <Link to={`/login`}>
                  <Button>Login</Button>
                </Link>
              </div>
            )}

            {user && (
              <div>
                <Button onClick={handleLogout}>Logout</Button>
              </div>
            )}
          </div>
        </div>

        <nav className="">
          <ul
            className={`fixed top-[80px] z-20 flex h-full w-[180px] -translate-x-[100%] flex-col gap-2 bg-yellow-50/90 pl-8 pt-5 font-semibold text-[#212529] transition-transform duration-500 ${
              !open && 'translate-x-0'
            }`}
          >
            {menuItems}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;

// PROFILE POPOVER COMPONENT
const ProfilePopover = ({ role }: { role: string }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <img
          className="object-cover w-10 h-10 rounded-full"
          src={defaultUser}
          alt=""
        />
      </PopoverTrigger>
      <PopoverContent className="mt-5">
        <h4 className="text-lg font-semibold">My account</h4>
        <hr className="my-2 border-gray-300" />
        {role === 'admin' ? (
          <>
            <div className="flex flex-col gap-2">
              <Link
                to="/dashboard/admin"
                className="border-b-2 w-fit border-b-transparent hover:border-b-2 hover:border-b-primary"
              >
                Dashboard
              </Link>
              <button className="text-left border-b-2 w-fit border-b-transparent hover:border-b-2 hover:border-b-primary">
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-2">
              <Link
                to="/dashboard/my-bookings"
                className="border-b-2 w-fit border-b-transparent hover:border-b-2 hover:border-b-primary"
              >
                My booking
              </Link>
              <button className="text-left border-b-2 w-fit border-b-transparent hover:border-b-2 hover:border-b-primary">
                Logout
              </button>
            </div>
          </>
        )}
      </PopoverContent>
    </Popover>
  );
};
