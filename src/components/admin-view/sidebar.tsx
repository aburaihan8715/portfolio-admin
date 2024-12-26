import { useState } from 'react';

import {
  FaBars,
  FaBriefcase,
  FaCog,
  FaFolderPlus,
  FaHome,
  FaLightbulb,
  FaLock,
  FaPen,
  FaRegWindowClose,
} from 'react-icons/fa';
import ActiveLink from '../common/active-link';
import LogoutButton from '../common/logout-button';

const AdminSidebar = () => {
  const [open, setOpen] = useState(true);
  const menuItems = (
    <>
      <p className="text-xs font-semibold uppercase opacity-50">Admin</p>

      <li className="flex ml-1">
        <ActiveLink
          className="flex items-center gap-2"
          to="/admin/dashboard"
        >
          <FaHome className="text-base" />
          <span className="">Dashboard</span>
        </ActiveLink>
      </li>

      <li className="flex ml-1">
        <ActiveLink
          className="flex items-center gap-2"
          to="/admin/create-blog"
        >
          <FaPen className="text-base" />
          <span className="">Create Blog</span>
        </ActiveLink>
      </li>

      <li className="flex ml-1">
        <ActiveLink
          className="flex items-center gap-2"
          to="/admin/create-project"
        >
          <FaFolderPlus className="text-base" />
          <span className="">Create Project</span>
        </ActiveLink>
      </li>
      <li className="flex ml-1">
        <ActiveLink
          className="flex items-center gap-2"
          to="/admin/create-project"
        >
          <FaBriefcase className="text-base" />
          <span className="">Create Experience</span>
        </ActiveLink>
      </li>

      <li className="flex ml-1">
        <ActiveLink
          className="flex items-center gap-2"
          to="/admin/create-project"
        >
          <FaLightbulb className="text-base" />
          <span className="">Create Skills</span>
        </ActiveLink>
      </li>

      <p className="text-xs font-semibold uppercase opacity-50">
        Settings
      </p>
      <li className="flex ml-1">
        <ActiveLink
          className="flex items-center gap-2"
          to="/update-profile"
        >
          <FaCog className="text-base" />
          <span className="">Update Profile</span>
        </ActiveLink>
      </li>
      <li className="flex ml-1">
        <ActiveLink
          className="flex items-center gap-2"
          to="/change-password"
        >
          <FaLock className="text-base" />
          <span className="">Change password</span>
        </ActiveLink>
      </li>
    </>
  );

  return (
    <>
      {/* 01 For Desktop */}
      <nav className="hidden lg:block">
        <ul className="flex flex-col gap-3">{menuItems}</ul>

        <div className="mt-20">
          <LogoutButton />
        </div>
      </nav>

      {/* 01 For Mobile */}
      <nav className="lg:hidden">
        <div className="fixed top-0 z-20 flex h-[80px] w-full items-center justify-between bg-[#e9effd] px-2">
          <div onClick={() => setOpen(!open)} className="">
            {open && (
              <button className="flex items-center justify-center w-10 h-10 text-2xl border border-primary text-primary">
                <FaBars />
              </button>
            )}

            {!open && (
              <button className="flex items-center justify-center w-10 h-10 text-2xl border border-primary text-primary">
                <FaRegWindowClose />
              </button>
            )}
          </div>

          <div className="">
            <LogoutButton />
          </div>
        </div>

        <nav className="">
          <ul
            className={`fixed top-[80px] z-20 flex h-full w-[200px] -translate-x-[100%] flex-col gap-2 overflow-y-auto bg-yellow-50/90 pl-8 pt-5 font-semibold text-[#212529] transition-transform duration-500 ${
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

export default AdminSidebar;
