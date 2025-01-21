import { useState } from 'react';

import {
  FaCog,
  FaEye,
  FaFolderPlus,
  FaHome,
  FaLock,
  FaPen,
} from 'react-icons/fa';

import { MdClose, MdMenu } from 'react-icons/md';
import ActiveLink from '../common/active-link';
import LogoutButton from '../common/logout-button';
import BrandLogo from '../common/brand-logo';
import { Link } from 'react-router';

const AdminNavigation = () => {
  const [open, setOpen] = useState(true);
  const menuItems = (
    <>
      <p className="text-xs font-semibold uppercase opacity-50">Admin</p>

      <li className="flex">
        <ActiveLink
          className="flex w-full items-center gap-2"
          to="/admin/dashboard"
        >
          <FaHome className="text-base" />
          <span className="">Dashboard</span>
        </ActiveLink>
      </li>

      <li className="flex">
        <ActiveLink
          className="flex w-full items-center gap-2"
          to="/admin/create-blog"
        >
          <FaPen className="text-base" />
          <span className="">Create Blog</span>
        </ActiveLink>
      </li>

      <li className="flex">
        <ActiveLink
          className="flex w-full items-center gap-2"
          to="/admin/create-project"
        >
          <FaFolderPlus className="text-base" />
          <span className="">Create Project</span>
        </ActiveLink>
      </li>

      <li className="flex">
        <ActiveLink
          className="flex w-full items-center gap-2"
          to="/admin/all-projects"
        >
          <FaEye className="text-base" />
          <span className="">All Projects</span>
        </ActiveLink>
      </li>

      <p className="text-xs font-semibold uppercase opacity-50">
        Settings
      </p>
      <li className="flex">
        <ActiveLink
          className="flex w-full items-center gap-2"
          to="/admin/update-profile"
        >
          <FaCog className="text-base" />
          <span className="">Update Profile</span>
        </ActiveLink>
      </li>
      <li className="flex">
        <ActiveLink
          className="flex w-full items-center gap-2"
          to="/admin/change-password"
        >
          <FaLock className="text-base" />
          <span className="">Change password</span>
        </ActiveLink>
      </li>
    </>
  );

  return (
    <>
      {/* Desktop nav */}
      <nav className="hidden lg:block">
        <ul className="flex flex-col gap-2 p-8">
          <Link to={`/`}>
            <BrandLogo />
          </Link>
          <div className="mt-2 space-y-2">{menuItems}</div>
          <div className="mt-10">
            <LogoutButton />
          </div>
        </ul>
      </nav>

      {/* Mobile nav */}
      <div>
        <div className="lg:hidden">
          <div className="fixed top-0 z-20 flex h-[80px] w-full items-center justify-between bg-green-100 px-2">
            <button
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 items-center justify-center rounded border border-gray-700/50 text-3xl"
            >
              {open ? <MdMenu /> : <MdClose />}
            </button>

            <div className="">
              <LogoutButton />
            </div>
          </div>
        </div>

        <nav className="lg:hidden">
          <ul
            className={`fixed top-[80px] z-50 flex h-full w-[280px] -translate-x-[100%] flex-col gap-2 overflow-y-auto bg-green-100 pl-8 pr-3 pt-5 transition-transform duration-500 ${
              !open && 'translate-x-0'
            }`}
          >
            {menuItems}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default AdminNavigation;
