import { Outlet } from 'react-router';
import Footer from './Footer';
import Header from './Header';
import Notification from '../ui/Notification';
import ScrollToTop from 'react-scroll-to-top';

const AppLayout = () => {
  return (
    <>
      <div>
        <Notification />
        <Header />
        <div className="min-h-screen">
          <Outlet />
        </div>
        <Footer />
      </div>
      <ScrollToTop
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        smooth
        color="#085749"
      />
    </>
  );
};

export default AppLayout;
