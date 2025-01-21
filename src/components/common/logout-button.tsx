import { useDispatch } from 'react-redux';
import { FaSignOutAlt } from 'react-icons/fa'; // Import the logout icon
import { Button } from '../ui/button';
import { logout } from '@/redux/features/authSlice';
import { useNavigate } from 'react-router';

const LogoutButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <Button
      onClick={handleLogout}
      className="flex items-center space-x-2 transition duration-300 text-green-950 hover:bg-gray-500/10"
    >
      <FaSignOutAlt />
      <span>Logout</span>
    </Button>
  );
};

export default LogoutButton;
