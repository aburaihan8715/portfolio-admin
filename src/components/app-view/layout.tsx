import { Outlet } from 'react-router';

import Notification from '../ui/Notification';
import ScrollToTop from 'react-scroll-to-top';
import Header from '../common/header';
import Footer from '../common/footer';

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
