import { Link } from 'react-router';
import BrandLogo from '../ui/BrandLogo';
import {
  LuFacebook,
  LuInstagram,
  LuLinkedin,
  LuTwitter,
} from 'react-icons/lu';

const date = new Date().toDateString().slice(4);

const Footer = () => {
  const role = 'user';
  return (
    <footer className="bg-orange-50">
      <div className="w-full px-1 mx-auto text-gray-700 max-w-7xl md:px-10">
        <div className="flex flex-col flex-wrap gap-10 p-1 py-24 mx-auto border-b-2 md:flex-row md:flex-nowrap md:items-center lg:items-start">
          {/* BRAND LOGO */}
          <div className="flex-shrink-0 w-full mx-auto text-center md:mx-0 md:w-64 md:text-left">
            <Link
              to="/"
              className="flex items-center justify-center font-medium text-gray-700 title-font md:justify-start"
            >
              <BrandLogo />
            </Link>
            <p className="mt-4 text-sm text-gray-700 text-wrap">
              Our meeting room booking website simplifies and streamlines
              efficient scheduling effortlessly.
            </p>
          </div>

          <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:mt-0 md:pl-20 md:text-left">
            {/* PAGES LINKS */}
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <h2 className="mb-3 text-sm font-semibold tracking-widest text-gray-700 title-font">
                PAGES LINKS
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <Link
                    to="/"
                    className="text-gray-700 transition-transform duration-150 hover:scale-105 hover:text-gray-800 hover:underline"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/meeting-rooms"
                    className="text-gray-700 transition-transform duration-150 hover:scale-105 hover:text-gray-800 hover:underline"
                  >
                    M Rooms
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/dashboard/${role}`}
                    className="text-gray-700 transition-transform duration-150 hover:scale-105 hover:text-gray-800 hover:underline"
                  >
                    Dashboard
                  </Link>
                </li>
              </nav>
            </div>

            {/* COMPANY */}
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <h2 className="mb-3 text-sm font-semibold tracking-widest text-gray-700 title-font">
                COMPANY
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-700 transition-transform duration-150 hover:scale-105 hover:text-gray-800 hover:underline"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-700 transition-transform duration-150 hover:scale-105 hover:text-gray-800 hover:underline"
                  >
                    Contact us
                  </Link>
                </li>
              </nav>
            </div>

            {/* LEGAL */}
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <h2 className="mb-3 text-sm font-semibold tracking-widest text-gray-700 title-font">
                LEGAL
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <a className="text-gray-700 hover:text-gray-800">
                    Terms of use
                  </a>
                </li>
                <li>
                  <a className="text-gray-700 hover:text-gray-800">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a className="text-gray-700 hover:text-gray-800">
                    Cookie policy
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col flex-wrap py-4 mx-auto sm:flex-row">
            <p className="text-sm text-center text-gray-700 sm:text-left">
              &copy; {date} MeetMe
            </p>

            {/* SOCIAL LINKS */}
            <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
              <a
                href="https://www.facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 text-gray-700"
              >
                <LuFacebook />
              </a>
              <a
                href="https://www.twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 text-gray-700"
              >
                <LuTwitter />
              </a>
              <a
                href="https://www.instagram.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 text-gray-700"
              >
                <LuInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 text-gray-700"
              >
                <LuLinkedin />
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
