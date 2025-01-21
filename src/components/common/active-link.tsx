import { ReactNode, useState } from 'react';
import { NavLink } from 'react-router';

interface IProps {
  className: string;
  children: ReactNode;
  to: string;
}

const ActiveLink = ({ className, children, to }: IProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return `${className} ${isActive || isHovered ? 'bg-gray-400/30' : ''} rounded-md px-2 py-1`;
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
